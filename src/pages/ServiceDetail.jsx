import React from 'react'
import logo from '../assets/images/logo.png'
import banner from "../assets/images/banner.jpg"
import '../style/ServiceDetail.css'
import lackHouse from "../assets/images/lakeHouse.jpg"
import urbanHouse from "../assets/images/urbanHouse.jpg"
import lightHouse from "../assets/images/lightHouse.jpg"
import {MdKeyboardArrowRight} from "react-icons/md"
const ServiceArchitect = () => {
    return (
        <>
            <div className='Nav absolute top-0 z-50 '>
              <nav className='hidden md:block  '>
                  <div className='flex items-center gap-20 justify-between pr-16'>
                       <div className='logos px-14 py-6 bg-primary float-left' >
                      <div>
                           <img src={logo} className='w-24' alt="" />
                      <h1 className='uppercase font-Oswald tracking-widest text-2xl text-secondary'>b a u e n</h1>
                      <p className='uppercase text-textColor tracking-widest font-Oswald text-xs font-light'>i n n o v a t e  d e s i g n</p>
                      </div>
                     
                        </div>
                  <div className='menu font-Oswald ml-auto'>
                      <ul className='flex items-center gap-6 text-headColor'>
                          <li>
                              <a href="">H O M E</a>
                          </li>
                           <li>
                              <a href="">A B O U T</a>
                          </li>
                           <li>
                              <a href="">P O R T F O L I O</a>
                          </li>
                           <li>
                              <a href="">S E R V I C E S</a>
                          </li>
                           <li>
                              <a href="">B L O G</a> 
                          </li>
                           <li>
                             <a href=""> C O T A C T</a>
                          </li>
                      </ul>
                  </div>
                  </div>
                 
             </nav>
          </div>
      <section className='service__architecture  text-headColor'>
                <div className='banner__head'>
                </div>
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div className='col-span-1 md:col-span-2'>
                            <h1 className='text-4xl font-light text-secondary tracking-widest font-Oswald mb-6'>ARCHITECTURE</h1>
                            <p className='text-textColor leading-relaxed tracking-wide mb-4'>Architecture non lorem ac erat suscipit bibendum. Nulla facilisi sedeuter nunc volutpat molli sapien veconseyer turpeutionyer masin libero sempe. Fusceler mollis augue sit amet hendrerit vestibulum. Duisteyerionyer venenatis lacus.</p>
                            <p className='text-textColor leading-relaxed tracking-wide mb-5'>Villa gravida eros ut turpis interdum ornare. Interdum et malesu they adamale fames ac anteipsun pimsinefaucibus urabitur arcu site feugiat in volutpat.</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 '>
                                <div className='img-hover-zoom'>
                                    <img src={urbanHouse} className=' hover:opacity-60' alt="" />
                                </div>
                                <div className=''>
                                    <div className='img-hover-zoom'>

                                    <img src={lackHouse} className='opacity-60' alt="" />
                                    </div>
                                </div>
                                <div className='col-span-2 img-hover-zoom'> <img src={lightHouse} className=' hover:opacity-60 ' alt="" loading='lazy' /></div>
                            </div>
                            
                        </div>
                        <div className='col-span-1'>
                            <div className=' bg-[rgb(49,49,49)] px-5 py-7'>
                                <h1 className='uppercase tracking-widest text-2xl font-Oswald font-light text-headColor mb-3'>all services</h1>
                                <div className='line2'></div>
                                <ul>
                                    <li className='flex items-center justify-between active px-4 py-3 mb-2 transition-all duration-500 hover:text-white text-textColor'>
                                        <a href="" className='text-base '>Architecture</a>
                                        <MdKeyboardArrowRight />
                                    </li>
                                    <li className='flex items-center justify-between hover:bg-secondary px-4 py-3 mb-2 transition-all duration-500 hover:text-white text-textColor'>
                                        <a href="" className='text-base '>Interior Design</a>
                                        <MdKeyboardArrowRight />
                                    </li>
                                    <li className='flex items-center justify-between hover:bg-secondary px-4 py-3 mb-2 transition-all duration-500 hover:text-white text-textColor'>
                                        <a href="" className='text-base '>Urban Design</a>
                                        <MdKeyboardArrowRight />
                                    </li>
                                    <li className='flex items-center justify-between hover:active:bg-secondary hover:bg-secondary px-4 py-3 mb-2 transition-all duration-500 hover:text-white text-textColor'>
                                        <a href="" className='text-base '>Planning</a>
                                        <MdKeyboardArrowRight />
                                    </li>
                                    <li className='flex items-center justify-between hover:bg-secondary px-4 py-3 mb-2 transition-all duration-500 hover:text-white text-textColor'>
                                        <a href="" className='text-base '>3D Modeling</a>
                                        <MdKeyboardArrowRight />
                                    </li>
                                    <li className='flex items-center justify-between hover:bg-secondary px-4 py-3 mb-2 transition-all duration-500 hover:text-white text-textColor'>
                                        <a href="" className='text-base '>Decor Plan</a>
                                        <MdKeyboardArrowRight />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
    </section>
        </>
      
  )
}

export default ServiceArchitect