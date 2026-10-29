function SectionLabel({ number, label, className = '' }) {
  const classes = ['section-label', className].filter(Boolean).join(' ')

  return (
    <p className={classes}>
      {number} - {label}
    </p>
  )
}

export default SectionLabel
