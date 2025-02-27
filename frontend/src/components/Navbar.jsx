import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between my-8 text-indie-100 font-poppins focus:outline-none focus:ring focus:ring-indie-500 focus:ring-offset-1">
        <div className="flex gap-18 text-xl mx-25">
          <Link to="/" className="cursor-pointer">
            Indie Page
          </Link>
          <div className="flex gap-8">
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
          focus:outline-none flex justify-center hover:scale-[1.15]"
        >
          <span>LOG IN</span>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
