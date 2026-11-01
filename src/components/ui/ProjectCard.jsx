import { Link } from 'react-router'

import ActionLink from './ActionLink'

function ProjectCard({ project }) {
  const { slug, title, description, technologies, image, imageAlt, layout = 'standard' } = project

  const classes = ['project-card', `project-card--${layout}`].join(' ')

  return (
    <article className={classes}>
      {/* Project preview */}
      <Link
        to={`/projects/${slug}`}
        className="project-card__image-link"
        aria-label={`View ${title} project`}
      >
        <div className="project-card__image-wrapper">
          <img src={image} alt={imageAlt} className="project-card__image" loading="lazy" />
        </div>
      </Link>

      {/* Project information */}
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

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
