import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HeroSection from './HeroSection'

const root = document.getElementById('hero-root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HeroSection />
    </React.StrictMode>
  )
}
