import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStartuplink } from "../features/socials/socialSlice";
import Confetti from "react-confetti"

function Startup() {
  const [addStartup, setAddstartup] = useState(false);
  const [url, setUrl] = useState("");
  const [confetti,setConfetti] = useState(false)

  const dispatch=useDispatch();

  function handleStartupSubmit(e) {
    e.preventDefault();
    dispatch(addStartuplink(url));
    setAddstartup(false);
  }

  function handleStartup(e) {
    setUrl(e.target.value);
  }

  async function handleConfetti()
  {
    setConfetti(true);
    await new Promise((resolve)=>setTimeout(resolve,3500))
    setConfetti(false)
  }

  return (
    <>
      {addStartup ? (
        <div className="bg-indie-700 p-4 w-[50vw] rounded-2xl">
          <form
            className="w-full flex flex-col gap-3 h-32 justify-center"
            onSubmit={handleStartupSubmit}
          >
            <div className="flex gap-4">
              <input
                value={url}
                type="url"
                className="p-4 border-[1px] rounded-lg h-12 placeholder:opacity-30 bg-indie-500 w-full"
                required
                onChange={handleStartup}
                placeholder="https://"
              />
              <span
                className="cursor-pointer rounded-full hover:bg-indie-400 p-2"
                onClick={() => setAddstartup(false)}
              >
                <svg
                  height="30px"
                  width="30px"
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <g id="info" />
                  <g id="icons">
                    <g id="delete">
                      <path d="M18.9,8H5.1c-0.6,0-1.1,0.5-1,1.1l1.6,13.1c0.1,1,1,1.7,2,1.7h8.5c1,0,1.9-0.7,2-1.7l1.6-13.1C19.9,8.5,19.5,8,18.9,8z" />
                      <path d="M20,2h-5l0,0c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2l0,0H4C2.9,2,2,2.9,2,4v1c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V4    C22,2.9,21.1,2,20,2z" />
                    </g>
                  </g>
                </svg>
              </span>
            </div>
            <button
              className="bg-veronica-700 text-indie-600 p-3 rounded-lg m-auto w-[48vw] tracking-wide font-semibold cursor-pointer
        hover:bg-veronica-800 transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 group"
        onClick={async (e) => {
          e.preventDefault();
          await handleConfetti();
          handleStartupSubmit(e)
        }}>
              <span className="mr-2 transition-transform duration-500 delay-200 group-hover:rotate-90 inline-block">
                +
              </span>
              ADD STARTUP
            </button>
          </form>
          {confetti&&<Confetti key={confetti}/>}
        </div>
      ) : (
        <button
          className="bg-veronica-700 text-indie-600 p-3 rounded-lg m-auto w-[48vw] tracking-wide font-semibold cursor-pointer
        hover:bg-veronica-800 transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 group"
          onClick={() => setAddstartup(true)}
        >
          <span className="mr-2 transition-transform duration-500 delay-200 group-hover:rotate-90 inline-block">
            +
          </span>
          ADD STARTUP
        </button>
      )}
      {/** Add startup details component here */}
    </>
  );
}
export default Startup;
