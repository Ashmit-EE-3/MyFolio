/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Button({ text }) {
  const navigate=useNavigate()
  const authenticated=useSelector(state=>state.user.isAuthenticated)
  function handleClick(){
    if(authenticated){
      navigate('/admin')
    }
    else{
      navigate('/login')
    }
  }
  return (
    <motion.button
    onClick={handleClick}
      whileHover={{ scale: 1.05}}
      transition={{duration:0.2,ease:"easeInOut"}}
      className="bg-veronica-300 lg:p-3 p-2 font-semibold rounded-md bg-veronica-700 hover:bg-veronica-800 text-indie-800 lg:w-80 w-60 flex items-center justify-center gap-2 focus:outline-none focus:ring focus:ring-indie-500 focus:ring-offset-1 text-sm md:text-lg cursor-pointer"
    >
      {text}
    </motion.button>
  );
}

export default Button;
