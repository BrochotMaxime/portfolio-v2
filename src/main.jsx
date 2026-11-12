import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

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
      <App />
    </BrowserRouter>
  </StrictMode>,
)
