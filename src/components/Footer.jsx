import React from 'react'
import { FaInstagram,FaFacebook,FaTwitter, } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    
    <div className='w-full h-[200px] bg-black mt-4'>
     <div className='  flex justify-center gap-[10px] pt-10 w-full '>
     <FaInstagram size={50} className='text-gray-500' />
     <FaFacebook size={50} className='text-gray-500'/>
     <FaTwitter size={50} className='text-gray-500' />
     

     
     </div>
     <p className='text-gray-500 text-center pt-6 text-2xl'>BY <span className='text-red-500'>ME2</span></p>
    </div>
    
    
    </>
  )
}
