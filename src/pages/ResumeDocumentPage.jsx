import { useEffect } from 'react'

import ResumeDocument from '../components/resume/ResumeDocument'

function ResumeDocumentPage({ language }) {
  useEffect(() => {
    const previousTitle = document.title

    document.documentElement.lang = language
    document.title = language === 'fr' ? 'CV | Développeur web' : 'Resume | Web Developer'

    return () => {
      document.documentElement.lang = 'en'
      document.title = previousTitle
    }
  }, [language])

  return (
    <main className="resume-document-page">
      <ResumeDocument language={language} />
    </main>
  )
}

export default ResumeDocumentPage
