import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Screens/Home'
import Project from './Screens/Project'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-teal-300 selection:text-black'>
        <div className="fixed top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
        <div className='container mx-auto px-8'>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/project/:id' element={<Project />} />
            </Routes>
            <Footer />
            <ToastContainer position='top-right' theme='dark' />
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
