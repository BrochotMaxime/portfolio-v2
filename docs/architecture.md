# Application Architecture

## Overview

Portfolio V2 is a client-side React application built with Vite.

The application uses React Router for navigation and Sass for styling.

The architecture is organized by responsibility, with a clear separation between pages, reusable components, structured data, assets, and styles.

This approach keeps the project simple while allowing the application to grow.

## Project Structure

```text
portfolio-v2/
├── public/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   ├── data/
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Projects.jsx
│   │   └── Resume.jsx
│   ├── styles/
│   │   └── main.scss
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Directory Responsibilities

### `src/assets/`

Contains images, icons, and other resources imported into the application.

Assets imported through JavaScript or CSS are processed by Vite.

### `src/components/`

Contains reusable React components shared across pages.

Components may be grouped into subdirectories when needed, such as layout components, UI elements, or project-related components.

### `src/data/`

Contains structured application data.

Portfolio project information can be maintained separately from the React components responsible for displaying it.

### `src/pages/`

Contains components representing application pages.

Each page is associated with a route defined in `App.jsx`.

### `src/styles/`

Contains global SCSS styles and, eventually, shared design tokens, typography rules, and styling utilities.

The current stylesheet entry point is `main.scss`.

### `public/`

Contains static files served directly without being imported through the application source code.

## Application Entry Point

`src/main.jsx` initializes React, imports global styles, and wraps the application in `BrowserRouter`.

`src/App.jsx` defines the application routes and currently includes temporary navigation links.

## Routing

React Router handles client-side navigation.

| Path              | Page           |
| ----------------- | -------------- |
| `/`               | Home           |
| `/projects`       | Projects       |
| `/projects/:slug` | Project Detail |
| `/about`          | About          |
| `/resume`         | Resume         |
| `/contact`        | Contact        |
| `*`               | Not Found      |

The dynamic `:slug` parameter identifies individual projects.

The `ProjectDetail` component retrieves this parameter using `useParams`.

## Styling

Sass is used to write SCSS, which Vite compiles into CSS.

Global styles are currently imported through `src/main.jsx`.

As the interface is implemented, shared design tokens and styling utilities will be organized into dedicated SCSS files.

## Data Management

The portfolio is intended to use local structured data for its project content.

No backend or database is currently required.

This keeps the application lightweight and avoids unnecessary infrastructure.

## Deployment

The application will be deployed as a static site using Vercel.

Production builds are generated with:

```bash
npm run build
```

The generated output is stored in `dist/`.

Deployment configuration and direct URL handling will be verified during the deployment setup issue.
