import ActionLink from '../components/ui/ActionLink'

import Container from '../components/layout/Container'

import PageMetadata from '../components/seo/PageMetadata'

function NotFound() {
  return (
    <div className="not-found">
      <PageMetadata
        title="Page Not Found | Maxime Brochot"
        description="The page you are looking for does not exist."
        noindex
        image={null}
      />

      <Container>
        <div className="not-found__content">
          <p className="not-found__code">404</p>

          <h1 className="not-found__title" tabIndex={-1}>
            Page not found
          </h1>

          <p className="not-found__description">The page you are looking for does not exist.</p>

          <ActionLink to="/" variant="text">
            Back to home
          </ActionLink>
        </div>
      </Container>
    </div>
  )
}

export default NotFound
