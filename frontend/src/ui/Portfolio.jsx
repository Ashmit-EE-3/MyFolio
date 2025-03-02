import { GiGraduateCap } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Portfolio() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      <div className="text-indie-400 col-span-4 bg-indie-300 overflow-y-scroll lg:py-20 md:py-10 py-8 lg:px-14 md:px-10 px-2 flex flex-col lg:gap-6 md:gap-4 gap-2 ">
        <img src={userData.photoURL} alt="profile" className="rounded-full lg:h-40 lg:w-40 md:h-30 md:w-30 w-15 h-15"/>
        <h1 className="font-bold md:font-extrabold md:tracking-wide lg:text-4xl md:text-2xl text-lg">{userData.displayName}</h1>
        <div className=" flex flex-col gap-2 justify-start">
          <p className="flex items-center capitalize md:gap-2 md:text-xl text-xs gap-1 font-semibold"><span><FaLocationDot color="#282A36"/></span>{userData.location}</p>
          <p className="flex items-center capitalize md:gap-2 md:text-xl text-xs gap-1 font-semibold"><span><GiGraduateCap color="#282A36"/></span>{userData.college}</p>
        </div>
        <p className="italic md:text-lg text-xs">{userData.about}</p>
      </div>
      <div className="col-span-8 bg-veronica-700 overflow-y-scroll"></div>
    </div>
  )
}

export default Portfolio
