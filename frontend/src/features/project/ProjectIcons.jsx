/* eslint-disable react/prop-types */
import { LuFlagTriangleRight } from "react-icons/lu";
import { FaFileImage, FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import ProjectTechstack from "./ProjectTechStack";
import ProjectImage from "./ProjectImage";
import ProjectStatus from "./ProjectStatus";

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
      <div className="flex lg:gap-6 sm:gap-2.5 items-center flex-wrap w-fit">
        <span className="relative group">
          <div className="absolute -top-10 left-1/2 bg-black text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Project Link
          </div>
          <FaLink
            className={`cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group h-8 w-8 md:h-10 md:w-10 ${
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
            className={`cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group h-8 w-8 md:h-10 md:w-10  ${
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
            className={`cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group h-8 w-8 md:h-10 md:w-10  ${
              selected.status ? "bg-indie-400" : ""
            }`}
            onClick={() => handleSelect("status")}
          />
        </span>
        <span className="relative group">
          <div className="absolute -top-10 left-1/2 bg-black text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Add Images
          </div>
          <FaFileImage
            className={`cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group h-8 w-9 md:h-10 md:w-11  ${
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
            className={`cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group h-8 w-8 md:h-10 md:w-10  ${
              selected.tools ? "bg-indie-400" : ""
            }`}
            onClick={() => handleSelect("tools")}
          />
        </span>
        <span className="relative group hidden md:block">
          <div className="absolute -top-10 left-1/2 bg-black text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Reset
          </div>
          <button
            type="reset"
            className="cursor-pointer hover:bg-indie-400 rounded-full p-2 transition duration-200 group"
          >
            <span>
              <MdDelete className="md:h-6 md:w-6 h-3 w-3"/>
            </span>
          </button>
        </span>
      </div>
      <div>
        {selected.link && (
          <div className="flex md:gap-4 gap-2 flex-col">
            <div className="border-t-2 border-indie-300/30"></div>
            <div className="flex gap-2 w-full">
              <input
                type="url"
                placeholder="Enter your Project Link 🔥 "
                className="w-full border-1 placeholder:opacity-30 border-indie-500 p-2 rounded-md
                focus:outline-none text-[10px] placeholder:text-[10px] md:text-sm lg:text-[16px] md:placeholder:text-[16px]"
                {...register("projectLink")}
              />
            </div>
          </div>
        )}
        {selected.repo && (
          <div className="flex md:gap-4 gap-2 flex-col">
            <div className="border-t-2 border-indie-300/30"></div>
            <div className="flex gap-2 w-full">
              <input
                type="url"
                placeholder="Enter your Github Repository Link 🔑 "
                className="w-full border-1 placeholder:opacity-30 border-indie-500 p-2 rounded-md
                focus:outline-none text-[10px] placeholder:text-[10px] md:text-sm lg:text-[16px] md:placeholder:text-[16px]"
                {...register("repoLink")}
              />
            </div>
          </div>
        )}
        {selected.status && (
          <ProjectStatus register={register}/>
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
