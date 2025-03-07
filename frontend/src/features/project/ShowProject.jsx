/* eslint-disable react/prop-types */
import { RxDragHandleDots2 } from "react-icons/rx";
import { GoProjectRoadmap } from "react-icons/go";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, updateProject } from "./projectSlice";
import { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import { motion } from "motion/react";
import { projectIcons } from "../../utils/helper";
import ProjectModal from "./ProjectModal"

const obj = projectIcons;

function ShowProject() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.project);
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    setProjectList(projects);
  }, [projects]);

  const [showMenu,setShowMenu]=useState(null)
  const [edit,setEdit]=useState(false)
  async function deleteProj(id) {
    try {
      const res = await fetch(`/api/v1/project/delete/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message, {
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

      toast.success("Project deleted!", {
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
      setProjectList((prevList) =>
        prevList.filter((project) => project._id !== id)
      );
      dispatch(deleteProject(id));
    } catch (error) {
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
  }
  function handleMenu(index){
    setShowMenu((prev)=>prev===index?null:index)
  }
  function handleDND(result) {
    const { source, destination, type } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    if (type === "group") {
      const reorder = [...projectList];
      const [removedProject] = reorder.splice(source.index, 1);
      reorder.splice(destination.index, 0, removedProject);
      setProjectList(reorder);
      dispatch(updateProject(reorder));
    }
  }

  return (
    <DragDropContext onDragEnd={handleDND}>
      {projectList && (
        <div className="w-[98%] xl:w-[50vw] mx-auto text-[10px] md:text-sm lg:text-[16px]">
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <div
                className="flex flex-col md:gap-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {projectList.map(
                  (project, index) =>
                    project.name !== "" && (
                      <Draggable
                        key={index}
                        draggableId={index.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="grid grid-cols-12 bg-indie-700 items-center rounded-md md:p-4 p-2 cursor-pointer gap-6"
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            onClick={()=>setShowMenu(false)}
                          >
                            <div
                              className="col-span-1 cursor-pointer"
                              {...provided.dragHandleProps}
                            >
                              <RxDragHandleDots2 className="h-5 w-5 md:h-8 md:w-8" />
                            </div>
                            <motion.div
                              className="text-indie-100 text-start flex flex-col gap-2 col-span-11 justify-center"
                              initial={{ opacity: 0, y: 100 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 10,
                                duration: 1,
                              }}
                            >
                              <div className="flex sm:max-w-full sm:gap-0 max-w-fit justify-between relative">
                                <h1 className="flex items-center gap-2">
                                  <span>
                                    <GoProjectRoadmap className="h-4 w-4 md:h-8 md:w-8" />
                                  </span>
                                  <p className="lg:text-2xl md:text-xl text-sm">
                                    {project.name}
                                  </p>
                                  {project.status && (
                                    <div className="bg-indie-300 text-indie-500 rounded-md px-1 w-fit hidden sm:block whitespace-nowrap">
                                      <span>{obj[project.status]}</span>
                                      {project.status}
                                    </div>
                                  )}
                                </h1>
                                <div onClick={(e)=>e.stopPropagation()}><button className="cursor-pointer" onClick={()=>handleMenu(index)}><HiOutlineDotsVertical className="h-5 w-5 md:h-8 md:w-8"/></button></div>
                                {(showMenu===index)&&<div className="bg-indie-700 rounded-sm absolute right-5 top-5">
                                    <button className="flex gap-2 items-center justify-center hover:bg-indie-400 p-2 rounded-md w-full cursor-pointer" onClick={()=>setEdit(true)}><span><MdModeEditOutline/></span>Edit</button>
                                    <button className="flex gap-2 items-center justify-center hover:bg-indie-400 p-2 rounded-md w-full cursor-pointer" onClick={() => deleteProj(project._id)}><span><MdDeleteForever/></span>Delete</button>
                                  </div>}
                                  {edit&&<ProjectModal/>}
                              </div>
                              <p>
                                <span> ➡ </span>
                                {project.description}
                              </p>
                            </motion.div>
                          </div>
                        )}
                      </Draggable>
                    )
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </DragDropContext>
  );
}

export default ShowProject;
