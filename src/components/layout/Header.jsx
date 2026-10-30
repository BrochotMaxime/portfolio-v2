import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import Container from './Container'

// Main navigation links
const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  // Current React Router location
  const location = useLocation()

  // Store the route on which the mobile menu was opened
  const [menuOpenPath, setMenuOpenPath] = useState(null)

  // The menu is open only on its original route
  const isMenuOpen = menuOpenPath === location.pathname

  // References for keyboard focus management
  const menuButtonRef = useRef(null)
  const firstLinkRef = useRef(null)

  // Toggle the mobile menu
  function toggleMenu() {
    setMenuOpenPath(isMenuOpen ? null : location.pathname)
  }

  // Close the mobile menu
  function closeMenu() {
    setMenuOpenPath(null)
  }

  // Close the mobile menu and restore focus to the toggle button
  function closeMenuAndRestoreFocus() {
    closeMenu()
    menuButtonRef.current?.focus()
  }

  // Close the menu with Escape and restore button focus
  function handleMenuKeyDown(event) {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenuAndRestoreFocus()
    }
  }

  // Focus the first navigation link when the menu opens
  useLayoutEffect(() => {
    if (isMenuOpen) {
      firstLinkRef.current?.focus()
    }
  }, [isMenuOpen])

  // Reset the mobile menu when switching to desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 75rem)')

    function handleBreakpointChange(event) {
      if (event.matches) {
        setMenuOpenPath(null)
      }
    }

    mediaQuery.addEventListener('change', handleBreakpointChange)

    return () => {
      mediaQuery.removeEventListener('change', handleBreakpointChange)
    }
  }, [])

  return (
    <>
      {/* Header and navigation */}
      <header className="header" onKeyDown={handleMenuKeyDown}>
        <Container>
          <div className="header__inner">
            {/* Brand link */}
            <NavLink to="/" className="header__brand" aria-label="Home" onClick={closeMenu}>
              Portfolio.
            </NavLink>

            {/* Mobile menu toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              className="header__menu-button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={toggleMenu}
            >
              <span aria-hidden="true">{isMenuOpen ? '✕' : '☰'}</span>
            </button>

            {/* Desktop navigation */}
            <nav className="header__nav" aria-label="Main navigation">
              {navigationItems.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `header__link${isActive ? ' header__link--active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </Container>

        {/* Animated mobile navigation */}
        <nav
          id="mobile-navigation"
          className={`header__mobile-nav${isMenuOpen ? ' header__mobile-nav--open' : ''}`}
          aria-label="Mobile navigation"
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
        >
          <Container>
            <div className="header__mobile-links">
              {navigationItems.map(({ label, to }, index) => (
                <NavLink
                  key={to}
                  ref={index === 0 ? firstLinkRef : undefined}
                  to={to}
                  end={to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `header__mobile-link${isActive ? ' header__mobile-link--active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </Container>
        </nav>
      </header>

      {/* Background overlay used to close the mobile menu */}
      <button
        type="button"
        className={`header-overlay${isMenuOpen ? ' header-overlay--visible' : ''}`}
        aria-label="Close navigation"
        aria-hidden={!isMenuOpen}
        tabIndex={-1}
        onClick={closeMenuAndRestoreFocus}
      />
    </>
  )
}

export default Header
