import { useState } from "react";
import ProjectIcons from "./ProjectIcons";
// import { useDispatch } from "react-redux";
// import { addProjectlink } from "../features/socials/socialSlice";
// import Confetti from "react-confetti";
// import { MdDelete } from "react-icons/md";
function Project() {
  const [showForm, setShowForm] = useState(false);
  // const [addProject, setAddProject] = useState(false);
  // const [url, setUrl] = useState("");
  // const [confetti, setConfetti] = useState(false);

  // const dispatch = useDispatch();

  // function handleProjectSubmit(e) {
  //   e.preventDefault();
  //   dispatch(addProjectlink(url));
  //   // setAddProject(false);
  // }
  // function handleRepoSubmit(e) {
  //   e.preventDefault();
  //   dispatch(addProjectlink(url));
  //   // setAddProject(false);
  // }

  // function handleProject(e) {
  //   setUrl(e.target.value);
  // }
  // function handleRepo(e) {
  //   setUrl(e.target.value);
  // }

  // async function handleConfetti() {
  //   setConfetti(true);
  //   await new Promise((resolve) => setTimeout(resolve, 3500));
  //   setConfetti(false);
  // }

  return (
    <div className="bg-indie-700 p-4 rounded-2xl flex flex-col gap-4 w-[50vw]">
      {showForm && (
        <>
          <form className="w-full justify-center">
            <input type="text" placeholder="Project Name" className="p-4 border-[1px] rounded-lg h-12 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"/>
          </form>
          <form className="w-full justify-center">
            <textarea type="text" placeholder="Project Description" className="h-24 p-4 border-[1px] rounded-lg placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"/>
          </form>
          <ProjectIcons />
        </>
      )}
      <button className="bg-veronica-700 text-indie-600 p-3 rounded-lg m-auto w-[48vw] tracking-wide font-semibold cursor-pointer   hover:bg-veronica-800 transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 group" onClick={() => setShowForm(!showForm)}>
        <span className="mr-2 transition-transform duration-500 delay-200 group-hover:rotate-90 inline-block">
          +
        </span>
        ADD PROJECT
      </button>
    </div>
  );
}
export default Project;

// {addProject ? (
//   <div className="bg-indie-700 p-4 w-[50vw] rounded-2xl flex flex-col gap-4">
//     <form
//       className="w-full justify-center"
//       onSubmit={handleProjectSubmit}
//     >
//       <div className="flex gap-4">
//         <input
//           value={url}
//           type="url"
//           className="p-4 border-[1px] rounded-lg h-12 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"
//           onChange={handleProject}
//           placeholder="Project  Link"
//         />
//         <span
//           className="cursor-pointer rounded-full hover:bg-indie-400 p-2"
//           onClick={() => setAddProject(false)}
//         >
//           <MdDelete size={28} />
//         </span>
//       </div>
//     </form>
//     <form
//       className="w-full justify-center"
//       onSubmit={handleRepoSubmit}
//     >
//       <div className="flex gap-4">
//         <input
//           value={url}
//           type="url"
//           className="p-4 border-[1px] rounded-lg h-12 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"
//           onChange={handleRepo}
//           placeholder="Github Repo Link"
//         />
//         <span
//           className="cursor-pointer rounded-full hover:bg-indie-400 p-2"
//           onClick={() => setAddProject(false)}
//         >
//           <MdDelete size={28} />
//         </span>
//       </div>
//     </form>
//     <button
//       className="bg-veronica-700 text-indie-600 p-3 rounded-lg mx-auto w-[48vw] tracking-wide font-semibold cursor-pointer
//   hover:bg-veronica-800 transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 group"
//       onClick={async (e) => {
//         e.preventDefault();
//         await handleConfetti();
//         handleProjectSubmit(e);
//       }}
//     >
//       <span className="mr-2 transition-transform duration-500 delay-200 group-hover:rotate-90 inline-block">
//         +
//       </span>
//       ADD PROJECT
//     </button>
//     {confetti && <Confetti key={confetti} />}
//   </div>
// ) : (
//   <button
//     className="bg-veronica-700 text-indie-600 p-3 rounded-lg m-auto w-[48vw] tracking-wide font-semibold cursor-pointer
//   hover:bg-veronica-800 transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 group"
//     onClick={() => setAddProject(true)}
//   >
//     <span className="mr-2 transition-transform duration-500 delay-200 group-hover:rotate-90 inline-block">
//       +
//     </span>
//     ADD PROJECT
//   </button>
// )}
// {/** Add Project details component here */}
