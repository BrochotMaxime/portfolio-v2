export const SITE_CONFIG = {
  name: 'Maxime Brochot',
  url: 'https://portfolio-v2-ashy-rho.vercel.app',
  defaultTitle: 'Maxime Brochot | Web Developer',
  defaultDescription:
    'Explore the portfolio of Maxime Brochot, a web developer building modern web applications with React, JavaScript and Node.js.',
  defaultImage: '/images/og-default.png',
  locale: 'en_US',
}

export const PAGE_METADATA = {
  home: {
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    path: '/',
  },
  projects: {
    title: 'Projects | Maxime Brochot',
    description:
      'Explore web development projects by Maxime Brochot, featuring React applications, back-end APIs and database solutions.',
    path: '/projects',
  },
  about: {
    title: 'About | Maxime Brochot',
    description:
      'Learn more about Maxime Brochot, his background, technical skills and approach to web development.',
    path: '/about',
  },
  resume: {
    title: 'Resume | Maxime Brochot',
    description:
      'Explore the professional background, technical skills and development experience of Maxime Brochot.',
    path: '/resume',
  },
  contact: {
    title: 'Contact | Maxime Brochot',
    description:
      'Get in touch with Maxime Brochot to discuss web development opportunities, projects and collaborations.',
    path: '/contact',
  },
  legal: {
    title: 'Legal Notice | Maxime Brochot',
    description:
      'Read the legal notice and website information for the portfolio of Maxime Brochot.',
    path: '/legal',
  },
}

export function getProjectMetadata(project) {
  return {
    title: `${project.title} | ${SITE_CONFIG.name}`,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.image ?? SITE_CONFIG.defaultImage,
  }
}

export function getAbsoluteUrl(path) {
  return new URL(path, `${SITE_CONFIG.url}/`).href
}
