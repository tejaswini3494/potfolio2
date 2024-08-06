import React from 'react'


export default function () {

  return (
    <div style={{backgroundImage:'url("Images/background9.jpg")'}} className='h-screen bg-cover  bg-center  object-fit sticky top-0 -z-10'>
        <div className='flex justify-center items-center flex-col h-screen gap-5 w-full mx-auto'>
        
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center '>Hellow, I'M Tejaswini Virshaiv</h2>
          <p className='text-sm  sm:text-lg  md:text-xl font-semibold text-blue-50  text-center'>
            I am a Frontend Developer. This is my official portfolio website to
            shows all Details and work experience web development .
          </p>

          <button className="text:sm py-2 px-8 bg-blue-950 text-white sm:text-lg   font-bold">Hire Me</button>
        </div>
       
    </div>
  )
}
