import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router'

function ScrollToTop() {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()

  const previousPathnameRef = useRef(pathname)

  useEffect(() => {
    // Ignore navigations within the same page
    if (previousPathnameRef.current === pathname) {
      return
    }

    previousPathnameRef.current = pathname

    // Scroll to the top of the new page
    window.scrollTo(0, 0)

    // Preserve browser history focus behavior
    if (navigationType === 'POP') return

    // Focus the main heading of the new page
    const heading = document.querySelector('#main-content h1')

    heading?.focus({ preventScroll: true })
  }, [pathname, navigationType])

  return null
}

export default ScrollToTop
