/* eslint-disable react/prop-types */
import { RxDragHandleDots2 } from "react-icons/rx";
import { GoProjectRoadmap } from "react-icons/go";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, updateProject } from "./projectSlice";
import { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import { motion } from "motion/react";

const obj = {
  "Planning": "🖖",
  "In Progress": "🔥",
  "Completed": "✅",
  "Deployed": "🚀",
};

function ShowProject() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.project);
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    setProjectList(projects);
  }, [projects]);


  async function deleteProj(id) {
    try {
      const res = await fetch(`/api/v1/project/delete/${id}`, {
        method: "DELETE"
      })

      const data = await res.json() ; 

      if (!res.ok){
        toast.error(data.message, {
          position: 'top-center',
          autoClose: 1000,
          transition: Slide,
          style: {
            width: "auto",
            whiteSpace: "nowrap",
            padding: "12px 20px",
            fontFamily: "Poppins"
          }
        })
      }
      
      toast.success("Project deleted!", {
        position: 'top-center',
        autoClose: 1000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px",
          fontFamily: "Poppins"
        }
      })
      setProjectList((prevList) => prevList.filter(project => project._id !== id));
      dispatch(deleteProject(id));
    }
    catch(error){
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 1000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px",
          fontFamily: "Poppins"
        }
      })
    }
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
      setProjectList(reorder); // ye hatadena jab dispatch handle karle
      dispatch(updateProject(reorder));
    }
  }

  return (
    <DragDropContext onDragEnd={handleDND}>
      {projectList && (
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div
              className="flex flex-col gap-4"
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
                          className="grid grid-cols-12 bg-indie-700 items-center rounded-md p-4 cursor-pointer"
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <div
                            className="col-span-1 cursor-pointer"
                            {...provided.dragHandleProps}
                          >
                            <RxDragHandleDots2 size={24} />
                          </div>
                          <motion.div className="text-indie-100 text-start flex flex-col gap-2 col-span-11"
                          initial={{ opacity: 0, y: 100 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ type: "spring", stiffness: 200, damping: 10,duration:1 }}>
                            <div className="flex justify-between">
                              <h1 className="flex items-center gap-2">
                                <span>
                                  <GoProjectRoadmap size={24} />
                                </span>
                                <p className="text-2xl">{project.name}</p>
                                {project.status && (
                                  <div className="bg-indie-300 text-indie-500 rounded-md px-1 w-fit">
                                    <span>{obj[project.status]}</span>
                                    {project.status}
                                  </div>
                                )}
                              </h1>
                              <button
                                className="cursor-pointer"
                                onClick={() => deleteProj(project._id)}
                              >
                                <MdDeleteForever size={30} />
                              </button>
                            </div>
                            <p className="text-md">
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
      )}
    </DragDropContext>
  );
}

export default ShowProject;
