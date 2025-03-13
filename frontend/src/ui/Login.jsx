import { useNavigate } from 'react-router-dom';
import { addLogInCredentials, updateUser } from '../features/user/userSlice';
import app from '../firebase';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink} from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';
import { FcGoogle } from 'react-icons/fc' ; 
import { FaGithub } from "react-icons/fa";
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { toastStyles } from '../utils/helper';
import { get } from 'mongoose';
import { toast } from 'react-toastify';
function Login() {
    const [error, setError] = useState("");
    console.log("Error from login is : ", error);
    var email = "" ;
    const navigate = useNavigate();
    const dispatch = useDispatch() ;
     
    const handleChange = (e) => {
        email = e.target.value ; 
    }
    const handleError = (errorMessage) => {
        if (errorMessage === "Firebase: Error (auth/account-exists-with-different-credential)."){
            setError("You already have an account with this email. Login with the same account.")
        }
        else if (errorMessage === "Firebase: Error (auth/popup-closed-by-user)."){
            setError("You have closed the login popup. Try logging in again.")
        }
        else {
            setError(errorMessage);
        }
    
        setTimeout(()=> {
            setError("");
        }, 5000); 
    }
    const handleClick = async (e)=>{
        e.preventDefault() ; 

        if (!email){
            toast.error("No Email Found!", toastStyles) ;
            return ; 
        }

        const auth = getAuth(app);
        const actionCodeSettings = {
            url:"https://myfolio.tech/admin",
            handleCodeInApp: true
        }

        try{
            await sendSignInLinkToEmail(auth, email, actionCodeSettings) ;
            dispatch(updateUser({email: email})) ; 
            navigate('/signInRedirect') ; 
        }
        catch(error){
            toast.error(error.message, toastStyles) 
            console.log(error)
        }
    }

    useEffect(()=>{
        const auth = getAuth(); 
        if (isSignInWithEmailLink(auth, window.location.href)){
            const storedEmail = useSelector((state)=>state.user.currentUser?.email) ; 

            signInWithEmailLink(auth, storedEmail, window.location.href)
            .then((result)=>{
                dispatch(addLogInCredentials({email: storedEmail})) ; 
                navigate('/admin') ; 
            })
            .catch((error)=>{
                console.log(error) ; 
            })
        }
    }, [dispatch,navigate]) ; 

    return (
        <div className="h-screen font-poppins flex items-center justify-center">
            <div className="max-h-[45rem] lg:h-[40rem] h-[30rem] lg:w-[50%] w-[80%] max-w-[95%] md:rounded-4xl rounded-xl p-4 md:p-8 lg:p-10 flex flex-col items-center justify-center">
                <div className="flex flex-col md:gap-4 gap-2 justify-center items-center w-[60%] max-w-[80%]">
                    {error && <div className="bg-red-500 text-white border-2 border-white p-2 rounded-lg">{error}</div>}
                    <OAuth provider = {new GoogleAuthProvider()} Icon={FcGoogle} name="Google" onError={handleError}/>
                    <OAuth provider = {new GithubAuthProvider()} Icon={FaGithub} name="Github" onError={handleError} />
                    <div className="flex items-center w-full mt-3">
                        <hr className="h-0.5 bg-indie-200 w-full" />
                        <span className="mx-4 text-indie-200">or</span>
                        <hr className="h-0.5 bg-indie-200 w-full" />
                    </div>
                    <form onSubmit={handleClick} className="w-full text-indie-200 flex flex-col gap-2 mt-2 text-[10px] md:text-sm lg:text-xl">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="email@example.com" className="border-2 border-indie-200 rounded-sm md:p-2 p-1 focus:outline-none" onChange={handleChange} />
                        <motion.button whileHover={{scale:0.95}} className="bg-veronica-700 lg:text-xl md:text-sm text-[10px] md:p-2 rounded-lg md:w-full text-indie-100 md:h-16 h-12 mt-2 cursor-pointer">Sign in with Email</motion.button>
                        <motion.button onClick={()=>navigate('/')} whileHover={{scale:0.95}} className="bg-veronica-700 lg:text-xl md:text-sm text-[10px] md:p-2 rounded-lg md:w-full text-indie-100 md:h-16 h-12 mt-2 cursor-pointer group flex justify-center items-center gap-2">
                            <span className="transition duration-200 group-hover:-translate-x-2">←</span>
                            <p>Back to Home</p>
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;