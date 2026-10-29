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

The application is deployed on Vercel and connected to the GitHub repository.

### Production

- **Hosting:** Vercel
- **Production branch:** `main`
- **Framework:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Production URL:** https://portfolio-v2-ashy-rho.vercel.app/

Changes merged into `main` automatically trigger a production deployment.

### Preview Deployments

Pull requests can generate preview deployments on Vercel.

These deployments allow changes to be tested before merging into `main`.

### Client-Side Routing

The application uses React Router with `BrowserRouter`.

A `vercel.json` configuration rewrites application routes to `/index.html`, allowing React Router to handle navigation and page refreshes.

### Custom Domain

The custom domain remains assigned to the previous portfolio version until Portfolio V2 is ready for release.
