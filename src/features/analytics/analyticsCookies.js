const GA_COOKIE_PATTERN = /^_ga(?:_|$)/

export function clearAnalyticsCookies() {
  const cookies = document.cookie.split(';')

  for (const cookie of cookies) {
    const name = cookie.trim().split('=')[0]

    if (!GA_COOKIE_PATTERN.test(name)) {
      continue
    }

    document.cookie = `${name}=; Max-Age=0; Path=/`
  }
}
