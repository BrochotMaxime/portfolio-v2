const profile = {
  about: {
    introduction: {
      title: 'A little more about me',
      subtitle:
        'From industrial engineering to web development, driven by curiosity and a passion for building things.',
      image: null,
    },

    background: {
      title: 'My background',
      paragraphs: [
        'Originally trained as a materials engineer, I worked in industrial production from 2020 to 2024, gaining experience in engineering and production management.',
        "I've had a long-standing interest in programming and software development, which I explored independently alongside my career.",
        'In 2025, I decided to pursue that interest professionally and began training as a web developer. Today, I combine my engineering background with a growing expertise in web technologies, developing practical applications and continuously improving my skills.',
      ],
    },

    approach: {
      title: 'How I approach development',
      items: [
        {
          id: 'clarity',
          title: 'Clarity',
          description: 'Clear interfaces and understandable code.',
        },
        {
          id: 'maintainability',
          title: 'Maintainability',
          description: 'Structured and reusable solutions.',
        },
        {
          id: 'user-experience',
          title: 'User experience',
          description: 'Thoughtful, accessible interactions.',
        },
      ],
    },

    qualities: {
      title: 'Beyond the code',
      items: [
        {
          id: 'curiosity',
          title: 'Curiosity',
          description:
            'Always looking to understand how things work and explore better ways to build them.',
        },
        {
          id: 'organization',
          title: 'Organization',
          description: 'Planning and organizing projects into clear, manageable steps.',
        },
        {
          id: 'problem-solving',
          title: 'Problem-solving',
          description:
            'Approaching challenges methodically, from understanding the problem to finding a practical solution.',
        },
        {
          id: 'continuous-learning',
          title: 'Continuous learning',
          description:
            'Improving my skills through hands-on projects, experimentation and feedback.',
        },
      ],
    },

    contact: {
      title: "Let's build something together",
      description: "Have a project in mind or want to connect? I'd love to hear from you.",
      link: {
        label: 'Get in touch',
        to: '/contact',
      },
    },
  },

  resume: {
    introduction: {
      title: 'Experience & education',
      description: 'An overview of my professional background, education and technical skills.',
      download: {
        label: 'Download resume (PDF)',
        href: '/documents/maxime-brochot-resume-en.pdf',
      },
    },

    experience: {
      title: 'Professional experience',
      items: [
        {
          id: 'castel-engineering',
          period: '2023 - 2024',
          role: 'Production Manager',
          company: 'Castel Engineering',
          location: 'Mouscron, Belgium',
          description: 'Production planning, operational coordination, and team management.',
        },
        {
          id: 'tami-industries',
          period: '2020 - 2022',
          role: 'Production Engineer',
          company: 'TAMI Industries',
          location: 'Nyons, France',
          description: 'Process improvement, production coordination, and ERP implementation.',
        },
        {
          id: 'air-france-industries',
          period: '2018 - 2019',
          role: 'Engineering Intern',
          company: 'Air France Industries',
          location: '',
          description:
            'Continuous improvement and production flow analysis in aircraft maintenance.',
        },
      ],
    },

    education: {
      title: 'Education & training',
      items: [
        {
          id: 'cef',
          period: '2025 - Present',
          qualification: 'Web & Mobile Web Development Training',
          institution: 'Centre Européen de Formation',
          location: '',
          description:
            'Theoretical coursework and assignments completed. Professional internship and final examination pending.',
        },
        {
          id: 'sigma-clermont',
          period: '2014 - 2018',
          qualification: 'Engineering Degree - High-Performance Materials',
          institution: 'SIGMA Clermont',
          location: 'Clermont-Ferrand, France',
          description: '',
        },
        {
          id: 'preparatory-classes',
          period: '2011 - 2014',
          qualification: 'Preparatory Classes - Physics & Chemistry',
          institution: 'Lycée Aristide Briand',
          location: 'Saint-Nazaire, France',
          description: '',
        },
      ],
    },

    skills: {
      title: 'Technical skills',
      categories: [
        {
          id: 'frontend',
          name: 'Frontend',
          technologies: [
            'React',
            'React Router',
            'JavaScript',
            'HTML',
            'CSS',
            'SCSS',
            'Accessibility',
          ],
        },
        {
          id: 'backend',
          name: 'Backend',
          technologies: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
        },
        {
          id: 'databases',
          name: 'Databases',
          technologies: ['MySQL', 'MongoDB', 'Sequelize', 'Mongoose'],
        },
        {
          id: 'tools',
          name: 'Tools & Quality',
          technologies: ['Git', 'GitHub', 'Vite', 'Swagger', 'ESLint', 'Prettier'],
        },
      ],
    },
  },
}

export default profile
