import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const authenticated=useSelector(state=>state.user.isAuthenticated)
  const navigate=useNavigate()
  function handleClick()
  {
    if(authenticated)
      navigate("/admin")
    else
    navigate("/login")
  }
  return (
    <div className="lg:w-full mx-auto text-[10px] sm:text-xs md:text-sm lg:text-[16px] py-8">
      <div className="flex justify-between mx-auto w-[90%] text-indie-100 font-poppins focus:outline-none focus:ring focus:ring-indie-500 focus:ring-offset-1">
        <div className="flex gap-18 text-xl">
          <Link
            to="/"
            className="cursor-pointer text-sm md:text-xl lg:text-2xl flex items-center gap-2"
          >
            <img src="logo-myfolio.png" className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" alt="logo" /><span className="text-veronica-700">MyFolio</span>
          </Link>
        </div>
        <div className="lg:flex gap-8 hidden justify-center items-center text-sm md:text-lg">
          <a href="#signup" className="cursor-pointer">
            Signup
          </a>
          <button
          onClick={handleClick}
            className="text-indie-400 bg-indie-200 p-1 rounded-md w-20 hover:bg-indie-400 hover:text-indie-300 
          focus:outline-none flex justify-center hover:scale-[1.15] text-sm md:text-lg cursor-pointer"
          >
            <span>LOG IN</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
