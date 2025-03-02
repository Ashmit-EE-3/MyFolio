import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoIosBrush } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { motion } from "motion/react";
import { useState } from "react";
import Modal from "../components/Modal"
function Sidebar() {
  const [modal, setModal]=useState(false)
  function handleClick()
  {
    setModal(true)
  }
  return (
    <div className="col-span-3 md:hidden bg-indie-700 font-poppins text-[9px] py-4 sm:text-[12px] items-center flex flex-col gap-4 border-r-1 border-indie-400">
      <ul className="flex flex-col gap-4 text-indie-100 font-semibold mx-auto">
        <NavLink to="page" className="flex justify-center items-center h-8 sm:p-1 rounded-lg hover:cursor-pointer hover:bg-indie-400 transition duration-200
          focus:outline-none">
          <motion.div
            className="flex sm:gap-2 gap-1 justify-center items-center"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 ,type: "spring", bounce: 0.2 }}
          >
            <FaUserAlt />
            <span>PAGE</span>
          </motion.div>
        </NavLink>
        <NavLink to="styles" className="flex justify-center items-center h-8 sm:p-1 rounded-lg hover:cursor-pointer hover:bg-indie-400 transition duration-200
          focus:outline-none">
          <motion.div
            className="flex sm:gap-2 gap-1 justify-center items-center"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 ,type: "spring", bounce: 0.2 }}
          >
            <IoIosBrush />
            <span>STYLE</span>
          </motion.div>
        </NavLink>
        <NavLink to="settings" className="flex justify-center items-center h-10 sm:p-1 rounded-lg hover:cursor-pointer hover:bg-indie-400 transition duration-200
          focus:outline-none">
          <motion.div 
            className="flex sm:gap-2 gap-1 justify-center items-center"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 ,type: "spring", bounce: 0.2 }}
          >
            <IoMdSettings />
            <span>SETTINGS</span>
          </motion.div>
        </NavLink>
      </ul>
      <button
        className="bg-veronica-700 w-fit sm:p-3 h-8 p-1 sm:h-10 sm:rounded-lg rounded-sm hover:cursor-pointer hover:bg-veronica-800
      focus:outline-none"
      onClick={handleClick}
      >
        🚀DEPLOY
      </button>
      {modal && <Modal setModal={setModal}/>}
    </div>
  );
}
export default Sidebar;
