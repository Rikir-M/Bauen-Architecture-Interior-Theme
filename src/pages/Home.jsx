// import React from 'react'
import bg1 from '../assets/images/bg1.jpg'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="max-h-screen">
      {/* <Navbar/> */}
      <div className=" grid grid-cols-12">
      <div className=" col-span-1">

      </div>
      <div className=" col-span-11">
        <img src={bg1} className='' alt=""/>
      </div>
    </div>
    </div>
  )
}

export default Home
