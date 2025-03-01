import { motion } from "motion/react"

function Landing() {
    return (
        <div id="signup" className='flex flex-col items-center md:gap-10 gap-6 md:py-40 md:px-20 py-10 px-4 landing'>
            <header className="font-extrabold xl:text-7xl md:text-5xl sm:text-2xl text-xl text-indie-100">Showcase your skills!</header>
            <div className=' flex flex-col sm:gap-2.5 gap-1'>
            <motion.div className="flex border-1 border-indie-100 text-sm md:text-lg lg:text-xl items-center md:h-12 h-10 bg-gray-800 text-white rounded-lg p-3 md:w-120 sm:w-80 w-60 mx-auto"
            animate={{ 
                boxShadow:
                  "0px 0px 10px #C2CBF5", 
              }}
           transition={{ duration: 1, repeat: Infinity,delay:1}}>
                <span className="text-indie-100">indiepa.ge/</span>
                <input
                    type="text"
                    placeholder="yourname"
                    className="bg-transparent text-white placeholder-gray-500 focus:outline-none ml-2 w-full "
                />
            </motion.div>
            <motion.button className="bg-veronica-300 cursor-pointer p-3 md:h-12 h-10 text-sm md:text-lg lg:text-xl font-semibold rounded-md bg-veronica-700 text-indie-800 md:w-120 mx-auto sm:w-80 w-60 flex items-center justify-center gap-2 group focus:outline-none"
            whileHover={{scale:1.05,backgroundColor:"#7B2CBF"}}
            transition={{duration:0.1}}><p>CLAIM MY INDIE PAGE</p><span className='font-bold group-hover:translate-x-1 transition-transform duration-300 ease-in-out'>→</span></motion.button>
            </div>
        </div>
    )
}

export default Landing