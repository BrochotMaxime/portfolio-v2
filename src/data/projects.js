const projects = [
  {
    id: 'guild-wars-armory',
    slug: 'guild-wars-armory',
    title: 'Guild Wars Armory',
    description:
      'A material planning application helping Guild Wars players track armor requirements and the resources they still need.',
    technologies: ['React', 'Vite', 'JavaScript'],
    image: '/images/projects/guild-wars-armory.webp',
    imageAlt: 'Guild Wars Armory application showing the profession selection interface',
    featured: true,
    layout: 'featured',

    details: {
      summary: 'A material planning application for Guild Wars players.',

      links: {
        website: 'https://guildwarsarmory.com/',
        github: 'https://github.com/BrochotMaxime/guild-wars-armor-planner',
      },

      heroImage: {
        src: '/images/projects/guild-wars-armory.webp',
        alt: 'Guild Wars Armory homepage showing the profession selection interface.',
      },

      context: {
        title: 'The challenge',
        description:
          'Guild Wars armor crafting requires many different materials, making it difficult for players to track what they need and what they already own.',
      },

      solution: {
        title: 'The approach',
        description:
          "A step-by-step planner that calculates armor requirements, accounts for the player's inventory and identifies missing materials.",
      },

      features: [
        {
          id: 'armor-selection',
          title: 'Armor selection',
          description:
            'Browse armor sets by profession and campaign to find the one you want to craft.',
          image: {
            src: '/images/projects/guild-wars-armory/armor-selection.webp',
            alt: 'Guild Wars Armory interface displaying available armor sets.',
          },
        },
        {
          id: 'requirements',
          title: 'Requirements',
          description: 'Explore the materials and gold required to craft your selected armor set.',
          image: {
            src: '/images/projects/guild-wars-armory/requirements.webp',
            alt: 'Guild Wars Armory interface displaying armor crafting requirements.',
          },
        },
        {
          id: 'inventory',
          title: 'Inventory & missing materials',
          description:
            'Enter the materials you already own to calculate what is still missing, including crafting requirements for rare materials.',
          image: {
            src: '/images/projects/guild-wars-armory/inventory.webp',
            alt: 'Guild Wars Armory inventory interface showing owned and missing materials.',
          },
        },
      ],

      technicalApproach: {
        title: 'Behind the project',
        description: 'A closer look at the technical decisions behind Guild Wars Armory.',
        items: [
          {
            title: 'Local data architecture',
            description:
              'Structured local data for armor sets, materials, professions and crafting recipes.',
          },
          {
            title: 'Material calculation logic',
            description:
              'Calculating remaining requirements from armor costs, crafting recipes and player inventory.',
          },
          {
            title: 'Component-based UI',
            description:
              'Organizing the multi-step workflow through reusable React components and state management.',
          },
        ],
      },

      outcome: {
        title: 'Results & learnings',
        description: 'Results, lessons learned and opportunities for improvement.',
        items: [
          {
            title: 'Outcome',
            description:
              'Built a functional armor-planning application that helps Guild Wars players identify the materials they need and track what they are still missing.',
          },
          {
            title: 'Key learnings',
            description:
              'Improved my ability to structure interconnected data, implement calculation logic and manage a multi-step workflow in React.',
          },
          {
            title: 'Next steps',
            description:
              'Refine the user experience, expand the available data and improve the application based on player feedback.',
          },
        ],
      },
    },
  },
  {
    id: 'trouve-ton-artisan',
    slug: 'trouve-ton-artisan',
    title: 'Trouve ton artisan',
    description:
      'A full-stack web application helping users find artisans by category or name in the Auvergne-Rhône-Alpes region.',
    technologies: ['React', 'Express', 'MySQL'],
    image: '/images/projects/trouve-ton-artisan.webp',
    imageAlt: 'Trouve ton artisan website showing its homepage and artisan search interface',
    featured: true,
    layout: 'standard',

    details: {
      summary:
        'A full-stack web application helping users find and contact local artisans in the Auvergne-Rhône-Alpes region.',

      links: {
        github: 'https://github.com/BrochotMaxime/brochot-maxime-devoir-site-trouve-ton-artisan',
      },

      heroImage: {
        src: '/images/projects/trouve-ton-artisan.webp',
        alt: 'Trouve ton artisan application displaying a list of local artisans.',
      },

      context: {
        title: 'The challenge',
        description:
          'Finding a suitable local artisan requires access to clear information about available professionals, their specialties and how to contact them.',
      },

      solution: {
        title: 'The approach',
        description:
          'A full-stack application that organizes artisans by category, provides name-based search, and allows users to view detailed profiles and contact artisans.',
      },

      features: [
        {
          id: 'categories',
          title: 'Artisan categories',
          description: 'Browse artisans by category to discover professionals in different trades.',
          image: {
            src: '/images/projects/trouve-ton-artisan/categories.webp',
            alt: 'Trouve ton artisan interface displaying artisan categories.',
          },
        },
        {
          id: 'search',
          title: 'Artisan search',
          description: 'Search for an artisan by name to quickly find a specific professional.',
          image: {
            src: '/images/projects/trouve-ton-artisan/search.webp',
            alt: 'Trouve ton artisan interface displaying artisan search results.',
          },
        },
        {
          id: 'artisan-detail',
          title: 'Artisan profiles',
          description: 'View detailed information about an artisan and access a contact form.',
          image: {
            src: '/images/projects/trouve-ton-artisan/artisan-detail.webp',
            alt: 'Trouve ton artisan interface displaying an artisan profile and contact form.',
          },
        },
      ],

      technicalApproach: {
        title: 'Behind the project',
        description: 'A closer look at the full-stack architecture and technical decisions.',
        items: [
          {
            title: 'React front-end',
            description:
              'Building the user interface with React, React Router and Sass, using Vite for development and React Helmet Async for page metadata.',
          },
          {
            title: 'Express API',
            description: 'Using Node.js and Express as the back-end application layer.',
          },
          {
            title: 'Relational data architecture',
            description:
              'Using MySQL and Sequelize to manage relational data for artisans, categories and specialties.',
          },
        ],
      },

      outcome: {
        title: 'Results & learnings',
        description: 'Results and technical experience gained from this training project.',
        items: [
          {
            title: 'Outcome',
            description:
              'Developed a full-stack application allowing users to browse artisan categories, search by name, view profiles and contact artisans.',
          },
          {
            title: 'Key learnings',
            description:
              'Practiced building a React application with a separate Express back-end and a MySQL database managed through Sequelize.',
          },
          {
            title: 'Next steps',
            description:
              'Potential improvements include further usability testing, accessibility refinements and deployment of the complete application.',
          },
        ],
      },
    },
  },
  {
    id: 'touche-pas-au-klaxon',
    slug: 'touche-pas-au-klaxon',
    title: 'Touche pas au klaxon',
    description: 'A web application designed to manage and explore driving school training data.',
    technologies: ['React', 'Vite', 'JavaScript'],
    image: '/images/projects/touche-pas-au-klaxon.webp',
    imageAlt: 'Touche pas au klaxon application showing a table of available training journeys',
    featured: true,
    layout: 'reversed',
  },
  {
    id: 'port-de-plaisance-russel',
    slug: 'port-de-plaisance-russel',
    title: 'Port de Plaisance Russel',
    description: 'RESTful API developed during my web developer training to manage a marina.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    image: '/images/projects/port-de-plaisance-russel.webp',
    imageAlt: 'Port de Plaisance Russel application showing its login interface',
    featured: false,
  },
  {
    id: 'tifosi',
    slug: 'tifosi',
    title: 'Tifosi',
    description:
      'Relational database project developed during my web developer training, focused on data modelling, SQL scripting, integrity constraints and advanced queries using MySQL.',
    technologies: ['MySQL', 'SQL', 'Database Design'],
    featured: false,
  },
  {
    id: 'portfolio',
    slug: 'portfolio',
    title: 'Portfolio',
    description:
      'Personal developer portfolio built with React and SCSS, focused on maintainable architecture, accessibility and professional development practices.',
    technologies: ['React', 'Vite', 'SCSS'],
    featured: false,
  },
]

export default projects
