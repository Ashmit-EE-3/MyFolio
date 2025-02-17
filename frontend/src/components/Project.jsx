import { useState } from "react";
import ProjectIcons from "./ProjectIcons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProject, addTechstack } from "../features/project/projectSlice";
function Project() {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit } = useForm();
  const [skills, setSkills] = useState([]);
  const dispatch=useDispatch();
  function onSubmit(data) {
    console.log(data);
    setShowForm(false);
    dispatch(addProject(data));
    dispatch(addTechstack(skills));
  }
  return (
    <>
      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-indie-700 p-4 rounded-2xl flex flex-col gap-4 w-[50vw]">
            <div className="w-full justify-center">
              <input
                type="text"
                placeholder="Project Name"
                {...register("name")}
                className="p-4 border-[1px] rounded-lg h-12 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"
              />
            </div>
            <div className="w-full justify-center">
              <textarea
                type="text"
                placeholder="Project Description"
                className="h-24 p-4 border-[1px] rounded-lg placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-400 focus:ring-offset-1"
                {...register("description")}
              />
            </div>
            <ProjectIcons register={register} skills={skills} setSkills={setSkills}/>
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
    </>
  );
}
export default Project;
