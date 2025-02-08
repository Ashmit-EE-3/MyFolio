import React from 'react'

function Footer() {
  return (
    <div className='font-poppins flex justify-center p-8 bg-indie-700 sm:flex-row sm:justify-evenly flex-col '>
        <div>
            <header className='font-bold my-4 text-indie-400'>INDIE PAGE</header>
            <p className='my-0.75 text-indie-100'>Tech News</p>
            <p className='my-0.75 text-indie-100'>Login</p>
            <p className='my-0.75 text-indie-100'>Signup</p>
            <p className='my-0.75 text-indie-100'>Support</p>
        </div>
        <div>
            <header className='font-bold my-4 text-indie-400'>BORING</header>
            <p className='my-0.75 text-indie-100'>Privacy Policy</p>
            <p className='my-0.75 text-indie-100'>Terms of service</p>
        </div>
        <div>
            <header className='font-bold my-4 text-indie-400'>MORE</header>
            <p className='my-0.75 text-indie-100'>Newsletter</p>
            <p className='my-0.75 text-indie-100'>ByeDispute</p>
            <p className='my-0.75 text-indie-100'>ZenVoice</p>
            <p className='my-0.75 text-indie-100'>PoopUp</p>
            <p className='my-0.75 text-indie-100'>LaunchViral</p>
            <p className='my-0.75 text-indie-100'>DataFast</p>
            <p className='my-0.75 text-indie-100'>ShipFast</p>
            <p className='my-0.75 text-indie-100'>CodeFast</p>
        </div>
    </div>
  )
}

export default Footer