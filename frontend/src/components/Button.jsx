import React from 'react'

function Button({text}) {
  return (
    <button className="bg-veronica-300 p-3 font-semibold rounded-md bg-veronica-700 hover:bg-veronica-800 text-indie-800 w-80 flex items-center justify-center gap-2 focus:outline-none focus:ring focus:ring-indie-500 focus:ring-offset-1 cursor-pointer">{text}</button>
  )
}

export default Button