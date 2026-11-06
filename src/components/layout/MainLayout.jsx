import { Outlet } from 'react-router'

import ScrollToTop from './ScrollToTop'
import Header from './Header'
import Footer from './Footer'

import Divider from '../ui/Divider'

// Shared layout for all application pages
function MainLayout() {
  return (
    <div className="main-layout">
      <ScrollToTop />

      {/* Global navigation */}
      <Header />

      {/* Current route content */}
      <main id="main-content" className="main-layout__content">
        <Outlet />
      </main>

      <Divider />

      {/* Global footer */}
      <Footer />
    </div>
  )
}

export default MainLayout
