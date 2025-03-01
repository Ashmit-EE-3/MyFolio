import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="lg:w-full mx-auto text-[10px] sm:text-xs md:text-sm lg:text-[16px] py-8">
      <div className="flex justify-between mx-auto w-[90%] text-indie-100 font-poppins focus:outline-none focus:ring focus:ring-indie-500 focus:ring-offset-1">
        <div className="flex gap-18 text-xl">
          <Link to="/" className="cursor-pointer">
            MyFolio Page
          </Link>
          <div className="lg:flex gap-8 hidden">
            <a href="#signup" className="cursor-pointer ">
              Pricing
            </a>
            <a href="#signup" className="cursor-pointer">
              Signup
            </a>
          </div>
        </div>
        <Link
          to="/login"
          className="text-indie-400 bg-indie-200 p-1 rounded-md w-20 hover:bg-indie-400 hover:text-indie-300 
          focus:outline-none flex justify-center hover:scale-[1.15] text-sm md:text-lg"
        >
          <span>LOG IN</span>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
