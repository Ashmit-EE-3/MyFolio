import { useState } from "react";
import ProjectIcons from "../project/ProjectIcons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProject } from "./projectSlice";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function Project() {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit } = useForm();
  const [skills, setSkills] = useState([]);
  const [confetti, setConfetti] = useState(false);
  const [images, setImages] = useState([]);
  const { width, height } = useWindowSize();

  const dispatch = useDispatch();
  function onSubmit(data) {
    console.log(data);
    setShowForm(false);
    const newObject = { ...data, techstack: skills, images: images };
    dispatch(addProject(newObject));
    handleConfetti();
  }
  async function handleConfetti() {
    setConfetti(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    setConfetti(false);
  }

  return (
    <>
      {showForm && (
        <div className="bg-indie-700 rounded-2xl">
        <button onClick={()=>setShowForm(false)} className="w-6 h-6 rounded-full
        float-right mx-2 my-1 cursor-pointer"><span><IoIosArrowDropdownCircle size={24}/></span></button>
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
          className="bg-veronica-700 text-indie-600 p-3 rounded-lg m-auto w-[48vw] tracking-wide font-semibold cursor-pointer hover:bg-veronica-800 transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 group flex justify-center gap-2"
          onClick={() => setShowForm(!showForm)}
        >
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
