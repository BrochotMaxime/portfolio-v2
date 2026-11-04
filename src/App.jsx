import { Routes, Route } from 'react-router'

import MainLayout from './components/layout/MainLayout'

import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Resume from './pages/Resume'
import ResumeDocumentPage from './pages/ResumeDocumentPage'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      {/* Shared layout for all routes */}
      <Route element={<MainLayout />}>
        {/* Application pages */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />

        {/* Fallback page for unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="resume/fr" element={<ResumeDocumentPage language="fr" />} />
      <Route path="resume/en" element={<ResumeDocumentPage language="en" />} />
    </Routes>
  )
}

export default App
