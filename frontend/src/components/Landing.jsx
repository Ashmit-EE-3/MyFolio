import React from 'react'

function Landing() {
    return (
        <div id="landing" className='flex flex-col items-center gap-30 py-40 px-20'>
            <header className="font-extrabold text-7xl text-indie-100">Showcase your skills!</header>
            <div className=' flex flex-col gap-2.5'>
            <div className="flex border-1 border-indie-100 items-center bg-gray-800 text-white rounded-lg p-3 w-120">
                <span className="text-indie-100">indiepa.ge/</span>
                <input
                    type="text"
                    placeholder="yourname"
                    className="bg-transparent text-white placeholder-gray-500 focus:outline-none ml-2 w-full"
                />
            </div>
            <button className="bg-veronica-300 p-3 font-semibold rounded-md tranistion duration-300 ease-in-out bg-veronica-700 hover:bg-veronica-800 text-indie-800 w-120 flex items-center justify-center gap-2 group focus:outline-none focus:ring focus:ring-indie-500 focus:ring-offset-1"><p>CLAIM MY INDIE PAGE</p><span className='font-semibold group-hover:translate-x-1 transition-transform duration-300 ease-in-out'>→</span></button>
            </div>
        </div>
    )
}

export default Landing