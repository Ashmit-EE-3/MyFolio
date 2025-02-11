import { useDispatch, useSelector } from "react-redux";
import AdminIcons from "../components/AdminIcons";
import { useState } from "react";
import { addUsername } from "../features/user/userSlice"

// const name = "Yash Agarwal";

function Page() {
  const name = useSelector((state) => state.user.displayName);
  const imgURL = useSelector((state) => state.user.avatar);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("")
  const submit = useSelector((state) => state.user.submit)

  function handleChange(e) {
    setUsername(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUsername(username))
  }

  return (
    <div className="flex flex-col gap-4 font-poppins m-auto overflow-y-scroll h-full">
      {!submit && <div className="flex flex-col w-[50vw] m-auto bg-indie-700 h-48 rounded-2xl text-start p-6 gap-4">
        <h1 className="text-yellow-200">
          ⚠ Create a username to get a public page
        </h1>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            placeholder="username"
            type="text"
            value={username}
            className="p-4 border-[1px] rounded-lg h-12 placeholder:opacity-30"
            required
            onChange={handleChange}
          />
          <button
            className="bg-veronica-700 text-indie-600 p-2 rounded-lg h-12 tracking-wide font-semibold hover:bg-veronica-800
            transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2"
          >
            CREATE USERNAME
          </button>
        </form>
      </div>}
      <div className="flex flex-col w-[50vw] m-auto bg-indie-700 h-64 rounded-2xl font-poppins text-indie-100 justify-center">
        <form className="flex gap-5 p-6 text-xl items-center">
          <div className="relative h-14 w-14 group">
            <input type='picture' className="hidden" />
            <svg className="absolute top-0 left-0 h-8 w-8 z-20  translate-x-1/4 translate-y-1/4 opacity-60 bg-indie-400 rounded-lg group-hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="white"
            >
              <g>
                <path d="M417.5,160h-61.7c-32.1-36-42.2-48-54.5-48h-88.5c-12.3,0-22.2,12-54.5,48H145v-16h-34v16H97.5C79.9,160,64,173.2,64,190.7 v176c0,17.5,15.9,33.3,33.5,33.3h320c17.6,0,30.5-15.8,30.5-33.3v-176C448,173.2,435.1,160,417.5,160z M432,366.7 c0,9.3-6.2,17.3-14.5,17.3h-320c-8.7,0-17.5-8.7-17.5-17.3v-176c0-8.2,8.1-14.7,17.5-14.7h60.7h7.1l4.8-3.2c4-4.5,7.7-10,11.1-13.8 c11.3-12.7,19.5-21.7,25.3-26.9c4.7-4.2,6.2-4.1,6.2-4.1h88.5c0,0,1.6-0.1,6.7,4.5c6.1,5.5,14.7,16.5,26.6,29.8 c2.9,3.3,6,6.8,9.3,10.5l4.8,3.2h7.2h61.7c8.8,0,14.5,6,14.5,14.7V366.7z" />
                <path d="M256,189.5c-47.1,0-85.5,38.4-85.5,85.5s38.4,85.5,85.5,85.5s85.5-38.4,85.5-85.5S303.1,189.5,256,189.5z M256,344.5 c-38.4,0-69.5-31.1-69.5-69.5s31.1-69.5,69.5-69.5s69.5,31.1,69.5,69.5S294.4,344.5,256,344.5z" />
                <rect x="352" y="192"/>
                <circle cx="256" cy="275" r="32" />
              </g>
            </svg>
            <img src={imgURL} className="rounded-full group-hover:opacity-60" alt="avatar" />
          </div>
          <input type="text" placeholder="Your name" defaultValue={name} className="w-full p-2 rounded-lg focus:ring focus:ring-indie-300 focus:ring-offset-1 placeholder:opacity-50 placeholder:text-base" />
        </form>
        <form className="px-6">
          <textarea
            placeholder="I quit my 9-5 job to work 24/7 on my startup"
            type="text"
            className="h-28 w-full placeholder:text-base bg-transparent p-4 rounded-lg focus:ring focus:ring-indie-300 focus:ring-offset-1 placeholder:opacity-50"
          ></textarea>
        </form>
        <div className="flex gap-2 w-36 items-center justify-center">
          <span className="p-2 hover:bg-indie-400 rounded-full">
            <svg
              viewBox="0 0 512 512"
              width="31px"
              height="31px"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <g data-name="1" id="_1">
                <path d="M257,450.17a15,15,0,0,1-7.32-1.91A282.08,282.08,0,0,1,105,201.8q0-3.08.06-6.14c1-45.48,17.93-83.78,49-110.75C181.54,61.11,218.09,48,257,48s75.45,13.11,102.9,36.91c31.1,27,48.06,65.27,49,110.75h0c0,2,.07,4.09.07,6.14a281.8,281.8,0,0,1-40,144.87A283.7,283.7,0,0,1,264.32,448.26,15,15,0,0,1,257,450.17ZM257,78c-31.69,0-61.26,10.5-83.25,29.58-24.53,21.26-37.91,51.94-38.69,88.72,0,1.82-.06,3.66-.06,5.5a252.06,252.06,0,0,0,122,216,253.66,253.66,0,0,0,86.28-86.58A251.83,251.83,0,0,0,379,201.8c0-1.84,0-3.68-.06-5.5-.79-36.78-14.17-67.46-38.69-88.72C318.25,88.5,288.69,78,257,78Z" />
                <path d="M257.39,296.6a94.32,94.32,0,1,1,94.32-94.32A94.42,94.42,0,0,1,257.39,296.6Zm0-158.63a64.32,64.32,0,1,0,64.32,64.31A64.39,64.39,0,0,0,257.39,138Z" />
              </g>
            </svg>
          </span>
          <span className="p-2 hover:bg-indie-400 rounded-full">
            <svg
              height="35px"
              viewBox="0 0 512 512"
              width="35px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M256,73.089c-100.864,0-182.911,82.058-182.911,182.917S155.136,438.911,256,438.911  c100.859,0,182.911-82.046,182.911-182.905S356.86,73.089,256,73.089z M256,410.059c-84.951,0-154.06-69.108-154.06-154.054  c0-84.956,69.109-154.065,154.06-154.065c84.951,0,154.06,69.109,154.06,154.065C410.06,340.951,340.951,410.059,256,410.059z" />
              <path d="M227.076,220.157c0-11.572,16.925-13.548,31.606-13.548c13.837,0,32.744,6.485,48.553,14.681l3.098-31.895  c-7.906-4.52-26.247-9.884-44.877-11.005l4.515-32.461H239.77l4.521,32.461c-38.947,3.664-51.651,26.242-51.651,45.154  c0,47.697,88.898,37.547,88.898,66.888c0,11.017-10.434,14.959-28.785,14.959c-24.832,0-43.467-8.74-53.056-17.779l-4.803,35.848  c9.04,5.364,27.375,10.161,49.397,11.294l-4.521,31.329h30.201l-4.515-31.617c45.722-3.954,53.906-28.23,53.906-44.311  C319.363,233.428,227.076,247.532,227.076,220.157z" />
            </svg>
          </span>
        </div>
      </div>
      <hr className="h-0.5 m-auto w-[50vw] bg-slate-600 border-none" />
      <h2>Your failures, successes and everything in between!</h2>
      <button
        className="bg-veronica-700 text-indie-600 p-2 rounded-lg h-12 m-auto w-[50vw] tracking-wide font-semibold
        hover:bg-veronica-800 transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 group"
      >
        <span className="mr-2 transition-transform duration-500 delay-200 group-hover:rotate-90 inline-block">
          +
        </span>
        ADD STARTUP
      </button>
      <hr className="h-0.5 m-auto w-[50vw] bg-slate-600 border-none" />
      <AdminIcons /> 
    </div>
  )
}
export default Page;