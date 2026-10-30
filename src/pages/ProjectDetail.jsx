import { useParams } from 'react-router'

import Container from '../components/layout/Container'

function ProjectDetail() {
  const { slug } = useParams()

  return (
    <Container>
      <h1>Project Detail</h1>
      <p>Project slug: {slug}</p>
    </Container>
  )
}

export default ProjectDetail
