import { Link } from 'react-router-dom';
function Navbar()
{
    return(
        <div className="flex justify-between p-8 text-indie-100 font-poppinsfocus:outline-none focus:ring focus:ring-indie-500 focus:ring-offset-1">
            <div className="flex gap-18 ml-48 text-xl">
                <Link to="/" className="cursor-pointer">Indie Page</Link>
                <div className="flex gap-8">
                    <a href="#" className="cursor-pointer">Pricing</a>
                    <a href="#" className="cursor-pointer">Signup</a>
                </div>
            </div>  
            <button className="mr-52 text-indie-400 bg-indie-200 p-1 rounded-md w-20 hover:bg-indie-400 hover:text-indie-300 
            transition delay-75 focus:outline-none">
                LOG IN
            </button>
        </div>
    )
}
export default Navbar;