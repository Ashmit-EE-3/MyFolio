import { useState } from "react";
import ProjectIcons from "../project/ProjectIcons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "./projectSlice";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { Slide, toast, ToastContainer } from "react-toastify";

function Project() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit } = useForm();
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

        const response = await fetch("https://api.cloudinary.com/v1_1/dn17alkhg/image/upload", {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error(`Cloudinary Upload Error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Cloudinary Response Data: ", data);
        return data.secure_url;
      });
  
      // Wait for all uploads to complete
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
        userId: currentUser._id 
      };

      console.log("Submitting project data: ", newObject);
  
      const res = await fetch('/api/v1/project/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newObject),
      });
  
      const resData = await res.json();
      console.log("Res Data is : ",resData) ; 
      if (resData.success === false) {
        toast.error(resData.message, { position: 'top-center', autoClose: 1000, transition: Slide });
        return;
      }
  
      toast.success("Project added successfully!", { position: 'top-center', autoClose: 1000, transition: Slide });
  
      dispatch(addProject(newObject));
      handleConfetti();
    } catch (error) {
      console.error("Error submitting project:", error);
      toast.error(error.message, { position: 'top-center', autoClose: 1000, transition: Slide });
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
        <div className="bg-indie-700 rounded-2xl">
          <button onClick={() => setShowForm(false)} className="w-6 h-6 rounded-full
        float-right mx-2 my-1 cursor-pointer"><span><IoIosArrowDropdownCircle size={24} /></span></button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" p-4 flex flex-col gap-4 w-[50vw]">
              <div className="w-full justify-center">
                <input
                  type="text"
                  required
                  placeholder="Project Name"
                  {...register("name", { required: true })}
                  className="p-4 border-[1px] rounded-lg h-12 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"
                />
              </div>
              <div className="w-full justify-center">
                <textarea
                  type="text"
                  placeholder="Project Description"
                  required
                  className="h-24 p-4 border-[1px] rounded-lg placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-400 focus:ring-offset-1"
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
            <button
              className="bg-veronica-700 text-indie-600 p-3 rounded-lg mx-auto my-4  w-[48vw] tracking-wide font-semibold cursor-pointer hover:bg-veronica-800 transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 group flex justify-center gap-2"
              type="submit"
            >
              <span className="transition-transform duration-500 delay-200 group-hover:rotate-90 inline-block">
                +
              </span>
              <h1>ADD PROJECT</h1>
            </button>
          </form>
        </div>
      )}
      {!showForm && (
        <button
          className="bg-veronica-700 text-indie-600 p-3 rounded-lg w-[48vw] tracking-wide font-semibold cursor-pointer hover:bg-veronica-800 transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 group flex justify-center gap-2"
          onClick={() => setShowForm(!showForm)}
        >
          <ToastContainer limit={2} hideProgressBar />
          <span className="transition-transform duration-500 delay-200 group-hover:rotate-90 inline-block">
            +
          </span>
          <h1>ADD PROJECT</h1>
        </button>
      )}
      {confetti && <Confetti width={width} height={height} />}
    </>
  );
}
export default Project;
