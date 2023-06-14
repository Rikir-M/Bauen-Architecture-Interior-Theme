// import React from 'react'
import logo from "../assets/images/logo.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      
<nav className="bg-white border-gray-200 dark:bg-primary drop-shadow-lg fixed top-0 w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-4 py-3 container mx-auto">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src={logo} className=" h-14 mr-3" alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="text-white uppercase font-Oswald font-light flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0  dark:bg-primary">
        <li>
          <a href="#" className="active block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300" aria-current="page">H o m e</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300">A b o u t</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300">P o r t f o l i o</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300">S e r v i c e s</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300">B l o g</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4  md:p-0 hover:text-secondary transition-all duration-300">C o n t a c t</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
