import { Link, Routes, Route } from 'react-router'

import Header from './components/layout/Header'

import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Header aria-label="Main navigation">
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/projects">Projects</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/resume">Resume</Link>
        {' | '}
        <Link to="/contact">Contact</Link>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
