import { Fragment } from 'react'

import Divider from '../components/ui/Divider'
import ProjectCard from '../components/ui/ProjectCard'
import SectionLabel from '../components/ui/SectionLabel'
import Container from '../components/layout/Container'

import projects from '../data/projects'

const projectOrder = [
  'trouve-ton-artisan',
  'guild-wars-armory',
  'touche-pas-au-klaxon',
  'port-de-plaisance-russel',
  'tifosi',
  'portfolio',
]

const projectLayouts = {
  'trouve-ton-artisan': 'standard',
  'guild-wars-armory': 'reversed',
  'touche-pas-au-klaxon': 'standard',
  'port-de-plaisance-russel': 'reversed',
  tifosi: 'compact',
  portfolio: 'compact',
}

function Projects() {
  const orderedProjects = projectOrder
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean)

  return (
    <div className="projects-page">
      <Container>
        {/* Page introduction */}
        <header className="projects-page__intro">
          <SectionLabel number="01" label="PROJECTS" />

          <h1 className="projects-page__title" tabIndex={-1}>
            Selected &amp; other work
          </h1>

          <p className="projects-page__description">
            A collection of web applications and projects I've built.
          </p>
        </header>

        {/* Projects listing */}
        <section className="projects-page__list" aria-label="Projects">
          {orderedProjects.map((project, index) => (
            <Fragment key={project.id}>
              <ProjectCard project={project} headingLevel={2} layout={projectLayouts[project.id]} />

              {index < orderedProjects.length - 1 && <Divider />}
            </Fragment>
          ))}
        </section>
      </Container>
    </div>
  )
}

export default Projects
