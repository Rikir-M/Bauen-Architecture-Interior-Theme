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
    </div>
  )
}

export default App
