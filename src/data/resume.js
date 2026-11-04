import ProfilePicture from '/images/profile-picture.webp?url'

const resume = {
  contact: {
    name: 'Maxime Brochot',
    location: 'Lille, France',
    email: 'brochot.max@gmail.com',
    github: 'https://github.com/BrochotMaxime',
    portfolio: 'https://maxime-brochot.dev',
    photo: ProfilePicture,
  },

  projects: [
    {
      id: 'trouve-ton-artisan',
      name: 'Trouve ton artisan',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize'],
      url: null,
    },
    {
      id: 'guild-wars-armory',
      name: 'Guild Wars Armory',
      technologies: ['React', 'JavaScript', 'SCSS'],
      url: 'https://guildwarsarmory.com/',
    },
    {
      id: 'portfolio-v2',
      name: 'Portfolio V2',
      technologies: ['React', 'React Router', 'SCSS', 'Vite'],
      url: null,
    },
  ],

  languages: {
    fr: {
      title: 'Développeur Web & Web Mobile',

      sections: {
        profile: 'Profil',
        contact: 'Contact',
        skills: 'Compétences techniques',
        projects: 'Projets',
        experience: 'Expérience professionnelle',
        education: 'Formation',
        languages: 'Langues',
        interests: "Centres d'intérêt",
      },

      profile:
        "Développeur web et web mobile issu d'une formation d'ingénieur, j'associe esprit d'analyse, résolution structurée des problèmes et volonté de concevoir des applications claires, maintenables et centrées sur l'utilisateur.",

      skills: [
        {
          id: 'frontend',
          label: 'Frontend',
          items: ['React', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Accessibilité'],
        },
        {
          id: 'backend',
          label: 'Backend',
          items: ['Node.js', 'Express', 'API REST', 'Authentification'],
        },
        {
          id: 'databases',
          label: 'Bases de données',
          items: ['MySQL', 'MongoDB', 'Sequelize', 'Mongoose'],
        },
        {
          id: 'tools',
          label: 'Outils et qualité',
          items: ['Git', 'GitHub', 'Vite', 'Swagger', 'ESLint', 'Prettier'],
        },
      ],

      projects: {
        'guild-wars-armory':
          "Conception et développement d'une application React permettant aux joueurs de Guild Wars de calculer les matériaux nécessaires à la fabrication de leurs armures, en tenant compte de leur inventaire et des recettes de fabrication.",

        'trouve-ton-artisan':
          "Développement d'une application web full-stack de recherche d'artisans, associant une interface React, une API REST et une base de données MySQL.",

        'portfolio-v2':
          "Développement d'un portfolio React responsive, reposant sur une architecture modulaire, des composants réutilisables et une attention particulière à l'accessibilité et à la qualité du code.",
      },

      experience: [
        {
          id: 'castel',
          role: 'Responsable de production',
          company: 'Castel Engineering',
          period: '2023 - 2024',
          location: 'Mouscron, Belgique',
          description:
            "Coordination de la production, planification des opérations et encadrement d'équipes.",
        },
        {
          id: 'tami',
          role: 'Ingénieur de production',
          company: 'TAMI Industries',
          period: '2020 - 2022',
          location: 'Nyons, France',
          description:
            "Optimisation des processus, coordination de la production et participation à la mise en place d'un ERP.",
        },
        {
          id: 'air-france',
          role: 'Stage ingénieur',
          company: 'Air France Industries',
          period: '2018 - 2019',
          location: '',
          description:
            'Amélioration continue et analyse des flux de production en maintenance aéronautique.',
        },
      ],

      education: [
        {
          id: 'cef',
          qualification: 'Formation Développeur Web et Web Mobile',
          institution: 'Centre Européen de Formation',
          period: '2025 - Aujourd’hui',
        },
        {
          id: 'sigma',
          qualification: "Diplôme d'ingénieur - Matériaux haute performance",
          institution: 'SIGMA Clermont',
          period: '2014 - 2018',
        },
        {
          id: 'prepa',
          qualification: 'Classes préparatoires - Physique et Chimie',
          institution: 'Lycée Aristide Briand',
          period: '2011 - 2014',
        },
      ],

      spokenLanguages: ['Français - Langue maternelle', 'Anglais - Niveau professionnel'],

      interests: ['Trail', 'Peinture de figurines', 'Jeux vidéo'],
    },

    en: {
      title: 'Web & Mobile Web Developer',

      sections: {
        profile: 'Profile',
        contact: 'Contact',
        skills: 'Technical Skills',
        projects: 'Projects',
        experience: 'Professional Experience',
        education: 'Education',
        languages: 'Languages',
        interests: 'Interests',
      },

      profile:
        'Web & Mobile Web Developer with an engineering background, combining analytical thinking, structured problem-solving and a strong focus on building clear, maintainable and user-focused applications.',

      skills: [
        {
          id: 'frontend',
          label: 'Frontend',
          items: ['React', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Accessibility'],
        },
        {
          id: 'backend',
          label: 'Backend',
          items: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
        },
        {
          id: 'databases',
          label: 'Databases',
          items: ['MySQL', 'MongoDB', 'Sequelize', 'Mongoose'],
        },
        {
          id: 'tools',
          label: 'Tools & Quality',
          items: ['Git', 'GitHub', 'Vite', 'Swagger', 'ESLint', 'Prettier'],
        },
      ],

      projects: {
        'guild-wars-armory':
          'Designed and developed a React application helping Guild Wars players calculate armor crafting requirements, accounting for owned materials and crafting recipes.',

        'trouve-ton-artisan':
          'Developed a full-stack web application for finding local tradespeople, combining a React frontend, REST API and MySQL database.',

        'portfolio-v2':
          'Developed a responsive React portfolio with a modular architecture, reusable components, and a focus on accessibility and code quality.',
      },

      experience: [
        {
          id: 'castel',
          role: 'Production Manager',
          company: 'Castel Engineering',
          period: '2023 - 2024',
          location: 'Mouscron, Belgium',
          description: 'Production planning, operational coordination and team management.',
        },
        {
          id: 'tami',
          role: 'Production Engineer',
          company: 'TAMI Industries',
          period: '2020 - 2022',
          location: 'Nyons, France',
          description: 'Process improvement, production coordination and ERP implementation.',
        },
        {
          id: 'air-france',
          role: 'Engineering Intern',
          company: 'Air France Industries',
          period: '2018 - 2019',
          location: '',
          description:
            'Continuous improvement and production flow analysis in aircraft maintenance.',
        },
      ],

      education: [
        {
          id: 'cef',
          qualification: 'Web & Mobile Web Development Training',
          institution: 'Centre Européen de Formation',
          period: '2025 - Present',
        },
        {
          id: 'sigma',
          qualification: 'Engineering Degree - High-Performance Materials',
          institution: 'SIGMA Clermont',
          period: '2014 - 2018',
        },
        {
          id: 'prepa',
          qualification: 'Preparatory Classes - Physics & Chemistry',
          institution: 'Lycée Aristide Briand',
          period: '2011 - 2014',
        },
      ],

      spokenLanguages: ['French - Native', 'English - Professional working proficiency'],

      interests: ['Trail running', 'Miniature painting', 'Video games'],
    },
  },
}

export default resume
