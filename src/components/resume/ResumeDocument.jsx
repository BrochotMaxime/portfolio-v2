import resume from '../../data/resume'

function ResumeDocument({ language = 'en' }) {
  const { contact, projects, languages } = resume
  const content = languages[language]

  return (
    <article className="resume-document" lang={language}>
      {/* Header */}
      <header className="resume-document__header">
        <div className="resume-document__photo">
          {contact.photo ? (
            <img src={contact.photo} alt="" />
          ) : (
            <span aria-hidden="true">Photo</span>
          )}
        </div>

        <div className="resume-document__identity">
          <h1>{contact.name}</h1>
          <p>{content.title}</p>
        </div>
      </header>

      <div className="resume-document__layout">
        {/* Sidebar */}
        <aside className="resume-document__sidebar">
          <section className="resume-document__section">
            <h2>{content.sections.contact}</h2>

            <address className="resume-document__contact">
              <p>{contact.location}</p>

              <a href={`mailto:${contact.email}`}>{contact.email}</a>

              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                {contact.github.replace(/^https?:\/\//, '')}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>

              <a href={contact.portfolio} target="_blank" rel="noopener noreferrer">
                {contact.portfolio.replace(/^https?:\/\//, '')}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </address>
          </section>

          <section className="resume-document__section">
            <h2>{content.sections.skills}</h2>

            <div className="resume-document__skills">
              {content.skills.map((category) => (
                <div key={category.id} className="resume-document__skill-category">
                  <h3>{category.label}</h3>

                  <ul>
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-document__section">
            <h2>{content.sections.languages}</h2>

            <ul className="resume-document__simple-list">
              {content.spokenLanguages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="resume-document__section">
            <h2>{content.sections.interests}</h2>

            <ul className="resume-document__simple-list">
              {content.interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </aside>

        {/* Main content */}
        <div className="resume-document__main">
          {/* Profile */}
          <section className="resume-document__section">
            <h2>{content.sections.profile}</h2>
            <p className="resume-document__profile">{content.profile}</p>
          </section>

          {/* Projects */}
          <section className="resume-document__section">
            <h2>{content.sections.projects}</h2>

            <div className="resume-document__entries">
              {projects.map((project) => (
                <section key={project.id} className="resume-document__entry">
                  <h3>{project.url ? <a href={project.url}>{project.name}</a> : project.name}</h3>

                  <p className="resume-document__technologies">
                    {project.technologies.join(' · ')}
                  </p>

                  <p>{content.projects[project.id]}</p>
                </section>
              ))}
            </div>
          </section>

          {/* Professional experience */}
          <section className="resume-document__section">
            <h2>{content.sections.experience}</h2>

            <div className="resume-document__entries">
              {content.experience.map((item) => (
                <section key={item.id} className="resume-document__entry">
                  <div className="resume-document__entry-heading">
                    <h3>{item.role}</h3>
                    <span>{item.period}</span>
                  </div>

                  <p className="resume-document__meta">
                    {item.company}
                    {item.location && ` - ${item.location}`}
                  </p>

                  <p>{item.description}</p>
                </section>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="resume-document__section">
            <h2>{content.sections.education}</h2>

            <div className="resume-document__entries">
              {content.education.map((item) => (
                <section key={item.id} className="resume-document__entry">
                  <div className="resume-document__entry-heading">
                    <h3>{item.qualification}</h3>
                    <span>{item.period}</span>
                  </div>

                  <p className="resume-document__meta">{item.institution}</p>
                </section>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}

export default ResumeDocument
