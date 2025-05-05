import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/Projects'
import ContactBanner from '../../components/ContactBanner/ContactBanner'
import HeroSection from '../../components/HeroSection/HeroSection'
// import Skills from '../../components/Skills/Skills'

function Home() {
  return (
    <div>
      <HeroSection />
      {/* <Hero /> */}
      <About />
      <Services />
      {/* <Skills /> */}
      <Projects />
      <ContactBanner />
      
    </div>
  )
}

export default Home
