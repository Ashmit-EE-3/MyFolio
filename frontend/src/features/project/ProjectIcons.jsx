/* eslint-disable react/prop-types */
import { LuFlagTriangleRight } from "react-icons/lu";
import { FaLink } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import ProjectTechstack from "./ProjectTechStack";
import ProjectImage from "./ProjectImage";
import { IoImage } from "react-icons/io5";

function ProjectIcons({ register, skills, setSkills, images, setImages }) {
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
    <div className="w-full space-y-4">
      <div className="flex gap-6">
        <span className="relative group">
          <div className="absolute -top-10 left-1/2 bg-black text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Project Link
          </div>
          <FaLink
            size={38}
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
            size={39}
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
          <IoImage
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
        <span className="relative group">
          <div className="absolute -top-10 left-1/2 bg-black text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Reset
          </div>
          <button
            type="reset"
            className="cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group
             "
          >
            <span>
              <MdDelete size={23} />
            </span>
          </button>
        </span>
      </div>
      <div>
        {selected.link && (
          <div className="flex gap-4 flex-col">
            <div className="border-t-2 border-indie-300/30"></div>
            <div className="flex gap-2 w-full">
              <input
                type="url"
                placeholder="Enter your Project Link 🔥 "
                className="w-full border-1 placeholder:opacity-30 border-indie-500 p-2 rounded-md
                focus:outline-none"
                {...register("projectLink")}
              />
            </div>
          </div>
        )}
        {selected.repo && (
          <div className="flex gap-4 flex-col">
            <div className="border-t-2 border-indie-300/30"></div>
            <div className="flex gap-2 w-full">
              <input
                type="url"
                placeholder="Enter your Github Repository Link 🔑 "
                className="w-full border-1 placeholder:opacity-30 border-indie-500 p-2 rounded-md
                focus:outline-none"
                {...register("repoLink")}
              />
            </div>
          </div>
        )}
        {selected.status && (
          <div className="flex gap-4 flex-col">
            <div className="border-t-2 border-indie-300/30"></div>
            <div className="flex gap-2 w-full">
              <label className="text-start">Project Status</label>
            </div>
            <div className="">
              <select
                name="status"
                defaultValue=""
                className="text-indie-100 rounded-lg border-2 border-indie-600 bg-indie-600
      focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent cursor-pointer
      text-start w-full px-2 h-12"
                {...register("status")}
              >
                <option value="" disabled>
                  Pick One
                </option>
                <option value="Planning">🖖 Planning...</option>
                <option value="In Progress">🔥 In Progess...</option>
                <option value="Completed">✅ Completed</option>
                <option value="Deployed">🚀 Deployed</option>
              </select>
            </div>
          </div>
        )}
        {selected.tools && (
          <ProjectTechstack skills={skills} setSkills={setSkills} />
        )}

        {selected.image && (
          <ProjectImage images={images} setImages={setImages} />
        )}
      </div>
    </div>
  );
}

export default ProjectIcons;
