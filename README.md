# Portfolio V2

Personal portfolio website showcasing my web development projects, technical skills, and professional background.

Built with React and Vite, with a focus on responsive design, accessibility, performance, and maintainable code.

## Tech Stack

- **React** — User interface development
- **Vite** — Development server and build tooling
- **JavaScript** — Application logic
- **React Router** — Client-side routing
- **Sass (SCSS)** — Styling
- **ESLint** — Code quality
- **Prettier** — Code formatting

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/BrochotMaxime/portfolio-v2.git
```

Navigate to the project directory:

```bash
cd portfolio-v2
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal (usually `http://localhost:5173`).

## Available Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the development server             |
| `npm run build`        | Generate a production build              |
| `npm run preview`      | Preview the production build locally     |
| `npm run lint`         | Run ESLint                               |
| `npm run format`       | Format files with Prettier               |
| `npm run format:check` | Check formatting without modifying files |

## Project Structure

```text
src/
├── assets/          # Images and other imported assets
├── components/      # Reusable React components
├── data/            # Structured application data
├── pages/           # Page components
├── styles/          # Global SCSS styles
├── App.jsx          # Application routes and root component
└── main.jsx         # React entry point
```

See [Architecture](docs/architecture.md) for more details.

## Documentation

- [Architecture](docs/architecture.md)
- [Coding Conventions](docs/coding-conventions.md)

## Development Workflow

Development follows an issue-based Git workflow:

1. Create a dedicated branch from `main`.
2. Implement the changes related to the issue.
3. Run formatting, linting, and build checks.
4. Open a pull request targeting `main`.
5. Review and merge the pull request.

See [Coding Conventions](docs/coding-conventions.md) for additional details.

## Project Status

Under active development.

The application foundation is being established before implementing the final portfolio design.
