import site from './site'

const legal = {
  introduction: {
    title: 'Legal information',
    description:
      'Legal notices, website information, and details about the processing of personal data.',
  },

  lastUpdated: '2026-11-05',

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
    email: 'privacy@vercel.com',
    website: 'https://vercel.com',
  },

  sections: [
    {
      id: 'publisher',
      title: 'Website publisher',
      paragraphs: [
        'This personal portfolio is published by Maxime Brochot to present his background, skills, and projects.',
      ],
      label: 'PUBLISHER',
    },
    {
      id: 'hosting',
      title: 'Hosting',
      paragraphs: ['This website is hosted by Vercel Inc. Contact details are provided below.'],
      label: 'HOSTING',
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual property',
      paragraphs: [
        'Unless otherwise stated, original content on this website is protected by intellectual property laws. Reuse is subject to applicable law and licenses.',
        'Third-party trademarks, fonts, libraries, and other protected materials remain subject to their respective owners’ rights and licenses.',
      ],
      label: 'COPYRIGHT',
    },
    {
      id: 'personal-data',
      title: 'Personal data',
      paragraphs: [
        'Personal data is processed to operate and secure this website and respond to contact requests. Contact form submissions are processed on the basis of legitimate interests under Article 6(1)(f) of the GDPR.',
        'Contact information is not used for advertising or automated profiling. Technical service providers may process data as described below.',
      ],
      label: 'PRIVACY',
    },
    {
      id: 'contact-form',
      title: 'Contact form',
      paragraphs: [
        'The contact form collects your name, email address, message, and an optional subject to process and respond to your inquiry.',
        'Contact form submissions are processed through Vercel and delivered using Resend to a Gmail inbox operated by Google. Messages are retained for up to 12 months after the last exchange, unless longer retention is legally required or otherwise justified.',
        'Resend may process email submissions in the United States. International data transfers are subject to applicable safeguards, including EU Standard Contractual Clauses where relevant.',
        'Cloudflare Turnstile protects the contact form against automated submissions and processes technical information for security verification. Data may be processed outside the European Economic Area, subject to applicable data protection safeguards.',
      ],
      label: 'CONTACT',
    },
    {
      id: 'cookies',
      title: 'Cookies and analytics',
      paragraphs: [
        'This website does not currently use analytics or advertising tracking services.',
        'Cloudflare Turnstile is used to protect the contact form against automated submissions. It processes technical information for security verification. The optional pre-clearance feature is disabled.',
        'Any future use of non-essential cookies or tracking technologies will be subject to applicable consent requirements.',
      ],
      label: 'COOKIES',
    },
    {
      id: 'user-rights',
      title: 'Your rights',
      paragraphs: [
        'Under the GDPR, you may request access, rectification, erasure, or restriction of your personal data, or object to its processing. Other rights may apply under specific conditions.',
        'To exercise your rights, contact the website publisher using the email address provided on this page. Requests are generally handled within one month.',
        'You may also lodge a complaint with the French data protection authority (CNIL).',
      ],
      label: 'YOUR RIGHTS',
      links: [
        {
          label: 'CNIL official website',
          href: 'https://www.cnil.fr',
        },
      ],
    },
  ],
}

export default legal
