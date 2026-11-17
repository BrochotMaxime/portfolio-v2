import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'

import MainLayout from './components/layout/MainLayout'

import Home from './pages/Home'
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const About = lazy(() => import('./pages/About'))
const Resume = lazy(() => import('./pages/Resume'))
const ResumeDocumentPage = lazy(() => import('./pages/ResumeDocumentPage'))
const Contact = lazy(() => import('./pages/Contact'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

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

      <Route
        path="/resume/fr"
        element={
          <Suspense fallback={null}>
            <ResumeDocumentPage language="fr" />
          </Suspense>
        }
      />
      <Route
        path="/resume/en"
        element={
          <Suspense fallback={null}>
            <ResumeDocumentPage language="en" />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default App
