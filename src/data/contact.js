import site from './site'

const contact = {
  introduction: {
    title: "Let's get in touch",
    description:
      'Have a project in mind, an opportunity to discuss, or simply want to connect? Feel free to reach out.',
  },

  methods: {
    title: 'Other ways to connect',
    items: [
      {
        id: 'email',
        label: 'Email',
        text: site.email,
        href: `mailto:${site.email}`,
        icon: 'mail',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        text: 'Connect on LinkedIn',
        href: site.socialLinks.linkedin,
        icon: 'linkedin',
      },
      {
        id: 'github',
        label: 'GitHub',
        text: 'Explore my GitHub',
        href: site.socialLinks.github,
        icon: 'github',
      },
    ],
  },

  form: {
    title: 'Send me a message',
    description: 'You can also contact me directly using the form below.',

    fields: [
      {
        id: 'name',
        name: 'name',
        label: 'Full name',
        type: 'text',
        placeholder: 'Your name',
        required: true,
      },
      {
        id: 'email',
        name: 'email',
        label: 'Email address',
        type: 'email',
        placeholder: 'you@example.com',
        required: true,
      },
      {
        id: 'subject',
        name: 'subject',
        label: 'Subject',
        type: 'text',
        placeholder: 'What is your message about?',
        required: false,
        fullWidth: true,
      },
      {
        id: 'message',
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Tell me about your project or question...',
        required: true,
        fullWidth: true,
      },
    ],

    submitLabel: 'Send message',

    feedback: {
      success: 'Your message has been sent successfully. Thank you for reaching out!',
      error: 'Something went wrong. Please try again or contact me directly by email.',
    },

    privacyNotice: {
      text: 'The information submitted through this form is used to process and respond to your inquiry.',
      link: {
        label: 'Privacy information',
        to: '/legal',
      },
    },
  },
}

export default contact
