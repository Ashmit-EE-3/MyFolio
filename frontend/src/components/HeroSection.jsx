import { motion } from "motion/react";
function HeroSection() {
  return (
    <>
      <div className="flex font-poppins lg:gap-25 justify-center lg:w-full py-6">
        <div className="bg-indie-200 h-[42rem] w-[23rem] border-black border-[12px] rounded-[4rem] xl:block hidden"></div>
        <div className="lg:my-auto">
          <div className="flex flex-col justify-center items-center md:gap-12 gap-8 lg:w-[45rem] w-[80%] mx-auto">
            <motion.div className="text-indie-100 xl:text-7xl md:text-5xl sm:text-2xl text-xl text-center font-extrabold font-poppins"
            initial={{opacity:0,y:-100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,type:"spring",stiffness:200}}>
              Showcase your portfolio, grow your reach!
            </motion.div>
            <div className="text-indie-200 md:text-[16px] lg:text-xl text-[12px] text-center">
              Get a MyFolio Page to show your unique journey!
            </div>
            <div className="flex gap-2.5 md:flex-row flex-col">
              <div className="flex border-1 h-12 lg:h-14 border-indie-100 items-center bg-gray-800 text-white rounded-lg px-3 lg:w-80 w-60">
                <span className="text-indie-100 text-sm md:text-lg lg:text-xl">myfolio.com/</span>
                <input
                  type="text"
                  placeholder="yourname"
                  className="bg-transparent text-white placeholder-gray-500 focus:outline-none w-full text-sm md:text-lg lg:text-xl placeholder:text-sm md:placeholder:text-lg"
                />
              </div>
              <motion.button
                className="bg-veronica-300 py-3 sm:h-12 lg:h-14 rounded-md bg-veronica-700 text-indie-800 lg:w-80 md:w-60 flex items-center justify-center gap-2 group
            focus:outline-none font-semibold cursor-pointer text-sm md:text-lg lg:text-xl"
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
      <motion.div className="flex flex-col justify-center items-center mx-auto bg-indie-400 text-indie-200 font-poppins text-center my-8 md:my-14 lg:my-20 md:gap-10 lg:gap-16 gap-4 sm:gap-6 lg:h-96 md:h-72 sm:h-56 h-44 lg:w-full ">
        <motion.h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-xl font-extrabold w-[90%]"
        initial={{opacity:0,x:-200}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.5}}>
          Your Success Story starts here!
        </motion.h1>
        <motion.h3 className="lg:text-2xl md:text-xl sm:text-lg text-sm"
        initial={{opacity:0,x:200}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.5}}>
          Build Your Brand with a MyFolio Page and elevate your profile!
        </motion.h3>
        <h3 className="lg:text-xl md:text-lg sm:text-sm text-xs">
        From campus to career, share your journey....
        </h3>
      </motion.div>
    </>
  );
}
export default HeroSection;
