import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HeroSection from './HeroSection'
import PricingGlass from './PricingGlass'
import AnimatedTestimonials from './AnimatedTestimonials'

const heroRoot = document.getElementById('hero-root')
if (heroRoot) {
  ReactDOM.createRoot(heroRoot).render(
    <React.StrictMode>
      <HeroSection />
    </React.StrictMode>
  )
}

const pricingRoot = document.getElementById('pricing-root')
if (pricingRoot) {
  ReactDOM.createRoot(pricingRoot).render(
    <React.StrictMode>
      <PricingGlass />
    </React.StrictMode>
  )
}

const testimonialsRoot = document.getElementById('testimonials-root')
if (testimonialsRoot) {
  ReactDOM.createRoot(testimonialsRoot).render(
    <React.StrictMode>
      <AnimatedTestimonials autoplay={true} />
    </React.StrictMode>
  )
}
