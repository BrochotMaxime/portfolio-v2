import Container from '../layout/Container'

import ActionLink from '../ui/ActionLink'
import ProjectCard from '../ui/ProjectCard'
import SectionLabel from '../ui/SectionLabel'

import projects from '../../data/projects'

function SelectedProjectsSection() {
  // Select projects featured on the Home Page
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section
      id="selected-projects"
      className="selected-projects"
      aria-labelledby="selected-projects-title"
    >
      <Container>
        {/* Section introduction */}
        <SectionLabel number="02" label="SELECTED WORK" />

        <div className="selected-projects__intro">
          <h2 id="selected-projects-title" className="selected-projects__title">
            Selected projects
          </h2>

          <p className="selected-projects__description">
            A selection of my projects that reflect my approach to web development.
          </p>
        </div>

        {/* Featured projects */}
        <div className="selected-projects__list">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Link to the complete project collection */}
        <div className="selected-projects__footer">
          <ActionLink to="/projects" variant="text">
            View all projects
          </ActionLink>
        </div>
      </Container>
    </section>
  )
}

export default SelectedProjectsSection
