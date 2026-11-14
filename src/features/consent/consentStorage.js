const CONSENT_STORAGE_KEY = 'portfolio-analytics-consent'
const CONSENT_DURATION_MS = 180 * 24 * 60 * 60 * 1000

export const CONSENT_STATUS = Object.freeze({
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
})

export function getStoredConsent() {
  try {
    const storedValue = localStorage.getItem(CONSENT_STORAGE_KEY)

    if (!storedValue) {
      return CONSENT_STATUS.PENDING
    }

    const consent = JSON.parse(storedValue)
    const now = Date.now()

    if (
      !consent ||
      ![CONSENT_STATUS.ACCEPTED, CONSENT_STATUS.REJECTED].includes(consent.status) ||
      typeof consent.timestamp !== 'number' ||
      !Number.isFinite(consent.timestamp) ||
      consent.timestamp > now ||
      now - consent.timestamp >= CONSENT_DURATION_MS
    ) {
      return CONSENT_STATUS.PENDING
    }

    return consent.status
  } catch {
    return CONSENT_STATUS.PENDING
  }
}

export function saveConsent(status) {
  if (status !== CONSENT_STATUS.ACCEPTED && status !== CONSENT_STATUS.REJECTED) {
    return false
  }

  try {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        status,
        timestamp: Date.now(),
      }),
    )

    return true
  } catch {
    return false
  }
}
