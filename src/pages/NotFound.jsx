import Container from '../components/layout/Container'
import ActionLink from '../components/ui/ActionLink'

function NotFound() {
  return (
    <div className="not-found">
      <Container>
        <div className="not-found__content">
          <p className="not-found__code">404</p>

          <h1 className="not-found__title">Page not found</h1>

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
