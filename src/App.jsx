import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Personas from './components/Personas'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Therapists from './components/Therapists'
import Testimonials from './components/Testimonials'
import Resources from './components/Resources'
import Booking from './components/Booking'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="text-[#222222] bg-white">
      <Header />
      <main>
        <Hero />
        <Personas />
        <Services />
        <HowItWorks />
        <Therapists />
        <Testimonials />
        <Resources />
        <Booking />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
