# Coding Conventions

## General Principles

- Keep code readable, consistent, and maintainable.
- Prefer simple solutions over unnecessary abstractions.
- Separate application data from presentation logic.
- Create reusable components when there is a clear need.
- Keep components focused on a specific responsibility.
- Follow the existing project structure and conventions.

## Naming Conventions

| Element              | Convention        | Example              |
| -------------------- | ----------------- | -------------------- |
| React components     | PascalCase        | `ProjectCard.jsx`    |
| React pages          | PascalCase        | `ProjectDetail.jsx`  |
| JavaScript functions | camelCase         | `getProjectBySlug()` |
| JavaScript variables | camelCase         | `projectTitle`       |
| Global constants     | UPPER_SNAKE_CASE  | `MAX_PROJECTS`       |
| Data files           | camelCase         | `projects.js`        |
| CSS classes          | kebab-case        | `.project-card`      |
| SCSS variables       | kebab-case        | `$color-background`  |
| SCSS partials        | Underscore prefix | `_variables.scss`    |
| Directories          | lowercase         | `components/`        |

## React

- Use functional components.
- Use PascalCase for component names and files.
- Prefer one main React component per file.
- Use props to pass data between components.
- Keep JSX readable and avoid unnecessary nesting.
- Extract reusable components when appropriate.
- Use React Router's `Link` component for internal navigation.

## JavaScript

- Prefer `const` unless reassignment is required.
- Use `let` when a variable must be reassigned.
- Avoid `var`.
- Use descriptive variable and function names.
- Prefer strict equality (`===` and `!==`).
- Keep functions focused and avoid unnecessary complexity.

## Styling

- Use SCSS for application styles.
- Use kebab-case for CSS class names.
- Prefer reusable design tokens over repeated hardcoded values.
- Keep global styles separate from component-specific styles when appropriate.
- Use responsive layouts and consider accessibility when implementing UI components.

## Formatting

Prettier is responsible for automatic code formatting.

The project uses:

- 2-space indentation.
- Single quotes in JavaScript.
- No mandatory semicolons.
- A target line width of 100 characters.
- LF line endings.

Run:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

ESLint is responsible for JavaScript and React code quality checks.

Run:

```bash
npm run lint
```

## Git Workflow

Development follows an issue-based workflow.

### Branches

Create a dedicated branch from an updated `main` branch.

Examples:

- `feature/setup-routing`
- `feature/project-architecture`
- `fix/navigation-bug`
- `docs/project-documentation`

### Commits

Use clear and descriptive commit messages.

Recommended prefixes:

- `feat:` — New functionality
- `fix:` — Bug fixes
- `refactor:` — Code restructuring without changing behavior
- `docs:` — Documentation changes
- `chore:` — Maintenance and tooling

Examples:

```text
feat: implement application routing
refactor: organize project structure
docs: add project documentation
```

### Pull Requests

Each issue should generally be implemented through a dedicated branch and pull request.

Pull requests should include:

- A summary of the changes.
- The main modifications.
- Relevant validation results.
- A reference to the related GitHub issue.

### Before Merging

Run the following checks:

```bash
npm run format:check
npm run lint
npm run build
```

Verify the relevant functionality manually when necessary.

### Merging

Use squash merging to keep the `main` branch history concise.

After merging:

1. Switch to `main`.
2. Pull the latest changes.
3. Confirm that the pull request was merged successfully.
4. Delete the completed local feature branch.
5. Prune obsolete remote-tracking references when needed.

## Documentation

Update the documentation when changes affect:

- Project setup.
- Application architecture.
- Development conventions.
- Available commands.
- Deployment configuration.

Documentation should remain concise and reflect the actual implementation.
