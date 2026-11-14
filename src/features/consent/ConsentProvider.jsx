import { useCallback, useState } from 'react'

import { ConsentContext } from './consentContext'

import { CONSENT_STATUS, getStoredConsent, saveConsent } from './consentStorage'

import { disableAnalytics } from '../analytics/analytics'

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(getStoredConsent)
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [consentError, setConsentError] = useState(false)

  const updateConsent = useCallback((status) => {
    if (status === CONSENT_STATUS.REJECTED) {
      // Apply rejection immediately, regardless of storage availability.
      disableAnalytics()
      setConsent(CONSENT_STATUS.REJECTED)

      const saved = saveConsent(CONSENT_STATUS.REJECTED)

      setConsentError(!saved)

      if (saved) {
        setPreferencesOpen(false)
      }

      return
    }

    if (status === CONSENT_STATUS.ACCEPTED) {
      const saved = saveConsent(CONSENT_STATUS.ACCEPTED)

      if (!saved) {
        disableAnalytics()
        setConsent(CONSENT_STATUS.PENDING)
        setConsentError(true)
        return
      }

      setConsent(CONSENT_STATUS.ACCEPTED)
      setConsentError(false)
      setPreferencesOpen(false)
    }
  }, [])

  const acceptConsent = useCallback(() => {
    updateConsent(CONSENT_STATUS.ACCEPTED)
  }, [updateConsent])

  const rejectConsent = useCallback(() => {
    updateConsent(CONSENT_STATUS.REJECTED)
  }, [updateConsent])

  const openPreferences = useCallback(() => {
    setConsentError(false)
    setPreferencesOpen(true)
  }, [])

  const closePreferences = useCallback(() => {
    setPreferencesOpen(false)
  }, [])

  const value = {
    consent,
    consentError,
    preferencesOpen,
    acceptConsent,
    rejectConsent,
    openPreferences,
    closePreferences,
  }

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}
