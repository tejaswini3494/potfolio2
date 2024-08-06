import React, { useState } from "react";
import Skills from "./Skills/Skills";
import ic from "./Image/arrow-dropdown.svg";

export default function About() {
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <section className="bg-slate-400 " id="about">
        <h5 className="text-2xl font-bold text-amber-800 py-5 text-center">About Us</h5>
        <div className="flex flex-col justify-center w-5/6 mx-auto gap-5 ">
          <div className="flex-1  flex flex-col gap-3 items-center">
            <h2 className=" text-xl text-blue-950 font-bold sm:text-2xl font-serif">
              I am Tejaswini Virshaiv &{" "}
            </h2>
            <h2 className="text-xl text-amber-800 font-bold sm:text-2xl font-serif">
              {" "}
              I am Frontend Developer{" "}
            </h2>
            <p className="text-sm font-mono  text-gray-800 font-bold ">
              I am skilled at Frontend technology like HTML, CSS, JavaScript and
              React their use to built, design and improve responsive website
              and web application .
            </p>
            {/* 
            <button className=" bg-blue-950 text-amber-800 font-semibold text-sm py-2 px-5 ">More About Me</button> */}
            <img
              src={ic}
              className="h-8 text-center cursur-pointer "
              onClick={() => {
                settoggle(!toggle);
              }}
            />
          </div>
          </div>

          <div
            className={`flex flex-col  w-5/6 mx-auto 
          ${toggle ? "flex" : "hidden"}
          `}
          >
            <div className=" flex flex-col gap-1 mt-3 items-center ">
              <h4 className="text-blue-950 font-bold text-xl ">Education</h4>
              <p className="text-sm font-bold">2021-2024</p>
              <p className="text-sm font-bold">
                Bachelor of Computer Application
              </p>
              <p className="text-sm font-bold">CGPA :8.89</p>
            </div>


            
              
              <Skills />
            
          
        </div>
      </section>
    </>
  );
}
