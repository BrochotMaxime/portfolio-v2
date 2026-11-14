import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

import { useConsent } from '../consent/useConsent'

import { enableAnalytics, disableAnalytics, trackPageView } from '../analytics/analytics'

import { CONSENT_STATUS } from '../consent/consentStorage'

function AnalyticsManager() {
  const { consent } = useConsent()
  const location = useLocation()

  const lastTrackedPath = useRef(null)

  const path = `${location.pathname}${location.search}`

  useEffect(() => {
    if (consent !== CONSENT_STATUS.ACCEPTED) {
      disableAnalytics()
      lastTrackedPath.current = null
      return
    }

    enableAnalytics()

    if (lastTrackedPath.current === path) {
      return
    }

    trackPageView(path)
    lastTrackedPath.current = path
  }, [consent, path])

  return null
}

export default AnalyticsManager
