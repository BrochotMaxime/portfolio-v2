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
    description:
      'A PHP-based carpooling application helping employees organize trips between company agencies.',
    technologies: ['PHP', 'MariaDB', 'Sass'],
    image: '/images/projects/touche-pas-au-klaxon.webp',
    imageAlt: 'Touche pas au klaxon application showing a table of available training journeys',
    featured: true,
    layout: 'reversed',

    details: {
      summary:
        'An internal company carpooling application built with PHP and a lightweight MVC architecture.',

      links: {
        github: 'https://github.com/BrochotMaxime/brochot-maxime-devoir-touche-pas-au-klaxon',
      },

      heroImage: {
        src: '/images/projects/touche-pas-au-klaxon.webp',
        alt: 'Touche pas au klaxon application displaying available carpooling trips.',
      },

      context: {
        title: 'The challenge',
        description:
          'Employees working across different company agencies need a way to organize shared trips, while administrators require tools to manage users, agencies and journeys.',
      },

      solution: {
        title: 'The approach',
        description:
          'A role-based carpooling application where employees can create and manage trips, and administrators can oversee the platform through dedicated management tools.',
      },

      features: [
        {
          id: 'trip-management',
          title: 'Trip management',
          description:
            'Browse available carpooling trips and create, edit or delete your own journeys.',
          image: {
            src: '/images/projects/touche-pas-au-klaxon/trip-management.webp',
            alt: 'Touche pas au klaxon interface displaying available carpooling trips.',
          },
        },
        {
          id: 'administration',
          title: 'Administration dashboard',
          description:
            'Manage users, agencies and trips through an administration interface with role-based access control.',
          image: {
            src: '/images/projects/touche-pas-au-klaxon/administration.webp',
            alt: 'Touche pas au klaxon administration dashboard.',
          },
        },
        {
          id: 'trip-creation',
          title: 'Trip creation',
          description:
            'Create a carpooling trip by entering contact information, selecting departure and arrival agencies, scheduling the journey and specifying available seats.',
          image: {
            src: '/images/projects/touche-pas-au-klaxon/trip-creation.webp',
            alt: 'Touche pas au klaxon trip creation form with contact details, agency selection and journey scheduling fields.',
          },
        },
      ],

      technicalApproach: {
        title: 'Behind the project',
        description:
          'A closer look at the architecture, security and development practices behind the application.',
        items: [
          {
            title: 'Lightweight MVC architecture',
            description:
              'Organizing the PHP application into controllers, services, repositories, models and Twig templates to separate responsibilities and improve maintainability.',
          },
          {
            title: 'Application security',
            description:
              'Implementing authentication, role-based authorization, CSRF protection, server-side validation and prepared SQL statements to protect application data.',
          },
          {
            title: 'Testing & code quality',
            description:
              'Using PHPUnit for automated testing and PHPStan for static analysis, alongside Composer for dependency management.',
          },
        ],
      },

      outcome: {
        title: 'Results & learnings',
        description:
          'Results and technical experience gained from developing a maintainable PHP application.',
        items: [
          {
            title: 'Outcome',
            description:
              'Developed a role-based carpooling application with trip and agency management, an administration dashboard and a protected public demonstration mode.',
          },
          {
            title: 'Key learnings',
            description:
              'Strengthened my understanding of MVC architecture, separation of concerns, application security, automated testing and relational database access with PDO.',
          },
          {
            title: 'Next steps',
            description:
              'Continue refining the user experience, expanding automated test coverage and improving the demonstration environment.',
          },
        ],
      },
    },
  },
  {
    id: 'port-de-plaisance-russel',
    slug: 'port-de-plaisance-russel',
    title: 'Port de Plaisance Russel',
    description:
      'A Node.js application and REST API for managing marina users, catways and reservations.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    image: '/images/projects/port-de-plaisance-russel.webp',
    imageAlt: 'Port de Plaisance Russel application showing its login interface',
    featured: false,

    details: {
      summary: 'A marina management application built with Node.js, Express and MongoDB.',

      links: {
        github: 'https://github.com/BrochotMaxime/brochot-maxime-devoir-api-port-russel',
      },

      heroImage: {
        src: '/images/projects/port-de-plaisance-russel.webp',
        alt: 'Port de Plaisance Russel application displaying its login interface.',
      },

      context: {
        title: 'The challenge',
        description:
          'Managing a marina involves maintaining information about docking facilities, users and reservations, while providing controlled access to administrative operations.',
      },

      solution: {
        title: 'The approach',
        description:
          'A Node.js and Express application providing CRUD operations for users, catways and reservations, with MongoDB for data storage and an EJS-based administration interface.',
      },

      features: [
        {
          id: 'authentication',
          title: 'Authentication & access',
          description:
            'Access the marina management application through a login interface with session-based authentication.',
          image: {
            src: '/images/projects/port-de-plaisance-russel/home.webp',
            alt: 'Port de Plaisance Russel homepage displaying the application overview, login form and API documentation link.',
          },
        },
        {
          id: 'reservation-management',
          title: 'Reservation management',
          description:
            'View and manage marina reservations, including assigned catways, boats, customers and reservation dates.',
          image: {
            src: '/images/projects/port-de-plaisance-russel/reservations.webp',
            alt: 'Port de Plaisance Russel reservations table displaying catways, customers, boats and booking dates.',
          },
        },
        {
          id: 'api-documentation',
          title: 'API documentation',
          description:
            'Explore the available API endpoints through interactive Swagger documentation.',
          image: {
            src: '/images/projects/port-de-plaisance-russel/swagger.webp',
            alt: 'Swagger UI displaying documented API endpoints for marina management.',
          },
        },
      ],

      technicalApproach: {
        title: 'Behind the project',
        description:
          'A closer look at the API architecture, data management and authentication mechanisms.',
        items: [
          {
            title: 'REST API with Express',
            description:
              'Building an API with Node.js and Express to manage users, catways and reservations through CRUD operations.',
          },
          {
            title: 'MongoDB data management',
            description: 'Using MongoDB and Mongoose to store and manage application data.',
          },
          {
            title: 'Authentication & sessions',
            description:
              'Implementing user authentication with bcrypt for password hashing, express-session for session management and connect-mongo for session storage.',
          },
        ],
      },

      outcome: {
        title: 'Results & learnings',
        description:
          'Results and technical experience gained from developing a back-end application.',
        items: [
          {
            title: 'Outcome',
            description:
              'Developed a marina management application with user authentication, CRUD operations for users, catways and reservations, an administration interface and Swagger API documentation.',
          },
          {
            title: 'Key learnings',
            description:
              'Strengthened my understanding of REST API development, MongoDB data modelling, authentication, session management and API documentation.',
          },
          {
            title: 'Next steps',
            description:
              'Potential improvements include expanding automated test coverage, refining API validation and improving deployment workflows.',
          },
        ],
      },
    },
  },
  {
    id: 'tifosi',
    slug: 'tifosi',
    title: 'Tifosi',
    description:
      'A relational database project for an Italian street-food restaurant, built with MySQL and SQL.',
    technologies: ['MySQL', 'SQL', 'Database Design'],
    featured: false,

    details: {
      summary:
        'A relational database designed to manage the products and business data of an Italian street-food restaurant.',

      links: {
        github: 'https://github.com/BrochotMaxime/brochot-maxime-devoir-base-de-donnees-tifosi',
      },

      context: {
        title: 'The challenge',
        description:
          'An Italian street-food restaurant needs a structured way to organize its products, ingredients, menus, customers and the relationships between them.',
      },

      solution: {
        title: 'The approach',
        description:
          'A MySQL relational database supported by SQL scripts for schema creation, sample data insertion and data verification.',
      },

      features: [
        {
          id: 'database-schema',
          title: 'Relational database schema',
          description:
            'Design a relational structure to organize focaccias, ingredients, drinks, brands, menus and customers.',
        },
        {
          id: 'sample-data',
          title: 'Sample data',
          description:
            'Populate the database with sample records and establish relationships between the different entities.',
        },
        {
          id: 'sql-queries',
          title: 'SQL queries',
          description:
            'Execute a set of ten SQL queries to retrieve and verify information stored in the database.',
        },
      ],

      technicalApproach: {
        title: 'Behind the project',
        description: 'A closer look at the relational database design and SQL implementation.',
        items: [
          {
            title: 'Relational data modelling',
            description:
              'Structuring restaurant data into related tables representing products, ingredients, brands, menus and customers.',
          },
          {
            title: 'Database initialization',
            description:
              'Using SQL scripts to create the database, configure its dedicated user and initialize the schema.',
          },
          {
            title: 'Data manipulation & queries',
            description:
              'Writing SQL scripts to insert sample data and execute ten queries against the resulting database.',
          },
        ],
      },

      outcome: {
        title: 'Results & learnings',
        description:
          'Results and technical experience gained from developing a relational database.',
        items: [
          {
            title: 'Outcome',
            description:
              'Created a MySQL database for an Italian street-food restaurant, including its relational schema, sample data and ten SQL verification queries.',
          },
          {
            title: 'Key learnings',
            description:
              'Practiced relational data modelling, SQL schema creation, data insertion and querying across related entities.',
          },
          {
            title: 'Next steps',
            description:
              'Potential improvements include expanding the query set, adding automated database checks and documenting the relational schema in greater detail.',
          },
        ],
      },
    },
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
