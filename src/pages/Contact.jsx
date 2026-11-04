import Container from '../components/layout/Container'

import SectionLabel from '../components/ui/SectionLabel'

import ContactMethods from '../components/contact/ContactMethods'
import ContactForm from '../components/contact/ContactForm'

import contact from '../data/contact'

function Contact() {
  const { introduction, methods, form } = contact

  return (
    <div className="contact-page">
      <section className="contact-page__section" aria-labelledby="contact-title">
        <Container>
          {/* Introduction */}
          <SectionLabel number="01" label="CONTACT" />

          <h1 id="contact-title" className="contact-page__title">
            {introduction.title}
          </h1>

          <p className="contact-page__description">{introduction.description}</p>

          {/* Contact content */}
          <div className="contact-page__content">
            {/* Contact form */}
            <div className="contact-page__form">
              <ContactForm form={form} />
            </div>

            {/* Contact methods */}
            <div className="contact-page__methods">
              <ContactMethods methods={methods} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Contact
