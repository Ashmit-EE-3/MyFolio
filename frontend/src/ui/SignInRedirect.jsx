import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignInRedirect() {
    const navigate = useNavigate() ; 
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='bg-[#0d1117] rounded-4xl align-center text-indie-100 py-10 px-20 text-center flex flex-col gap-10 w-[450px] justify-center items-center'>
            <header className='text-3xl font-semibold'>Check your email</header>
            <div className='text-lg'>A sign in link has been sent to your email address.</div>
            <button onClick={()=>navigate('/')} className="bg-veronica-300 p-3 rounded-md bg-veronica-700 hover:bg-veronica-800 text-indie-800 w-full flex items-center justify-center gap-2 group transition duration-300 ease-in-out
            focus:outline-none focus:ring focus:ring-indie-500 focus:ring-offset-1 font-semibold">
                <p>BACK TO HOME</p><span className='group-hover:translate-x-1 transition-transform duration-300 ease-in-out'>→</span></button>
        </div>
    </div>
  )
}

export default SignInRedirect   