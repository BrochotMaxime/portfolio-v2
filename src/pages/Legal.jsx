import Container from '../components/layout/Container'
import Divider from '../components/ui/Divider'
import SectionLabel from '../components/ui/SectionLabel'

import legal from '../data/legal'

function Legal() {
  const { introduction, lastUpdated, publisher, hosting, sections } = legal

  return (
    <div className="legal-page">
      {/* Introduction */}
      <section className="legal-page__section" aria-labelledby="legal-title">
        <Container>
          <SectionLabel number="01" label="LEGAL" />

          <h1 id="legal-title" className="legal-page__title">
            {introduction.title}
          </h1>

          <p className="legal-page__description">{introduction.description}</p>

          <p className="legal-page__updated">
            Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
          </p>
        </Container>
      </section>

      <Divider />

      {/* Legal sections */}
      {sections.map((section, index) => (
        <div key={section.id}>
          <section className="legal-page__section" aria-labelledby={`${section.id}-title`}>
            <Container>
              <SectionLabel number={String(index + 2).padStart(2, '0')} label={section.label} />

              <h2 id={`${section.id}-title`} className="legal-page__section-title">
                {section.title}
              </h2>

              <div className="legal-page__content">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.links?.map((link) => (
                  <p key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </p>
                ))}

                {section.id === 'publisher' && (
                  <dl className="legal-page__details">
                    <div className="legal-page__detail">
                      <dt>Publisher</dt>
                      <dd>{publisher.name}</dd>
                    </div>

                    <div className="legal-page__detail">
                      <dt>Email</dt>
                      <dd>
                        <a href={`mailto:${publisher.email}`}>{publisher.email}</a>
                      </dd>
                    </div>
                  </dl>
                )}

                {section.id === 'hosting' && (
                  <dl className="legal-page__details">
                    <div className="legal-page__detail">
                      <dt>Hosting provider</dt>
                      <dd>{hosting.name}</dd>
                    </div>

                    <div className="legal-page__detail">
                      <dt>Address</dt>
                      <dd>{hosting.address}</dd>
                    </div>

                    <div className="legal-page__detail">
                      <dt>Email</dt>
                      <dd>
                        <a href={`mailto:${hosting.email}`}>{hosting.email}</a>
                      </dd>
                    </div>

                    <div className="legal-page__detail">
                      <dt>Website</dt>
                      <dd>
                        <a href={hosting.website} target="_blank" rel="noopener noreferrer">
                          {hosting.website}
                        </a>
                      </dd>
                    </div>
                  </dl>
                )}
              </div>
            </Container>
          </section>

          {index < sections.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  )
}

export default Legal
