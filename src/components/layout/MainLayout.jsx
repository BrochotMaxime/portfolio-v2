import { Outlet } from 'react-router'

import Footer from './Footer'
import Header from './Header'

// Shared layout for all application pages
function MainLayout() {
  return (
    <div className="main-layout">
      {/* Global navigation */}
      <Header />

      {/* Current route content */}
      <main id="main-content" className="main-layout__content">
        <Outlet />
      </main>

      {/* Global footer */}
      <Footer />
    </div>
  )
}

export default MainLayout
