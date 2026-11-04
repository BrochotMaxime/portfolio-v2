import { Link } from 'react-router'

function ContactForm({ form }) {
  return (
    <div className="contact-form">
      <h2 className="contact-form__title">{form.title}</h2>

      <p className="contact-form__description">{form.description}</p>

      <form className="contact-form__form">
        <p className="contact-form__required-note">
          Fields marked with <span aria-hidden="true">*</span> are required.
        </p>

        <div className="contact-form__fields">
          {form.fields.map((field) => {
            const fieldId = `contact-${field.id}`

            return (
              <div
                key={field.id}
                className={`contact-form__field ${
                  field.id === 'subject' || field.type === 'textarea'
                    ? 'contact-form__field--full'
                    : ''
                }`}
              >
                <label htmlFor={fieldId} className="contact-form__label">
                  {field.label}

                  {field.required && (
                    <span className="contact-form__required" aria-hidden="true">
                      *
                    </span>
                  )}
                </label>

                {field.type === 'textarea' ? (
                  <textarea
                    id={fieldId}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    rows={6}
                    className="contact-form__input contact-form__textarea"
                  />
                ) : (
                  <input
                    id={fieldId}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="contact-form__input"
                  />
                )}
              </div>
            )
          })}
        </div>

        <p className="contact-form__privacy">
          {form.privacyNotice.text}{' '}
          <Link to={form.privacyNotice.link.to}>{form.privacyNotice.link.label}</Link>
        </p>

        <button type="button" className="contact-form__submit" disabled>
          {form.submitLabel}
        </button>

        <p className="contact-form__availability">Message sending will be available soon.</p>
      </form>
    </div>
  )
}

export default ContactForm
