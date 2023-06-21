// import React from 'react'
import { RiFacebookFill } from "react-icons/ri"
import { AiOutlineTwitter } from "react-icons/ai"
import { CiInstagram } from "react-icons/ci"
import {FaPinterestP} from "react-icons/fa"

const Footer = () => {
  return (
    <section className="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 my-20  md:grid-cols-3">
          <div className="mb-8 md:mb-0">
            <h1 className="text-secondary">Phone</h1>
            <h1 className="text-textColor">+1-203-123-0606</h1>
          </div>
          <div className="mb-8 md:mb-0">
            <h1 className="text-secondary">Email</h1>
            <h1 className="text-textColor">support@bauen.com</h1>
          </div>
          <div className="mb-8 md:mb-0">
            <h1 className="text-secondary">Our Address</h1>
            <h1 className="text-textColor">24 King St, Charleston, SC 29401 USA</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 text-textColor  md:grid-cols-3">
          <div className="mb-5">
            © Copyright 2023 Bauen. Developed By webRedox
          </div>
          <div className="flex mb-5 items-center justify-start text-headColor gap-3 md:justify-center">
            <div className="w-10 h-10 outline  outline-1 outline-secondary opacity-30 rounded-full flex items-center justify-center hover:opacity-95 cursor-pointer hover:text-secondary transition-all duration-500  ">

            <RiFacebookFill className=" hover:text-secondary "/>
            </div>
             <div className="w-10 h-10 outline  outline-1 outline-secondary opacity-30 rounded-full flex items-center justify-center hover:opacity-95 cursor-pointer hover:text-secondary transition-all duration-500  ">

            <AiOutlineTwitter className=" hover:text-secondary "/>
            </div>
             <div className="w-10 h-10 outline  outline-1 outline-secondary opacity-30 rounded-full flex items-center justify-center hover:opacity-95 cursor-pointer hover:text-secondary transition-all duration-500  ">

            <CiInstagram className=" hover:text-secondary "/>
            </div>
             <div className="w-10 h-10 outline  outline-1 outline-secondary opacity-30 rounded-full flex items-center justify-center hover:opacity-95 cursor-pointer hover:text-secondary transition-all duration-500  ">

            <FaPinterestP className=" hover:text-secondary "/>
            </div>
          </div>
          <div className="text-sm mb-5 md:text-right cursor-pointer hover:text-secondary">Terms & Conditions</div>
        </div>
      </div>
    </section>
  )
}

export default Footer
