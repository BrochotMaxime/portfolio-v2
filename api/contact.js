import { Resend } from 'resend'

const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  subject: { max: 150 },
  message: { min: 10, max: 5000 },
}

const MAX_BODY_SIZE = 16_384

function validateContactData(data) {
  const errors = {}

  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return { form: 'Invalid request data.' }
  }

  const requiredFields = ['name', 'email', 'message']

  for (const field of requiredFields) {
    if (typeof data[field] !== 'string') {
      errors[field] = 'Invalid field value.'
    }
  }

  if (data.subject != null && typeof data.subject !== 'string') {
    errors.subject = 'Invalid field value.'
  }

  if (Object.keys(errors).length > 0) {
    return errors
  }

  const name = data.name.trim()
  const email = data.email.trim()
  const subject = (data.subject ?? '').trim()
  const message = data.message.trim()

  if (name.length < LIMITS.name.min || name.length > LIMITS.name.max) {
    errors.name = 'Name must contain between 2 and 100 characters.'
  }

  if (email.length > LIMITS.email.max || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (subject.length > LIMITS.subject.max) {
    errors.subject = 'Subject must not exceed 150 characters.'
  }

  if (message.length < LIMITS.message.min || message.length > LIMITS.message.max) {
    errors.message = 'Message must contain between 10 and 5000 characters.'
  }

  return errors
}

async function verifyTurnstileToken(token) {
  const secret = process.env.TURNSTILE_SECRET_KEY

  if (!secret) {
    throw new Error('Missing TURNSTILE_SECRET_KEY environment variable.')
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  })

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
    signal: AbortSignal.timeout(5000),
  })

  if (!response.ok) {
    throw new Error('Turnstile verification service unavailable.')
  }

  const result = await response.json()

  if (!result || typeof result.success !== 'boolean') {
    throw new Error('Invalid Turnstile verification response.')
  }

  return result.success === true
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')

    return response.status(405).json({
      error: 'Method not allowed.',
    })
  }

  const contentType = request.headers['content-type'] ?? ''

  if (!/^application\/json(?:\s*;|$)/i.test(contentType)) {
    return response.status(415).json({
      error: 'Content-Type must be application/json.',
    })
  }

  const contentLength = Number(request.headers['content-length'])

  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_SIZE) {
    return response.status(413).json({
      error: 'Request body is too large.',
    })
  }

  // Additional size check independent of Content-Length.
  // The serverless runtime may already have parsed the request body.
  let bodySize

  try {
    bodySize = Buffer.byteLength(JSON.stringify(request.body ?? {}), 'utf8')
  } catch {
    return response.status(400).json({
      error: 'Invalid request data.',
    })
  }

  if (bodySize > MAX_BODY_SIZE) {
    return response.status(413).json({
      error: 'Request body is too large.',
    })
  }

  const errors = validateContactData(request.body)

  if (Object.keys(errors).length > 0) {
    return response.status(400).json({
      error: 'Validation failed.',
      fields: errors,
    })
  }

  const { turnstileToken } = request.body

  if (typeof turnstileToken !== 'string' || !turnstileToken || turnstileToken.length > 2048) {
    return response.status(400).json({
      error: 'Security verification is required.',
    })
  }

  try {
    const verified = await verifyTurnstileToken(turnstileToken)

    if (!verified) {
      return response.status(403).json({
        error: 'Security verification failed. Please try again.',
      })
    }
  } catch (error) {
    console.error('Turnstile verification error:', error)

    return response.status(503).json({
      error: 'Security verification is temporarily unavailable.',
    })
  }

  const { name, email, subject, message } = request.body

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedSubject = (subject ?? '').trim()
  const trimmedMessage = message.trim()

  if (!process.env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable.')

    return response.status(500).json({
      error: 'Email service is not configured.',
    })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <contact@maxime-brochot.dev>',
      to: ['brochot.max@gmail.com'],
      replyTo: trimmedEmail,
      subject: trimmedSubject || 'New portfolio contact message',
      text: [
        'New message from your portfolio contact form',
        '',
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        `Subject: ${trimmedSubject || 'Not provided'}`,
        '',
        'Message:',
        trimmedMessage,
      ].join('\n'),
    })

    if (error || !data?.id) {
      console.error('Resend email error:', error?.name ?? 'Missing email ID')

      return response.status(502).json({
        error: 'Unable to send the message.',
      })
    }

    console.info('Contact email accepted by Resend:', data?.id)

    return response.status(200).json({
      message: 'Your message has been submitted successfully.',
    })
  } catch (error) {
    console.error('Unexpected email service error:', error)

    return response.status(502).json({
      error: 'Email service is temporarily unavailable.',
    })
  }
}
