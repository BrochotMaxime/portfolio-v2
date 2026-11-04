import site from './site'

const legal = {
  introduction: {
    title: 'Legal information',
    description:
      'Legal notices, website information, and details about the processing of personal data.',
  },

  publisher: {
    name: site.owner,
    email: site.email,
    businessRegistration: null,
    address: null,
    phone: null,
  },

  hosting: {
    name: 'Vercel Inc.',
    address: '440 N Barranca Avenue #4133, Covina, CA 91723, United States',
    website: 'https://vercel.com',
  },

  privacy: {
    contactForm: {
      enabled: false,
      fields: ['name', 'email', 'subject', 'message'],
      provider: null,
      retentionPeriod: null,
      legalBasis: null,
    },

    analytics: {
      enabled: false,
      provider: null,
    },

    contactEmail: site.email,
  },

  sections: [
    {
      id: 'publisher',
      title: 'Website publisher',
      paragraphs: [],
    },
    {
      id: 'hosting',
      title: 'Hosting',
      paragraphs: [],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual property',
      paragraphs: [
        'Unless otherwise stated, the original content and design of this portfolio are the property of the website publisher.',
        'Third-party trademarks, logos, and other protected materials remain the property of their respective owners.',
      ],
    },
    {
      id: 'personal-data',
      title: 'Personal data',
      paragraphs: [],
    },
    {
      id: 'contact-form',
      title: 'Contact form',
      paragraphs: [],
    },
    {
      id: 'cookies',
      title: 'Cookies and analytics',
      paragraphs: [],
    },
    {
      id: 'user-rights',
      title: 'Your rights',
      paragraphs: [],
    },
  ],
}

export default legal
