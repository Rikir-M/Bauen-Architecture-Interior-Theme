// import React from 'react'

import BlogCard from './components/BlogCard'
import BlogDetail from './components/BlogDetail'
import Navbar from './components/Navbar'
import Blog from './pages/Blog'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/blogdetail' element={<BlogDetail/>}/>
      </Routes>

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import Contact from './pages/Contact'

import About from './pages/About'

import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import ScrollBtn from './components/ScrollBtn'

const App = () => {
  return (

  
    <div className='selection:bg-selectionColor'>
      {/* <Navbar/>
      <Home/> */}
      <Services/>
      <ScrollBtn  />
      {/* <About/> */}
      {/* <Footer/> */}
      {/* <ServiceDetail/> */}

    <div className=''>

      <Contact/>

      {/* <Navbar/> */}
      <Home/>


    </div>
  )
}

export default App
