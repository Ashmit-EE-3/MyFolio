/* eslint-disable react/prop-types */
import {motion} from "motion/react"
import Button from './Button'

function Redirect({heading, description, text, imageUrl, color}) {
  return (
    <div className={`flex justify-center items-center w-full ${color ? "bg-[#282A36]" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 gap-4 md:gap-8 py-10 lg:py-16 justify-start lg:justify-center">
          <div className="lg:w-[50%] xl:w-[35%] w-[70%]">
            <img 
              className="rounded-lg border-2 border-indie-100 w-full object-cover max-h-[300px] md:max-h-[400px]" 
              src={imageUrl} 
              alt="" 
            />
          </div>
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col gap-6"
            initial={{opacity:0.5, scale:0.75}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.5}}
          >
            <header className="text-indie-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
              {heading}
            </header>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              {description}
            </p>
            <Button text={text}/>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Redirect