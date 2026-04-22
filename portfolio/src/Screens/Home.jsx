import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Technologies from '../Components/Technologies'
import Timeline from '../Components/Timeline'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
