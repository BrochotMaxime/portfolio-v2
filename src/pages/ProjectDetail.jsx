import { useParams } from 'react-router'

function ProjectDetail() {
  const { slug } = useParams()

  return (
    <main>
      <h1>Project Detail</h1>
      <p>Project slug: {slug}</p>
    </main>
  )
}

export default ProjectDetail
