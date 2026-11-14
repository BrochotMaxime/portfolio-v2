import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { ConsentProvider } from './features/consent/ConsentProvider.jsx'
import ConsentBanner from './features/consent/ConsentBanner.jsx'
import ConsentPreferences from './features/consent/ConsentPreferences.jsx'
import AnalyticsManager from './features/analytics/AnalyticsManager.jsx'

import App from './App.jsx'
import './styles/main.scss'

function removeStaticSeoMetadata() {
  document.querySelectorAll('[data-static-seo="true"]').forEach((element) => {
    element.remove()
  })
}

removeStaticSeoMetadata()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ConsentProvider>
        <AnalyticsManager />
        <App />
        <ConsentBanner />
        <ConsentPreferences />
      </ConsentProvider>
    </BrowserRouter>
  </StrictMode>,
)
