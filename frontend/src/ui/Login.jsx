import { useNavigate } from 'react-router-dom';
import { addLogInCredentials } from '../features/user/userSlice';
import app from '../firebase';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, sendSignInLinkToEmail, TwitterAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux';
import OAuth from '../components/OAuth';
import { FcGoogle } from 'react-icons/fc' ; 
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'motion/react';
function Login() {
    var email = "" ;
    const navigate = useNavigate();
    const dispatch = useDispatch() ; 
    const handleChange = (e) => {
        email = e.target.value ; 
    }
    const handleClick = async (e)=>{
        e.preventDefault() ; 
        const auth = getAuth(app);
        const actionCodeSettings = {
            url:"http://localhost:5173/admin",
            handleCodeInApp: true
        }
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                dispatch(addLogInCredentials({email: email})) ; 
                navigate('/signInRedirect') ; 
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="h-[35rem] w-96 bg-indie-800 rounded-4xl p-10 flex flex-col items-center justify-center">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <OAuth provider = {new GoogleAuthProvider()} Icon={FcGoogle} name="Google" />
                    <OAuth provider = {new GithubAuthProvider()} Icon={FaGithub} name="Github" />
                    <OAuth provider = {new TwitterAuthProvider()} Icon={FaXTwitter} name="X" />
                    <div className="flex items-center w-full mt-3">
                        <hr className="h-0.5 bg-indie-200 w-full" />
                        <span className="mx-4 text-indie-200">or</span>
                        <hr className="h-0.5 bg-indie-200 w-full" />
                    </div>
                    <form onSubmit={handleClick} className="w-full text-indie-200 flex flex-col gap-2 mt-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="email@example.com" className="border-2 border-indie-200 rounded-sm p-2 focus:outline-none" onChange={handleChange} />
                        <motion.button whileHover={{scale:0.95}} className="bg-veronica-700 text-xl p-2 rounded-lg w-full text-indie-100 h-16 mt-2 cursor-pointer">Sign in with Email</motion.button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;