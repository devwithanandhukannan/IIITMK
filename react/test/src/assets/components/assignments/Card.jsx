import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FcLike } from "react-icons/fc";

const Card = ({ isDark, title, desc }) => {
  const [like, setLike] = useState(0)
  const [dark, setDark]= useState(isDark)
  useEffect(()=>{
    setDark(isDark)
  },[isDark])
  return (
    <div
      className={`
        w-[20vw] p-5 m-5 rounded-lg 
        ${dark ? "bg-gray-900 text-white" : "bg-gray-200 text-black"} 
        transform transition duration-450 ease-out 
        hover:scale-110 hover:shadow-lg 
        animate-fadeIn
        cursor-pointer
      `}
    >
      <button onClick={()=>setDark(!dark)} className=' mb-5 p-3 rounded-full'>{dark ? <CiLight/>:<MdDarkMode/>}</button>
      <h1 className="text-3xl">{title}</h1>
      <p className="text-zinc-500">{desc}</p>
      <div className="mt-10 flex">
        <FcLike onClick={()=>{setLike(like+1)}} size={22} className="
        transform transition duration-350 ease-out 
        hover:scale-150 hover: 
        animate-fadeIn
        cursor-pointer
        ml-1 mr-1 " />{like}
      </div>
    </div>
  );
};

export default Card;
