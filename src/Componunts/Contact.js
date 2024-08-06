import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="bg-slate-500" id='contact'>
        <h2 className='text-xl font-bold text-amber-800 py-10 w-5/6 mx-auto  text-center'>Contact Us</h2>
      <div className="flex items-center justify-center flex-wrap gap-10 pb-10">
        <div className='flex flex-col items-center justify-center'>
<FaWhatsapp className='text-4xl text-blue-950  '/>
<p className='text-blue-950 font-semibold'>9921467654</p>
</div>
<div className='flex flex-col items-center justify-center'>
      <IoLogoGithub className='text-4xl text-blue-950  '/>
      <p className='text-blue-950 font-semibold'>tejaswini3494</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
      <MdEmail className='text-4xl text-blue-950 ' />
      <p className='text-blue-950 font-semibold'>virshaivtejaswini@gmail.com</p>
      </div>
      </div>
     
    </div>
  )
}
