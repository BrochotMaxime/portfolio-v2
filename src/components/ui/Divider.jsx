function Divider({ decorative = true, className = '' }) {
  const classes = ['divider', className].filter(Boolean).join(' ')

  return <hr className={classes} aria-hidden={decorative ? 'true' : undefined} />
}

export default Divider
