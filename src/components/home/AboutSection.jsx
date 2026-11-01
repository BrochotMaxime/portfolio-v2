import Container from '../layout/Container'
import SectionLabel from '../ui/SectionLabel'
import ActionLink from '../ui/ActionLink'

function AboutSection() {
  return (
    <section className="home-about" aria-labelledby="home-about-title">
      <Container>
        <SectionLabel number="03" label="ABOUT" />

        <div className="home-about__layout">
          {/* Section heading */}
          <h2 id="home-about-title" className="home-about__title">
            A developer focused on building things properly
          </h2>

          {/* Introduction and navigation */}
          <div className="home-about__content">
            <p>
              I build web applications with a focus on clarity, maintainability and thoughtful user
              experiences.
            </p>

            <p>
              Beyond the final interface, I care about how a project is structured, documented and
              built to evolve over time.
            </p>

            <ActionLink to="/about">More about me</ActionLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
