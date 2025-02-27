import { motion } from "motion/react"

function Landing() {
    return (
        <div id="signup" className='flex flex-col items-center gap-10 py-40 px-20 landing'>
            <header className="font-extrabold text-7xl text-indie-100">Showcase your skills!</header>
            <div className=' flex flex-col gap-2.5'>
            <motion.div className="flex border-1 border-indie-100 items-center bg-gray-800 text-white rounded-lg p-3 w-120"
            animate={{ 
                boxShadow:
                  "0px 0px 10px #C2CBF5", 
              }}
           transition={{ duration: 1, repeat: Infinity,delay:1}}>
                <span className="text-indie-100">indiepa.ge/</span>
                <input
                    type="text"
                    placeholder="yourname"
                    className="bg-transparent text-white placeholder-gray-500 focus:outline-none ml-2 w-full"
                />
            </motion.div>
            <motion.button className="bg-veronica-300 cursor-pointer p-3 font-semibold rounded-md bg-veronica-700 text-indie-800 w-120 flex items-center justify-center gap-2 group focus:outline-none"
            whileHover={{scale:1.05,backgroundColor:"#7B2CBF"}}
            transition={{duration:0.1}}><p>CLAIM MY INDIE PAGE</p><span className='font-bold group-hover:translate-x-1 transition-transform duration-300 ease-in-out'>→</span></motion.button>
            </div>
        </div>
    )
}

export default Landing