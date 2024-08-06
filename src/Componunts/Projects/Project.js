import React from "react";
import ProjectData from "./ProjectData";

export default function Project() {
  return (
    <>
    <section style={{backgroundImage:'url("Images/background2.jpg")'}}  className='h-screen bg-cover   bg-center  object-fit flex  flex-col justify-center gap-10' id="projects">
      <h5 className="text-center font-bold text-2xl text-amber-800 pt-4">Projects</h5>
      <div className="w-5/6 mx-auto flex flex-col gap-5 ">
        {ProjectData.map((curElem) => {
          return (
            <>
              <div className="flex h-40 justify-around items-center  bg-slate-500 flex-wrap gap-4 ">
                <img src={curElem.img} alt="" className="h-24 " />
                <h6 className="text-sm md:text-lg text-blue-950  font-bold ">{curElem.name}</h6>
                <a href={curElem.demo} className= "text-sm md:text-lg text-blue-900 bg-black py-2 px-4 font-bold  hover:text-white ">
               
                  Demo
                </a>
              </div>
            </>
          );
        })}
      </div>
      </section>
    </>
  );
}

