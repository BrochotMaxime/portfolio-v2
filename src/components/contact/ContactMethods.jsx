import { FiMail } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

const icons = {
  mail: FiMail,
  github: SiGithub,
  linkedin: FaLinkedin,
}

function ContactMethods({ methods }) {
  return (
    <div className="contact-methods">
      <h2 className="contact-methods__title">{methods.title}</h2>

      <ul className="contact-methods__list">
        {methods.items.map((method) => {
          const Icon = icons[method.icon]
          const isExternal = method.href.startsWith('https://')

          return (
            <li key={method.id} className="contact-methods__item">
              <a
                href={method.href}
                className="contact-methods__link"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                aria-label={isExternal ? `${method.label} (opens in a new tab)` : undefined}
              >
                <span className="contact-methods__icon">{Icon && <Icon aria-hidden="true" />}</span>

                <span className="contact-methods__content">
                  <span className="contact-methods__label">{method.label}</span>
                  <span className="contact-methods__text">{method.text}</span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ContactMethods
