import { useEffect } from 'react'

import ResumeDocument from '../components/resume/ResumeDocument'
import PageMetadata from '../components/seo/PageMetadata'

function ResumeDocumentPage({ language }) {
  useEffect(() => {
    document.documentElement.lang = language

    return () => {
      document.documentElement.lang = 'en'
    }
  }, [language])

  const isFrench = language === 'fr'

  const metadata = {
    title: isFrench ? 'CV | Maxime Brochot' : 'Resume | Maxime Brochot',
    description: isFrench
      ? 'Curriculum vitae de Maxime Brochot, développeur web.'
      : 'Curriculum vitae of Maxime Brochot, web developer.',
    path: `/resume/${language}`,
    noindex: true,
    image: null,
  }

  return (
    <>
      <PageMetadata {...metadata} />

      <main className="resume-document-page">
        <ResumeDocument language={language} />
      </main>
    </>
  )
}

export default ResumeDocumentPage
