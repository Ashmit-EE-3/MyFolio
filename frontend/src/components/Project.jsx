import { useState } from "react";
import ProjectIcons from "./ProjectIcons";
function Project() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-indie-700 p-4 rounded-2xl flex flex-col gap-4 w-[50vw]">
      {showForm && (
        <>
          <form className="w-full justify-center">
            <input type="text" placeholder="Project Name" className="p-4 border-[1px] rounded-lg h-12 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"/>
          </form>
          <form className="w-full justify-center">
            <textarea type="text" placeholder="Project Description" className="h-24 p-4 border-[1px] rounded-lg placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-400 focus:ring-offset-1"/>
          </form>
          <ProjectIcons />
        </>
      )}
      <button className="bg-veronica-700 text-indie-600 p-3 rounded-lg m-auto w-[48vw] tracking-wide font-semibold cursor-pointer hover:bg-veronica-800 transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 group" onClick={() => setShowForm(!showForm)}>
        <span className="mr-2 transition-transform duration-500 delay-200 group-hover:rotate-90 inline-block">
          +
        </span>
        ADD PROJECT
      </button>
    </div>
  );
}
export default Project;
