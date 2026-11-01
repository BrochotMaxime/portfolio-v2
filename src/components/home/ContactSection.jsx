import Container from '../layout/Container'
import SectionLabel from '../ui/SectionLabel'
import ActionLink from '../ui/ActionLink'

function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <Container>
        <SectionLabel number="05" label="CONTACT" />

        <div className="contact-section__content">
          <h2 id="contact-heading" className="contact-section__title">
            Have a project, an opportunity, or just want to talk?
          </h2>

          <div className="contact-section__action">
            <ActionLink to="/contact">Let's talk</ActionLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
