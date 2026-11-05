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
      enabled: true,
      fields: ['name', 'email', 'subject', 'message'],
      provider: 'Resend',
      retentionPeriod: '12 months after the last exchange',
      legalBasis: 'Legitimate interests (GDPR Article 6(1)(f))',
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
      paragraphs: [
        'This personal portfolio is published by Maxime Brochot to present his background, skills, and projects.',
      ],
    },
    {
      id: 'hosting',
      title: 'Hosting',
      paragraphs: ['This website is hosted by Vercel Inc. Contact details are provided below.'],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual property',
      paragraphs: [
        'Unless otherwise stated, original content on this website is protected by intellectual property laws. Reuse is subject to applicable law and licenses.',
        'Third-party trademarks, fonts, libraries, and other protected materials remain subject to their respective owners’ rights and licenses.',
      ],
    },
    {
      id: 'personal-data',
      title: 'Personal data',
      paragraphs: [
        'Personal data is processed to operate and secure this website and respond to contact requests. Contact form submissions are processed on the basis of legitimate interests under Article 6(1)(f) of the GDPR.',
        'Contact information is not used for advertising or automated profiling. Technical service providers may process data as described below.',
      ],
    },
    {
      id: 'contact-form',
      title: 'Contact form',
      paragraphs: [
        'The contact form collects your name, email address, message, and an optional subject to process and respond to your inquiry.',
        'Submissions are handled through Vercel and sent by email using Resend. Messages are deleted within 12 months of the last exchange, unless longer retention is legally required or otherwise justified.',
        'Cloudflare Turnstile protects the form against spam and may process technical information for security verification.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and analytics',
      paragraphs: [
        'This website does not currently use analytics or advertising tracking services.',
        'Cloudflare Turnstile may use security-related cookies or similar technologies to protect the contact form. Any future non-essential tracking will be subject to applicable consent requirements.',
      ],
    },
    {
      id: 'user-rights',
      title: 'Your rights',
      paragraphs: [
        'Under the GDPR, you may request access, rectification, erasure, or restriction of your personal data, or object to its processing. Other rights may apply under specific conditions.',
        'To exercise your rights, contact the website publisher using the email address provided on this page. Requests are generally handled within one month.',
        'You may also lodge a complaint with the French data protection authority (CNIL): https://www.cnil.fr.',
      ],
    },
  ],
}

export default legal
