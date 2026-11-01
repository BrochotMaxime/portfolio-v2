import Container from '../layout/Container'
import SectionLabel from '../ui/SectionLabel'

// Technologies grouped by expertise category
const expertiseCategories = [
  {
    title: 'Front-end',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS / SCSS'],
  },
  {
    title: 'Back-end & Data',
    technologies: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'Sequelize'],
  },
  {
    title: 'Tools & Workflow',
    technologies: ['Git', 'GitHub', 'Vite', 'Figma'],
  },
]

function ExpertiseSection() {
  return (
    <section className="expertise" aria-labelledby="expertise-title">
      <Container>
        <SectionLabel number="04" label="EXPERTISE" />

        <h2 id="expertise-title" className="expertise__title">
          What I work with
        </h2>

        {/* Expertise categories */}
        <dl className="expertise__list">
          {expertiseCategories.map(({ title, technologies }) => (
            <div className="expertise__item" key={title}>
              <dt className="expertise__category">{title}</dt>

              <dd className="expertise__technologies">{technologies.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export default ExpertiseSection
