import React from 'react'
import Button from './Button'

function Redirect({heading, description, text, imageUrl}) {
  return (
    <div className='flex gap-20 p-40 px-60 lg:flex-row md: flex-col'>
        <img  className= 'w-80 rounded-lg border-2 border-indie-100 h-[18rem] 'src={imageUrl} alt="" />
        <div className=' max-w-150 flex flex-col gap-6'>
            <header className='text-indie-100 text-5xl font-extrabold'>{heading}</header>
            <p className='text-gray-400'>{description}</p>
            <Button text={text}/>
        </div>
    </div>
  )
}

export default Redirect