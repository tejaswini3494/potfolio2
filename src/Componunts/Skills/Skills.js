import React from "react";
import { SKILLS } from "./SkillsData";

export default function Skills() {
   
  
  return (
    
    <>
    <div className=" flex flex-col">
   <h4 className="text-blue-950 font-bold text-xl py-2 text-center ">Skills</h4>
    <div className=" flex  flex-col  gap-3   items-center md:flex-row md:justify-center" >
      {SKILLS.map((currEle) => {
        return (
          <>
            <div  style={{backgroundImage:'url("Images/background1.jpg")'}} className=' bg-cover  bg-center   bg-slate-300 p-4 h-72  flex flex-col items-center w-full md:w-64 lg:w-96  mx-auto'>
              <h3 className="text-md font-serif  font-bold ">{currEle.title}</h3>

              {currEle.skills.map((item) => {
                return (
                  <>
                    <div className="flex gap-1 flex-col items-center justify-center">
                      <p className=" text-md font-mono mt-2 text-gray-800  font-bold">{item.skill}</p>
                      <p className="text-md font-mono text-gray-400 font-bold"> {item.score}</p>
                     
                    </div>
                  </>
                );
              })}
            </div>
          </>
        );
      })}
      </div>
      </div>
    </>
  );
}
