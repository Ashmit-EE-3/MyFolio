import { LuFlagTriangleRight } from "react-icons/lu";
import { FaLink } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { RiToolsFill } from "react-icons/ri";

function ProjectIcons() {
  return (
    <div className="flex gap-6">
      <FaLink size={28} className="cursor-pointer hover:bg-indie-400 hover:rounded-full p-1 transition duration-200"/>
      <FaGithub size={30} className="cursor-pointer hover:bg-indie-400 hover:rounded-full p-1 transition duration-200"/>
      <LuFlagTriangleRight size={30} className="cursor-pointer hover:bg-indie-400 hover:rounded-full p-1 transition duration-200"/>
      <FaImage size={30} className="cursor-pointer hover:bg-indie-400 hover:rounded-full p-1 transition duration-200"/>
      <RiToolsFill size={30} className="cursor-pointer hover:bg-indie-400 hover:rounded-full p-1 transition duration-200"/>
      <PiCertificateFill size={30} className="cursor-pointer hover:bg-indie-400 hover:rounded-full p-1 transition duration-200"/>

    </div>
  );
}

export default ProjectIcons;
