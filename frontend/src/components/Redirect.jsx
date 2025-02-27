/* eslint-disable react/prop-types */
import {motion} from "motion/react"
import Button from './Button'

function Redirect({heading, description, text, imageUrl}) {
  return (
    <div className='flex gap-20 p-40 px-60 lg:flex-row md: flex-col'>
        <img  className= 'w-80 rounded-lg border-2 border-indie-100 h-[18rem] 'src={imageUrl} alt="" />
        <motion.div className=' max-w-150 flex flex-col gap-6'
        initial={{opacity:0.5,scale:0.75}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.5}}>
            <header className='text-indie-100 text-5xl font-extrabold'>{heading}</header>
            <p className='text-gray-400'>{description}</p>
            <Button text={text}/>
        </motion.div>
    </div>
  )
}

export default Redirect