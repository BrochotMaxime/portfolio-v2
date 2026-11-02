import { Link } from 'react-router'

import ActionLink from './ActionLink'

function ProjectCard({ project, headingLevel = 3, layout }) {
  const { slug, title, description, technologies, image, imageAlt } = project

  const Heading = headingLevel === 2 ? 'h2' : 'h3'

  const resolvedLayout = layout ?? project.layout ?? 'standard'

  const classes = ['project-card', `project-card--${resolvedLayout}`].join(' ')

  return (
    <article className={classes}>
      {/* Project preview */}
      {image && (
        <Link
          to={`/projects/${slug}`}
          className="project-card__image-link"
          aria-label={`View ${title} project`}
        >
          <div className="project-card__image-wrapper">
            <img src={image} alt={imageAlt} className="project-card__image" loading="lazy" />
          </div>
        </Link>
      )}

      {/* Project information */}
      <div className="project-card__content">
        <Heading className="project-card__title">{title}</Heading>

        <p className="project-card__description">{description}</p>

        <ul className="project-card__technologies" aria-label={`${title} technologies`}>
          {technologies.map((technology) => (
            <li key={technology} className="project-card__technology">
              {technology}
            </li>
          ))}
        </ul>

        <ActionLink to={`/projects/${slug}`} variant="text">
          View project
        </ActionLink>
      </div>
    </article>
  )
}

export default ProjectCard
