import React from 'react'
//import Image from 'next/image'
//import logo from '@/assets/images/logo.png'
import { BiLogoSlack } from "react-icons/bi";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 py-4 mt-auto">
    <div
      className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
    >
      <div className="mb-4 md:mb-0">
        {/* <Image src={logo} alt="Logo" className="h-8 w-auto" /> */}
        <div class="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"><BiLogoSlack className=''/></div>
       
      </div>
      <div
        className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
      >
       
      </div>
      <div>
        <p className="text-sm text-gray-500 mt-2 md:mt-0">
          &copy; {currentYear} PropertyPulse. All rights reserved.
        </p>
      </div>
    </div>
    
  </footer>
  )
}

export default Footer