import Container from '../components/layout/Container'

import ActionLink from '../components/ui/ActionLink'
import Divider from '../components/ui/Divider'
import SectionLabel from '../components/ui/SectionLabel'

function Home() {
  return (
    <main>
      <Container>
        <SectionLabel number="01" label="INTRO" />
        <h1>Home</h1>
        <p>Welcome to my portfolio.</p>

        <ActionLink to="/projects" variant="primary">
          View selected work
        </ActionLink>

        <ActionLink to="/contact" variant="text">
          Get in touch
        </ActionLink>

        <ActionLink href="https://github.com" external>
          Visit GitHub
        </ActionLink>

        <Divider />

        <SectionLabel number="02" label="SELECTED WORK" />
      </Container>
    </main>
  )
}

export default Home
