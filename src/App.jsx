// import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import ScrollBtn from './components/ScrollBtn'

const App = () => {
  return (
  
    <div className='selection:bg-selectionColor'>
      <h1 className='animate__animated animate__fadeInUp text-9xl text-white'>hello</h1>
      {/* <Navbar/>
      <Home/> */}
      <Services/>
      <ScrollBtn  />
      {/* <About/> */}
      {/* <Footer/> */}
      {/* <ServiceDetail/> */}
    </div>
  )
}

export default App
