import Container from '../components/layout/Container'
import Divider from '../components/ui/Divider'
import SectionLabel from '../components/ui/SectionLabel'

import profile from '../data/profile'

function Resume() {
  const { introduction, experience, education, skills } = profile.resume

  return (
    <div className="resume-page">
      {/* Page introduction */}
      <section className="resume-page__section" aria-labelledby="resume-title">
        <Container>
          <SectionLabel number="01" label="RESUME" />

          <h1 id="resume-title" className="resume-page__title" tabIndex={-1}>
            {introduction.title}
          </h1>

          <p className="resume-page__description">{introduction.description}</p>

          <div className="resume-page__download">
            <a
              href="/documents/maxime-brochot-resume-en.pdf"
              download="maxime-brochot-resume-en.pdf"
              type="application/pdf"
              className="resume-page__download-link"
            >
              Download resume (PDF)
            </a>
          </div>
        </Container>
      </section>

      <Divider />

      {/* Professional experience */}
      <section className="resume-page__section" aria-labelledby="experience-title">
        <Container>
          <SectionLabel number="02" label="EXPERIENCE" />

          <h2 id="experience-title" className="resume-page__section-title">
            {experience.title}
          </h2>

          <div className="resume-page__entries">
            {experience.items.map((item) => (
              <article key={item.id} className="resume-page__entry">
                <p className="resume-page__period">{item.period}</p>

                <div className="resume-page__entry-content">
                  <h3>{item.role}</h3>

                  <p className="resume-page__organization">
                    {item.company}
                    {item.location && ` - ${item.location}`}
                  </p>

                  {item.description && (
                    <p className="resume-page__entry-description">{item.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Education and training */}
      <section className="resume-page__section" aria-labelledby="education-title">
        <Container>
          <SectionLabel number="03" label="EDUCATION" />

          <h2 id="education-title" className="resume-page__section-title">
            {education.title}
          </h2>

          <div className="resume-page__entries">
            {education.items.map((item) => (
              <article key={item.id} className="resume-page__entry">
                <p className="resume-page__period">{item.period}</p>

                <div className="resume-page__entry-content">
                  <h3>{item.qualification}</h3>

                  <p className="resume-page__organization">
                    {item.institution}
                    {item.location && ` - ${item.location}`}
                  </p>

                  {item.description && (
                    <p className="resume-page__entry-description">{item.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Technical skills */}
      <section className="resume-page__section" aria-labelledby="skills-title">
        <Container>
          <SectionLabel number="04" label="TECHNICAL SKILLS" />

          <h2 id="skills-title" className="resume-page__section-title">
            {skills.title}
          </h2>

          <div className="resume-page__skills-list">
            {skills.categories.map((category) => (
              <div key={category.id} className="resume-page__skill-category">
                <h3>{category.name}</h3>

                <ul className="resume-page__technologies">
                  {category.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Resume
