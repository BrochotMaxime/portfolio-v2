import { Link } from 'react-router'

import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

import Container from './Container'

const footerLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
  { label: 'Legal', to: '/legal' },
]

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          {/* Identity */}
          <div className="footer__identity">
            <p className="footer__name">Maxime Brochot</p>
            <p className="footer__role">Développeur Web</p>
          </div>

          {/* Social links */}
          <div className="footer__socials">
            <a
              href="https://github.com/BrochotMaxime"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <SiGithub aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/Maxime-Brochot/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>

          {/* Footer navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            {footerLinks.map(({ label, to }) => (
              <Link key={to} to={to} className="footer__link">
                {label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="footer__copyright">
            © {new Date().getFullYear()} Maxime Brochot. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
