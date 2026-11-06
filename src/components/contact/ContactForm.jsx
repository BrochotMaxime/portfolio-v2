import { useEffect, useRef, useState } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

import contact from '../../data/contact'
import { validateContact } from '../../utils/contactValidation'

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY

export default function ContactForm() {
  const { form } = contact

  const formRef = useRef(null)
  const turnstileRef = useRef(null)
  const pendingFocusRef = useRef(null)

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileError, setTurnstileError] = useState('')

  useEffect(() => {
    if (!pendingFocusRef.current) return

    const field = formRef.current?.elements.namedItem(pendingFocusRef.current)

    field?.focus()

    pendingFocusRef.current = null
  }, [errors])

  function handleChange(event) {
    const { name } = event.target

    setErrors((previous) => {
      if (!previous[name]) return previous

      const updated = { ...previous }
      delete updated[name]
      return updated
    })

    if (status === 'error' || status === 'success') {
      setStatus('idle')
      setFeedback('')
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (status === 'submitting') return

    const formElement = event.currentTarget
    const formData = new FormData(formElement)

    const values = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
    }

    const validationErrors = validateContact(values)

    setErrors(validationErrors)
    setFeedback('')
    setStatus('idle')

    if (Object.keys(validationErrors).length > 0) {
      pendingFocusRef.current = Object.keys(validationErrors)[0]
      return
    }

    if (!turnstileToken) {
      setStatus('error')

      if (turnstileError) {
        // The specific error is already displayed beside Turnstile.
        setFeedback('')
      } else {
        setFeedback('Please complete the security verification.')
      }

      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          turnstileToken,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        if (response.status === 400 && result.fields) {
          pendingFocusRef.current = Object.keys(result.fields)[0] ?? null
          setErrors(result.fields)
        }

        setStatus('error')
        setFeedback(result.error || form.feedback.error)
        return
      }

      setStatus('success')
      setFeedback(form.feedback.success)

      formElement.reset()
      setTurnstileError('')
    } catch (error) {
      console.error('Contact form submission error:', error)

      setStatus('error')
      setFeedback(form.feedback.error)
    } finally {
      turnstileRef.current?.reset()
      setTurnstileToken('')
    }
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
      <p className="contact-form__required-note">Fields marked with * are required.</p>

      <div className="contact-form__fields">
        {form.fields.map((field) => {
          const hasError = Boolean(errors[field.name])
          const errorId = `${field.id}-error`

          return (
            <div
              key={field.id}
              className={`contact-form__field${field.fullWidth ? ' contact-form__field--full' : ''}`}
            >
              <label className="contact-form__label" htmlFor={field.id}>
                {field.label}
                {field.required && <span aria-hidden="true"> *</span>}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  className="contact-form__input"
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? errorId : undefined}
                  onChange={handleChange}
                  rows={6}
                />
              ) : (
                <input
                  className="contact-form__input"
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? errorId : undefined}
                  onChange={handleChange}
                />
              )}

              {hasError && (
                <p className="contact-form__error" id={errorId}>
                  {errors[field.name]}
                </p>
              )}
            </div>
          )
        })}
      </div>

      <div className="contact-form__turnstile">
        {TURNSTILE_SITE_KEY ? (
          <Turnstile
            ref={turnstileRef}
            siteKey={TURNSTILE_SITE_KEY}
            options={{
              theme: 'auto',
            }}
            onSuccess={(token) => {
              setTurnstileToken(token)
              setTurnstileError('')
            }}
            onExpire={() => {
              setTurnstileToken('')
              setTurnstileError('Security verification expired. Please try again.')
            }}
            onError={() => {
              setTurnstileToken('')
              setTurnstileError('Security verification failed. Please try again.')
            }}
          />
        ) : (
          <p className="contact-form__error">Security verification is unavailable.</p>
        )}

        {turnstileError && (
          <p className="contact-form__error" role="alert">
            {turnstileError}
          </p>
        )}
      </div>

      <button
        className="contact-form__submit"
        type="submit"
        disabled={status === 'submitting' || !TURNSTILE_SITE_KEY}
      >
        {status === 'submitting' ? 'Sending...' : form.submitLabel}
      </button>

      {feedback && (
        <p
          className={`contact-form__feedback contact-form__feedback--${status}`}
          role={status === 'success' ? 'status' : 'alert'}
        >
          {feedback}
        </p>
      )}

      <p className="contact-form__privacy">
        {form.privacyNotice.text}{' '}
        <a href={form.privacyNotice.link.to}>{form.privacyNotice.link.label}</a>
      </p>
    </form>
  )
}
