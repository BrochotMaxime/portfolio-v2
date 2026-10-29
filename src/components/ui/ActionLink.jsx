import { Link } from 'react-router'

function ActionLink({ children, to, href, external = false, variant = 'text', className = '' }) {
  const classes = ['action-link', `action-link--${variant}`, className].filter(Boolean).join(' ')

  const content = (
    <>
      <span>{children}</span>
      <span className="action-link__arrow" aria-hidden="true">
        →
      </span>
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </>
  )

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {content}
    </Link>
  )
}

export default ActionLink
