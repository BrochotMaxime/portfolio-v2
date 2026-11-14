import { clearAnalyticsCookies } from './analyticsCookies'

const GA_MEASUREMENT_ID = 'G-87SHLCF86N'
const GA_DISABLE_KEY = `ga-disable-${GA_MEASUREMENT_ID}`

let analyticsAllowed = false
let analyticsInitialized = false

// Disable analytics until consent is granted.
window[GA_DISABLE_KEY] = true

function initializeGtag() {
  window.dataLayer = window.dataLayer || []

  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })

  window.gtag('js', new Date())

  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
}

export function enableAnalytics() {
  if (analyticsAllowed) {
    return
  }

  analyticsAllowed = true
  window[GA_DISABLE_KEY] = false

  if (analyticsInitialized) {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    })

    return
  }

  analyticsInitialized = true

  initializeGtag()

  const script = document.createElement('script')

  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`

  document.head.appendChild(script)
}

export function disableAnalytics() {
  analyticsAllowed = false
  window[GA_DISABLE_KEY] = true

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    })
  }

  clearAnalyticsCookies()
}

export function trackPageView(path) {
  if (!analyticsAllowed || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    send_to: GA_MEASUREMENT_ID,
    debug_mode: import.meta.env.DEV,
  })
}
