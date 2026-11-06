import Container from '../components/layout/Container'
import ActionLink from '../components/ui/ActionLink'
import Divider from '../components/ui/Divider'
import SectionLabel from '../components/ui/SectionLabel'

import profile from '../data/profile'

function About() {
  const { introduction, background, approach, qualities, contact } = profile.about

  return (
    <div className="about-page">
      {/* Introduction and background */}
      <section className="about-page__section about-page__intro" aria-labelledby="about-title">
        <Container>
          <SectionLabel number="01" label="ABOUT" />

          <h1 id="about-title" className="about-page__title">
            {introduction.title}
          </h1>

          <p className="about-page__subtitle">{introduction.subtitle}</p>

          <div className="about-page__background-layout">
            {/* To restore when an image is available */}
            {/* 
            <div className="about-page__image-wrapper">
              {introduction.image && (
                <img src={introduction.image} alt="" className="about-page__image" />
              )}
            </div> 
            */}

            <div className="about-page__background">
              <h2>{background.title}</h2>

              {background.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      {/* Development approach */}
      <section className="about-page__section" aria-labelledby="approach-title">
        <Container>
          <SectionLabel number="02" label="APPROACH" />

          <h2 id="approach-title" className="about-page__section-title">
            {approach.title}
          </h2>

          <div className="about-page__approach-list">
            {approach.items.map((item) => (
              <article key={item.id} className="about-page__approach-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Personal qualities */}
      <section className="about-page__section" aria-labelledby="qualities-title">
        <Container>
          <SectionLabel number="03" label="QUALITIES" />

          <h2 id="qualities-title" className="about-page__section-title">
            {qualities.title}
          </h2>

          <div className="about-page__qualities-list">
            {qualities.items.map((item) => (
              <article key={item.id} className="about-page__quality">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Contact CTA */}
      <section className="about-page__section" aria-labelledby="contact-title">
        <Container>
          <SectionLabel number="04" label="NEXT STEP" />

          <h2 id="contact-title" className="about-page__section-title">
            {contact.title}
          </h2>

          <p className="about-page__contact-description">{contact.description}</p>

          <div className="about-page__contact-link">
            <ActionLink to={contact.link.to} variant="text">
              {contact.link.label}
            </ActionLink>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default About
