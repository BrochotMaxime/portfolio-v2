const GA_COOKIE_PATTERN = /^_ga(?:_|$)/

export function clearAnalyticsCookies() {
  const cookies = document.cookie.split(';')
  const domain = window.location.hostname

  for (const cookie of cookies) {
    const name = cookie.trim().split('=')[0]

    if (!GA_COOKIE_PATTERN.test(name)) {
      continue
    }

    // Delete host-only cookies.
    document.cookie = `${name}=; Max-Age=0; Path=/`

    // Delete cookies scoped to the current domain.
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${domain}`
  }
}
