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
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });
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
  };

  async function handleConfetti() {
    setConfetti(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    setConfetti(false);
  }

  return (
    <>
      {showForm && (
        <div className="bg-indie-700 rounded-2xl w-[50vw] p-6">
          <div className="space-y-4">
            <div className="h-4">
              <button
                onClick={() => setShowForm(false)}
                className="w-6 h-6 rounded-full
        cursor-pointer float-right"
              >
                <span>
                  <IoIosArrowDropdownCircle size={24} color="#B5BDE5" />
                </span>
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col gap-4 ">
                <div className="w-full justify-center">
                  <input
                    type="text"
                    required
                    placeholder="Project Name"
                    {...register("name", { required: true })}
                    className="p-2 border-1px rounded-md h-12 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none"
                  />
                </div>
                <div className="w-full justify-center">
                  <textarea
                    type="text"
                    placeholder="Project Description"
                    required
                    className="h-24 p-2 border-1px rounded-md placeholder:opacity-30 bg-indie-500 w-full focus:outline-none"
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
                className="bg-veronica-700 text-indie-600 w-full h-12 rounded-lg tracking-wide font-semibold cursor-pointer hover:bg-veronica-800 transition duration-200 hover:scale-[1.05] focus:outline-none flex justify-center items-center gap-2"
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
                <h1>ADD PROJECT</h1>
              </motion.button>
            </form>
          </div>
        </div>
      )}
      {!showForm && (
        <div>
          <motion.button
            className="bg-veronica-700 text-indie-600 rounded-lg w-full h-12 items-center tracking-wide font-semibold cursor-pointer hover:bg-veronica-800 focus:outline-none flex justify-center gap-2 hover:scale-[0.95] transition duration-200"
            onClick={() => setShowForm(!showForm)}
          >
            <motion.span
              animate={{ rotate: [90, 180, 270, 360] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block"
            >
              +
            </motion.span>
            <h1>ADD PROJECT</h1>
          </motion.button>
        </div>
      )}
      {confetti && <Confetti width={width} height={height} />}
    </>
  );
}
export default Project;
