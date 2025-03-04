import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoIosBrush } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { motion } from "motion/react";
import { useState } from "react";
import Modal from "./Modal";
  
function AdminNavbar() {
  const [modal, setModal]=useState(false)
  function handleClick()
  {
    setModal(true)
  }

  return (
    <div className="md:flex justify-between bg-indie-700 p-4 font-poppins text-[18px] my-4 mx-auto rounded-xl w-[98%] items-center hidden">
      <ul className="flex items-center gap-10 text-indie-100 font-semibold">
        <NavLink to='/'><img className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" src="logo-myfolio.png"/></NavLink>
        <NavLink to="page" className="flex justify-center items-center h-12 p-2 rounded-lg hover:cursor-pointer hover:bg-indie-400 transition duration-200
          focus:outline-none">
          <motion.div
            className="flex gap-3 justify-center items-center"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 ,type: "spring", bounce: 0.2 }}
          >
            <FaUserAlt />
            <span>PAGE</span>
          </motion.div>
        </NavLink>
        <NavLink to="styles" className="flex justify-center items-center h-12 p-2 rounded-lg hover:cursor-pointer hover:bg-indie-400 transition duration-200
          focus:outline-none">
          <motion.div
            className="flex gap-3 justify-center items-center"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 ,type: "spring", bounce: 0.2 }}
          >
            <IoIosBrush />
            <span>STYLE</span>
          </motion.div>
        </NavLink>
        <NavLink to="settings" className="flex justify-center items-center h-12 p-2 rounded-lg hover:cursor-pointer hover:bg-indie-400 transition duration-200
          focus:outline-none">
          <motion.div 
            className="flex gap-3 justify-center items-center"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 ,type: "spring", bounce: 0.2 }}
          >
            <IoMdSettings />
            <span>SETTINGS</span>
          </motion.div>
        </NavLink>
      </ul>
      <button
        className="bg-veronica-700 py-4 w-[124px] rounded-lg hover:cursor-pointer hover:bg-veronica-800
      focus:outline-none"
      onClick={handleClick}
      >
        🚀 DEPLOY
      </button>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}
export default AdminNavbar;
