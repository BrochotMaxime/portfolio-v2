import { useParams } from 'react-router'

import NotFound from './NotFound'

import Container from '../components/layout/Container'
import ActionLink from '../components/ui/ActionLink'
import Divider from '../components/ui/Divider'
import SectionLabel from '../components/ui/SectionLabel'

import projects from '../data/projects'

function ProjectDetail() {
  const { slug } = useParams()

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return <NotFound />
  }

  const { title, technologies, details } = project
  const { summary, links, heroImage } = details

  return (
    <div className="project-detail">
      <Container>
        <section className="project-detail__overview">
          <SectionLabel number="01" label="PROJECT OVERVIEW" />

          <div className="project-detail__intro">
            <h1 className="project-detail__title" tabIndex={-1}>
              {title}
            </h1>

            <p className="project-detail__summary">{summary}</p>

            <ul className="project-detail__technologies" aria-label="Technologies used">
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            {(links?.website || links?.github) && (
              <div className="project-detail__links">
                {links?.website && (
                  <ActionLink href={links.website} external>
                    View live website
                  </ActionLink>
                )}

                {links?.github && (
                  <ActionLink href={links.github} external>
                    View GitHub repository
                  </ActionLink>
                )}
              </div>
            )}
          </div>

          {heroImage && (
            <div className="project-detail__hero">
              <img src={heroImage.src} alt={heroImage.alt} />
            </div>
          )}
        </section>

        <Divider className="project-detail__section-divider" />

        <div className="project-detail__story">
          <section className="project-detail__context">
            <SectionLabel number="02" label="CONTEXT" />

            <h2>{details.context.title}</h2>
            <p>{details.context.description}</p>
          </section>

          <Divider className="project-detail__story-divider" />

          <section className="project-detail__solution">
            <SectionLabel number="03" label="SOLUTION" />

            <h2>{details.solution.title}</h2>
            <p>{details.solution.description}</p>
          </section>
        </div>

        <Divider className="project-detail__section-divider" />

        <section className="project-detail__features">
          <SectionLabel number="04" label="FEATURES" />

          <h2 className="project-detail__section-title">Key features</h2>

          <div className="project-detail__feature-list">
            {details.features.map((feature) => (
              <article
                key={feature.id}
                className={`project-detail__feature ${
                  feature.image
                    ? 'project-detail__feature--with-image'
                    : 'project-detail__feature--text-only'
                }`}
              >
                {feature.image && (
                  <div className="project-detail__feature-image">
                    <img src={feature.image.src} alt={feature.image.alt} loading="lazy" />
                  </div>
                )}

                <div className="project-detail__feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Divider className="project-detail__section-divider" />

        <section className="project-detail__technical">
          <SectionLabel number="05" label="TECHNICAL APPROACH" />

          <h2 className="project-detail__section-title">{details.technicalApproach.title}</h2>

          <p className="project-detail__section-description">
            {details.technicalApproach.description}
          </p>

          <ul className="project-detail__technical-list">
            {details.technicalApproach.items.map((item) => (
              <li key={item.title} className="project-detail__technical-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <Divider className="project-detail__section-divider" />

        <section className="project-detail__outcome">
          <SectionLabel number="06" label="OUTCOME" />

          <h2 className="project-detail__section-title">{details.outcome.title}</h2>

          <p className="project-detail__section-description">{details.outcome.description}</p>

          <div className="project-detail__outcome-list">
            {details.outcome.items.map((item) => (
              <div key={item.title} className="project-detail__outcome-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider className="project-detail__section-divider" />

        <div className="project-detail__footer">
          <ActionLink to="/projects" variant="text">
            Explore another project
          </ActionLink>
        </div>
      </Container>
    </div>
  )
}

export default ProjectDetail
