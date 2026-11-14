import { Link } from 'react-router'

import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

import { useConsent } from '../../features/consent/useConsent'

import site from '../../data/site'
import Container from './Container'

const footerLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  const { openPreferences } = useConsent()

  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__main">
            {/* Identity */}
            <div className="footer__identity">
              <p className="footer__name">{site.owner}</p>
              <p className="footer__role">{site.role}</p>
            </div>

            {/* Social links */}
            <div className="footer__socials">
              <a
                href={site.socialLinks.github}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
              >
                <SiGithub aria-hidden="true" />
              </a>

              <a
                href={site.socialLinks.linkedin}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </div>

            {/* Main navigation */}
            <nav className="footer__nav" aria-label="Footer navigation">
              {footerLinks.map(({ label, to }) => (
                <Link key={to} to={to} className="footer__link">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer__bottom">
            {/* Copyright */}
            <p className="footer__copyright">
              © {new Date().getFullYear()} {site.owner}. All rights reserved.
            </p>

            {/* Legal and privacy links */}
            <nav className="footer__utilities" aria-label="Legal and privacy">
              <Link to="/legal" className="footer__utility-link">
                Legal
              </Link>

              <button
                type="button"
                className="footer__utility-link footer__cookie-settings"
                onClick={openPreferences}
              >
                Cookie settings
              </button>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
