import React, { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
// import img1 from "../Gallery/logo4.webp";

export default function Navbar() {
  const [hrefggle, sethrefggle] = useState(false);

  return (
    <>
      <div className="fixed w-full">
        <div className="flex items-center   gap-20   py-4 px-6   justify-between h-24  w-5/6 mx-auto relative ">
         
          <div className="flex flex-col  ">
            {/* <img src={img1} className="w-10 " /> */}
            <p className="text-red-700  text-2xl font-bold">
              Tejaswini
            </p>
          </div>

          <ul className=" hidden duration-300 lg:flex  items-center justify-between gap-2 text-blue-800  text-sm font-semibold py-2 ">
            <li>
              <a
                href="#"
                className="hover:bg-blue-800 hover:text-white py-2.5 px-6 text-white text-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:bg-blue-800 hover:text-white py-2.5 px-6 text-white text-md"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:bg-blue-800 hover:text-white py-2.5 px-6 text-white text-md"
              >
                Projects
              </a>
            </li>
           

            <li>
              <a
                href="#contact"
                className="hover:bg-blue-700 hover:text-white py-2.5 px-6 text-white text-md"
              >
                Contact Us
              </a>
            </li>
          </ul>
        
            
          <CiMenuBurger
              onClick={() => {
                sethrefggle(!hrefggle);
              }}
              className="lg:hidden block   text-white font-bold text-lg"
            />
        

          {/* responsive */}

          <ul
            className={`lg:hidden w-3/5 h-screen fixed top-0 bg-slate-400  text-white    
          ${hrefggle ? "right-[0]" : "right-[-100%]"}
          `}
          >
            
            <IoMdClose
              onClick={() => {
                sethrefggle(!hrefggle);
              }}
              className="lg:hidden block text-white  font-bold text-lg " 
            />
            <li className="p-5 ">
              <a
                href="#"
                className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
              >
                Home
              </a>
            </li>
            <li className="p-5">
              <a
                href="#about"
                className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
              >
                About Us
              </a>
            </li>
            <li className="p-5">
              <a
                href="#projects"
                className="hover:bg-blue-800 hover:text-white py-2.5 px-6"
              >
                Project
              </a>
            </li>
          

        
            <li className="p-5">
              <a
                href="#contact"
                className="hover:bg-blue-700 hover:text-white py-2.5 px-6"
              >
                Contact Us
              </a>
            </li>
          </ul>
          
        </div>
      </div>

    
          
     
    </>
  );
}
