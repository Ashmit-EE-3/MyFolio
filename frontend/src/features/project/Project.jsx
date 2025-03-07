import { useState } from "react";
import ProjectIcons from "../project/ProjectIcons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "./projectSlice";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { Slide, toast } from "react-toastify";
import { motion } from "motion/react";

function Project() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [showForm, setShowForm] = useState(false);
  const [isAdding, setIsAdding] = useState(false) ; 
  const { register, handleSubmit, reset,formState } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const {errors}=formState
  const [skills, setSkills] = useState([]);
  const [confetti, setConfetti] = useState(false);
  const [images, setImages] = useState([]);
  const { width, height } = useWindowSize();

  const dispatch = useDispatch();
  const convertImageURL = async (images) => {
    try {
      const upload = images.map(async (image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "tch_image_upload");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dn17alkhg/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(
            `Cloudinary Upload Error! Status: ${response.status}`
          );
        }

        const data = await response.json();
        console.log("Cloudinary Response Data: ", data);
        return data.secure_url;
      });

      const uploadedUrls = await Promise.all(upload);
      return uploadedUrls;
    } catch (error) {
      console.error("Error uploading images: ", error);
      return [];
    }
  };

  const onSubmit = async (data) => {
    setIsAdding(true);
    try {
      setShowForm(false);

      const uploadedImageURLs = await convertImageURL(images);

      const newObject = {
        ...data,
        techstack: skills,
        images: uploadedImageURLs,
        userId: currentUser._id,
      };

      console.log("Submitting project data: ", newObject);
      reset();

      const res = await fetch("/api/v1/project/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObject),
      });

      const resData = await res.json();
      console.log("Res Data is : ", resData);
      if (!res.ok) {
        toast.error(resData.message, {
          position: "top-center",
          autoClose: 1000,
          transition: Slide,
          style: {
            width: "auto",
            whiteSpace: "nowrap",
            padding: "12px 20px",
            fontFamily: "Poppins",
          },
        });
        return;
      }

      toast.success("Project added successfully!", {
        position: "top-center",
        autoClose: 1000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px",
          fontFamily: "Poppins",
        },
      });
      setSkills([]) ; 
      setImages([]) ; 
      dispatch(addProject(resData));
      handleConfetti();
    } catch (error) {
      console.error("Error submitting project:", error);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px",
          fontFamily: "Poppins",
        },
      });
    }
    setIsAdding(false);
  };

  async function handleConfetti() {
    setConfetti(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    setConfetti(false);
  }

  return (
    <>
      {showForm && (
        <div className="bg-indie-700 rounded-2xl xl:w-[50vw] lg:p-6 p-2 md:p-4 w-[98%] mx-auto text-[10px] md:text-sm lg:text-[16px]">
          <div className="lg:space-y-4 space-y-2">
            <div className="md:h-4 h-2.5">
              <button
                onClick={() => setShowForm(false)}
                className="lg:w-6 lg:h-6 md:h-5 md:w-5 h-4 w-4 rounded-full
        cursor-pointer float-right"
              >
                <span>
                  <IoIosArrowDropdownCircle className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" color="#B5BDE5" />
                </span>
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="md:space-y-4 space-y-2">
              <div className="flex flex-col lg:gap-4 gap-1.5 sm:gap-2.5">
                <div className="w-full justify-center">
                  <input
                    type="text"
                    required
                    placeholder="Project Name"
                    {...register("name", { required: true,maxLength:{value:15,message:"Max length should be 15"} })}
                    className="p-2 border-1px rounded-md md:h-12 h-8 md:text-sm lg:text-[16px] placeholder:text-[10px] md:placeholder:text-[14px] lg:placeholder:text-[16px] placeholder:opacity-30 bg-indie-500 w-full focus:outline-none"
                  />
                  {errors?.name&&<p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div className="w-full justify-center">
                  <textarea
                    type="text"
                    placeholder="Project Description"
                    required
                    className="md:h-24 h-18 md:text-sm lg:text-[16px] placeholder:text-[10px] md:placeholder:text-[16px] p-2 border-1px rounded-md placeholder:opacity-30 bg-indie-500 w-full focus:outline-none"
                    {...register("description", { required: true })}
                  />
                </div>
                <ProjectIcons
                  register={register}
                  skills={skills}
                  setSkills={setSkills}
                  images={images}
                  setImages={setImages}
                />
              </div>
              <motion.button
                className="bg-veronica-700 text-indie-600 w-full md:h-12 h-8 rounded-lg tracking-wide font-semibold cursor-pointer hover:bg-veronica-800 transition duration-200 hover:scale-[1.05] focus:outline-none flex justify-center items-center gap-2"
                type="submit"
              >
                <motion.span
                  animate={{ rotate: [90, 180, 270, 360] }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="inline-block"
                >
                  +
                </motion.span>
                <h1 className="md:text-sm lg:text-[16px] text-[10px]">ADD PROJECT</h1>
              </motion.button>
            </form>
          </div>
        </div>
      )}
      {!showForm && (
        <div>
          <motion.button
            className="bg-veronica-700 text-center text-indie-600 rounded-lg w-full mx-auto md:h-12 h-8 text-[10px] md:text-[16px] items-center tracking-wide font-semibold cursor-pointer hover:bg-veronica-800 focus:outline-none flex justify-center gap-2 hover:scale-[0.95] transition duration-200"
            onClick={() => setShowForm(!showForm)}
          >
            {isAdding ? <div className="flex items-center gap-1">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-600 border-t-transparent"></div>
            <span>Adding Project...</span>
            </div> : <div className="flex items-center gap-1">
            <motion.span
              animate={{ rotate: [90, 180, 270, 360] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block"
            >
              +
            </motion.span>
            <h1 className="text-[10px] md:text-sm lg:text-[16px]">ADD PROJECT</h1>
            </div>}
          </motion.button>
        </div>
      )}
      {confetti && <Confetti width={width} height={height} />}
    </>
  );
}
export default Project;
