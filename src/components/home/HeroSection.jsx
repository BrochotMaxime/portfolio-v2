import Container from '../layout/Container'
import ActionLink from '../ui/ActionLink'
import SectionLabel from '../ui/SectionLabel'

function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container>
        <SectionLabel number="01" label="INTRO" />

        <div className="hero__content">
          <p className="hero__name">MAXIME BROCHOT</p>

          <h1 id="hero-title" className="hero__title">
            <span>WEB</span> <span>DEVELOPER</span>
          </h1>

          <p className="hero__description">
            I build clear, maintainable and user-focused web applications.
          </p>

          <ActionLink href="#selected-projects" variant="primary">
            View selected work
          </ActionLink>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
