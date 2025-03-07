import { motion } from "motion/react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import ProjectStatus from "./ProjectStatus";
import { Slide, toast } from "react-toastify";
import ProjectImage from "./ProjectImage";
import { useState } from "react";
import ProjectTechstack from "./ProjectTechStack";

function ProjectModal({ project, setEdit }) {
  const {
    name,
    description,
    repoLink,
    projectLink,
    images,
    techstack,
  } = project || {};
  const [image,setImages]=useState(images)
  const [skills,setSkills]=useState(techstack)
  const { handleSubmit, register } = useForm({
    defaultValues: {
      name: name || "",
      description: description || "",
      link: projectLink || "",
      repo: repoLink || "",
    },
  });
  let formData = {};
  console.log(image);
  
  function onSubmit(data) {
    console.log(data);
    toast.success("Saved", {
      position: "top-center",
      autoClose: 1000,
      transition: Slide,
      style: {
        zIndex: 9999, 
        width: "auto",
        whiteSpace: "nowrap",
        padding: "12px 20px",
        fontFamily: "Poppins",
      },
    });
    formData={...data,images:images,techstack:skills}
    console.log(formData);
    setEdit(()=>false)
    // Yaha dispatch karke jaise connect karega kardena and remove this comment
  }
  return createPortal(
    <motion.div className="fixed z-21 inset-0 backdrop-blur-[4px] flex items-center justify-center">
      <motion.div
        className="text-indie-100 p-4 flex flex-col gap-4 w-[70%] bg-indie-800 rounded-lg overflow-y-scroll no-scrollbar h-screen font-poppins"
        initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
        animate={{ clipPath: "circle(100% at 50% 50%)", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex justify-end w-[90%]">
          <span
            className="bg-indie-500 rounded-full p-1 cursor-pointer hover:bg-indie-400 transition duration-75"
            onClick={() => setEdit(false)}
          >
            <RxCross2 />
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid grid-cols-[0.3fr_0.6fr] gap-6">
            <label htmlFor="name" className="text-lg">
              Project Name:
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="border-1 border-indie-300 rounded-md h-10 px-2 focus:outline-none"
            />
            <label htmlFor="description" className="text-lg">
              Project Description:
            </label>
            <textarea
              id="description"
              type="text"
              {...register("description")}
              className="border-1 border-indie-300 rounded-md h-25 px-2 focus:outline-none"
            />
            <label htmlFor="link" className="text-lg">
              Project Link:
            </label>
            <input
              id="link"
              type="url"
              {...register("link")}
              className="border-1 border-indie-300 rounded-md h-10 px-2 focus:outline-none"
            />
            <label htmlFor="repo" className="text-lg">
              Repository Link:
            </label>
            <input
              id="repo"
              type="url"
              {...register("repo")}
              className="border-1 border-indie-300 rounded-md h-10 px-2 focus:outline-none"
            />
            <label htmlFor="status" className="text-lg">
              Project Status:
            </label>
            <ProjectStatus register={register} />
            <label className="text-lg">Project Images:</label>
            <ProjectImage images={image} setImages={setImages} modal={true}/>
            <label className="text-lg">Project TechStack:</label>
            <ProjectTechstack skills={skills} setSkills={setSkills}/>
          </div>
          <div className="flex gap-4 justify-end w-[90%]">
            <button
              type="reset"
              className="p-2 rounded-sm border-1 border-indie-400 cursor-pointer hover:bg-indie-400"
            >
              RESET
            </button>
            <button
              type="submit"
              className="p-2 rounded-sm border-1 border-indie-400 cursor-pointer bg-veronica-800 hover:bg-veronica-900"
            >
              SAVE
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>,
    document.getElementById("root")
  );
}

export default ProjectModal;
