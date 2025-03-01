/* eslint-disable react/prop-types */
import { motion } from "motion/react";

function Button({ text }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#B5BDE5" }}
      className="bg-veronica-300 lg:p-3 p-2 font-semibold rounded-md bg-veronica-700 hover:bg-veronica-800 text-indie-800 lg:w-80 w-60 flex items-center justify-center gap-2 focus:outline-none focus:ring focus:ring-indie-500 focus:ring-offset-1 text-sm md:text-lg lg:text-xl cursor-pointer"
    >
      {text}
    </motion.button>
  );
}

export default Button;
