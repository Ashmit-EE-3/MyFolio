import AdminNavbar from "../components/AdminNavbar";
import AdminIcons from "../components/AdminIcons";

const name = "Yash Agarwal";

function Admin() {
  return (
    <div className="flex flex-col gap-8 text-indie-100 text-center">
      <AdminNavbar />
      <div className="flex flex-col gap-4 font-poppins">
        <div className="flex flex-col w-[50vw] m-auto bg-indie-700 h-48 rounded-2xl text-start p-6 gap-4">
          <h1 className="text-yellow-200">
            ⚠ Create a username to get a public page
          </h1>
          <form className="w-full flex flex-col gap-4">
            <input
              placeholder="username"
              className="p-4 border-[1px] rounded-lg h-12"
            />
            <button
              className="bg-veronica-700 text-indie-600 p-2 rounded-lg h-12 tracking-wide font-semibold hover:bg-veronica-800
            transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2"
            >
              CREATE USERNAME
            </button>
          </form>
        </div>
        <div className="flex flex-col w-[50vw] m-auto bg-indie-700 h-64 rounded-2xl font-poppins text-indie-100 justify-center">
          <div className="flex gap-16 p-6 text-xl">
            <img src="" alt="avatar" />
            <h1 className="font-semibold tracking-wide">{name}</h1>
          </div>
          <form>
            <textarea
              placeholder="I quit my 9-5 job to work 24/7 on my startup"
              type="text"
              className="w-[92.5%] h-28 bg-transparent p-4 rounded-lg focus:ring focus:ring-indie-300 focus:ring-offset-1"
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
        <hr className="h-0.5 m-auto w-[50vw] bg-slate-600 border-none"/>
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
      </div>
      <AdminIcons />
    </div>
  );
}
export default Admin;
