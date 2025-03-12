import { motion } from "motion/react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import ProjectStatus from "./ProjectStatus";
import { toast } from "react-toastify";
import ProjectImage from "./ProjectImage";
import { useState } from "react";
import ProjectTechstack from "./ProjectTechStack";
import { toastStyles } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { editProject } from "./projectSlice";

function ProjectModal({ project, setEdit }) {
  const {
    name,
    description,
    repoLink,
    projectLink,
    images,
    techstack,
  } = project || {};
  const [image, setImages] = useState(images)
  const [skills, setSkills] = useState(techstack)
  const { handleSubmit, register,formState } = useForm({
    defaultValues: {
      name: name || "",
      description: description || "",
      link: projectLink || "",
      repo: repoLink || "",
    },
  });
  const {errors}=formState;
  const dispatch = useDispatch();
  let formData = {};
  console.log(image);

  async function onSubmit(data) {
    try {
      console.log("Images are : ", images) ; 
      formData = { ...data, images: image, techstack: skills }
      console.log("Edited Form data is : ",formData) 
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/project/update/${project._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const resData = await res.json();
      if (!res.ok) {
        toast.error(resData.message, toastStyles)
        return;
      }
      console.log("Edited project data is : ", resData);
      toast.success("Saved", toastStyles);
      dispatch(editProject(resData));
      setEdit(() => false)
    }
    catch (error) {
      toast.error(error.message, toastStyles);
      console.log(error);
    }
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
            <div>
            <input
              id="name"
              type="text"
              {...register("name",{
                maxLength:{value:20,message:"Max Length should be 20"}
              })}
              className="border-1 border-indie-300 rounded-md h-10 px-2 focus:outline-none"
            />
            {errors?.name?.message&&<p className="text-red-500">{errors.name.message}</p>}
            </div>
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
            <ProjectStatus register={register} errors={errors}/>
            <label className="text-lg">Project Images:</label>
            <ProjectImage images={image} setImages={setImages} modal={true} />
            <label className="text-lg">Project TechStack:</label>
            <ProjectTechstack skills={skills} setSkills={setSkills} />
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
