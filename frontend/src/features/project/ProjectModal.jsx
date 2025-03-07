import { motion } from "motion/react";
import { createPortal } from "react-dom";
function ProjectModal({project}) {
    console.log(project);
    
    return createPortal(
        <motion.div className="fixed z-21 inset-0 backdrop-blur-sm flex items-center justify-center">
          <motion.div className="text-indie-100 md:p-6 p-3 flex flex-col md:gap-10 gap-6 w-[90%] max-w-md bg-indie-800 rounded-lg"
          initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
          animate={{ clipPath: "circle(100% at 50% 50%)", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}>
            
          </motion.div>
        </motion.div>,
        document.getElementById("root")
      );
}

export default ProjectModal
