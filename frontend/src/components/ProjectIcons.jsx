import { LuFlagTriangleRight } from "react-icons/lu";
import { FaLink } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { useState } from "react";
import ImageUpload from "./ImageUpload";
import Techstack from "./Techstack";

function ProjectIcons() {
  const [selected, setSelected] = useState({
    link: false,
    repo: false,
    status: false,
    image: false,
    tools: false,
    certificate: false,
  });

  function handleSelect(icon) {
    setSelected((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (key === icon) newState[key] = !prev[key];
        else newState[key] = false;
      });
      return newState;
    });
  }

  return (
    <>
      <div className="flex gap-6">
        <span className="relative group">
          <div className="absolute -top-10 left-1/2 bg-black text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Project Link
          </div>
          <FaLink
            size={40}
            className={`cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group ${
              selected.link ? "bg-indie-400" : ""
            }`}
            onClick={() => handleSelect("link")}
          />
        </span>
        <span className="relative group">
          <div className="absolute -top-10 left-1/2 bg-black text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Repository Link
          </div>
          <FaGithub
            size={40}
            className={`cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group ${
              selected.repo ? "bg-indie-400" : ""
            }`}
            onClick={() => handleSelect("repo")}
          />
        </span>
        <span className="relative group">
          <div className="absolute -top-10 left-1/2 bg-black text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Project Status
          </div>
          <LuFlagTriangleRight
            size={40}
            className={`cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group ${
              selected.status ? "bg-indie-400" : ""
            }`}
            onClick={() => handleSelect("status")}
          />
        </span>
        <span className="relative group">
          <div className="absolute -top-10 left-1/2 bg-black text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Add Images
          </div>
          <CiImageOn
            size={40}
            className={`cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group ${
              selected.image ? "bg-indie-400" : ""
            }`}
            onClick={() => handleSelect("image")}
          />
        </span>
        <span className="relative group">
          <div className="absolute -top-10 left-1/2 bg-black text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Add Tools
          </div>
          <RiToolsFill
            size={40}
            className={`cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group ${
              selected.tools ? "bg-indie-400" : ""
            }`}
            onClick={() => handleSelect("tools")}
          />
        </span>
      </div>
      {selected.link && (
        <form className="flex gap-2 border-t-1 border-indie-400">
          <input
            type="url"
            placeholder="Enter your Project Link 🔥 "
            className="w-full border-2 border-indie-500 p-2 rounded-lg
        focus:outline-none focus:ring focus:ring-offset-1 focus:ring-indie-400 mt-4"
          />
          <button
            className="bg-veronica-700 px-4 rounded-full text-indie-700 cursor-pointer hover:bg-veronica-800 focus:outline-none
        focus:ring focus:ring-offset-1 focus:ring-indie-400 mt-4"
          >
            +
          </button>
        </form>
      )}
      {selected.repo && (
        <form className="flex gap-2 border-t-1 border-indie-400">
          <input
            type="url"
            placeholder="Enter your Github Repository Link 🔑 "
            className="w-full border-2 border-indie-500 p-2 rounded-lg
        focus:outline-none focus:ring focus:ring-offset-1 focus:ring-indie-400 mt-4"
          />
          <button
            className="bg-veronica-700 px-4 mt-4 rounded-full text-indie-700 cursor-pointer hover:bg-veronica-800 focus:outline-none
        focus:ring focus:ring-offset-1 focus:ring-indie-400"
          >
            +
          </button>
        </form>
      )}
      {selected.status && (
        <div className="flex flex-col gap-2 border-t-1 border-indie-400 border-b-1">
          <label className="text-start mt-4 mb-1">Project Status</label>
          <select
            name="status"
            defaultValue=""
            className="text-indie-100 rounded-lg border-2 border-indie-600 bg-indie-600
      focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent cursor-pointer
      mb-4 text-start py-2 px-4 w-[98%]"
          >
            <option value="" disabled>
              Pick One
            </option>
            <option value="Planning">🖖 Planning...</option>
            <option value="InProgess">🔥 In Progess...</option>
            <option value="Completed">✅ Completed</option>
            <option value="Deployed">🚀 Deployed</option>
          </select>
        </div>
      )}
      {selected.tools && (
        <Techstack/>
      )}
      
      {selected.image && <ImageUpload />}
    </>
  );
}

export default ProjectIcons;
