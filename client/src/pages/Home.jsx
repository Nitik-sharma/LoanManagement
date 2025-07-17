import React from 'react'
import HeroSection from '../components/HeroSection'
import HowItsWork from '../components/HowItsWork'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
      <HeroSection />
      <HowItsWork />
      <Features />
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default Home