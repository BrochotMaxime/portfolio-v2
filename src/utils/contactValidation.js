export const CONTACT_LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  subject: { max: 150 },
  message: { min: 10, max: 5000 },
}

export function validateContact(values) {
  const errors = {}

  const name = (values.name ?? '').trim()
  const email = (values.email ?? '').trim()
  const subject = (values.subject ?? '').trim()
  const message = (values.message ?? '').trim()

  if (name.length < CONTACT_LIMITS.name.min) {
    errors.name = 'Please enter your full name (at least 2 characters).'
  } else if (name.length > CONTACT_LIMITS.name.max) {
    errors.name = 'Your name must not exceed 100 characters.'
  }

  if (!email) {
    errors.email = 'Please enter your email address.'
  } else if (email.length > CONTACT_LIMITS.email.max) {
    errors.email = 'Your email address is too long.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (subject.length > CONTACT_LIMITS.subject.max) {
    errors.subject = 'The subject must not exceed 150 characters.'
  }

  if (message.length < CONTACT_LIMITS.message.min) {
    errors.message = 'Please enter a message of at least 10 characters.'
  } else if (message.length > CONTACT_LIMITS.message.max) {
    errors.message = 'Your message must not exceed 5000 characters.'
  }

  return errors
}
