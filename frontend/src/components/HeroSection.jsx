import { motion } from "motion/react";
function HeroSection() {
  return (
    <>
      <div className="flex font-poppins gap-25 justify-center">
        <div className="bg-indie-200 h-[42rem] w-[23rem] border-black border-[12px] rounded-[4rem] "></div>
        <div className="my-auto">
          <div className="flex flex-col justify-center h-96 gap-12 w-[45rem]">
            <motion.div className="text-indie-100 text-7xl font-extrabold font-poppins"
            initial={{opacity:0,y:-200}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,type:"spring",stiffness:200}}>
              Showcase your portfolio, grow your reach!
            </motion.div>
            <div className="text-indie-200 text-[16px]">
              Get a MyFolio Page to show your unique journey!
            </div>
            <div className="flex gap-2.5">
              <div className="flex border-1 h-12 border-indie-100 items-center bg-gray-800 text-white rounded-lg px-3 w-80">
                <span className="text-indie-100">myfolio.com/</span>
                <input
                  type="text"
                  placeholder="yourname"
                  className="bg-transparent text-white placeholder-gray-500 focus:outline-none w-full"
                />
              </div>
              <motion.button
                className="bg-veronica-300 py-3 h-12 rounded-md bg-veronica-700 text-indie-800 w-80 flex items-center justify-center gap-2 group
            focus:outline-none font-semibold cursor-pointer"
            whileHover={{scale:1.05,backgroundColor:"#7B2CBF"}}
            transition={{duration:0.1}}
              >
                <p>CLAIM MY FOLIO PAGE</p>
                <span className="group-hover:translate-x-1">
                  →
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <motion.div className="flex flex-col justify-center items-center bg-indie-400 text-indie-200 font-poppins text-center my-20 gap-16 h-96">
        <motion.h1 className="text-6xl font-extrabold"
        initial={{opacity:0,x:-200}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.5}}>
          Your Success Story starts here!
        </motion.h1>
        <motion.h3 className="text-2xl"
        initial={{opacity:0,x:200}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.5}}>
          Build Your Brand with a MyFolio Page and elevate your profile!
        </motion.h3>
        <h3 className="text-xl">
        From campus to career, share your journey....
        </h3>
      </motion.div>
    </>
  );
}
export default HeroSection;
