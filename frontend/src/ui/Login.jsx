import { useNavigate } from 'react-router-dom';
import { addLogInCredentials } from '../features/user/userSlice';
import app from '../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, sendSignInLinkToEmail } from "firebase/auth";
import { useDispatch } from 'react-redux';
 
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
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            dispatch(addLogInCredentials(result.user));
            console.log(result);
            navigate('/admin');
        } catch (error) {
            console.log(error)
        }
    };

    const handleGithubClick = async () => {
        try {
            const provider = new GithubAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            dispatch(addLogInCredentials(result.user));
            console.log(result);
            navigate('/admin');
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="h-[35rem] w-96 bg-indie-800 rounded-4xl p-10 flex flex-col items-center justify-center">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <button onClick={handleGoogleClick} className="bg-indie-100 flex text-xl p-2 rounded-lg w-72 items-center justify-evenly h-16 cursor-pointer"><span>
                        <svg height="40px" viewBox="0 0 400 400" width="40px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M142.9,24.2C97.6,39.7,59,73.6,37.5,116.5c-7.5,14.8-12.9,30.5-16.2,46.8c-8.2,40.4-2.5,83.5,16.1,120.3   
                    c12.1,24,29.5,45.4,50.5,62.1c19.9,15.8,43,27.6,67.6,34.1c31,8.3,64,8.1,95.2,1c28.2-6.5,54.9-20,76.2-39.6   
                    c22.5-20.7,38.6-47.9,47.1-77.2c9.3-31.9,10.5-66,4.7-98.8c-58.3,0-116.7,0-175,0c0,24.2,0,48.4,0,72.6c33.8,0,67.6,0,101.4,0   
                    c-3.9,23.2-17.7,44.4-37.2,57.5c-12.3,8.3-26.4,13.6-41,16.2c-14.6,2.5-29.8,2.8-44.4-0.1c-14.9-3-29-9.2-41.4-17.9   
                    c-19.8-13.9-34.9-34.2-42.6-57.1c-7.9-23.3-8-49.2,0-72.4c5.6-16.4,14.8-31.5,27-43.9c15-15.4,34.5-26.4,55.6-30.9   
                    c18-3.8,37-3.1,54.6,2.2c15,4.5,28.8,12.8,40.1,23.6c11.4-11.4,22.8-22.8,34.2-34.2c6-6.1,12.3-12,18.1-18.3  
                     c-17.3-16-37.7-28.9-59.9-37.1C228.2,10.6,183.2,10.3,142.9,24.2z" fill="#FFFFFF" />
                                <g>
                                    <path d="M142.9,24.2c40.2-13.9,85.3-13.6,125.3,1.1c22.2,8.2,42.5,21,59.9,37.1c-5.8,6.3-12.1,12.2-18.1,18.3    
                c-11.4,11.4-22.8,22.8-34.2,34.2c-11.3-10.8-25.1-19-40.1-23.6c-17.6-5.3-36.6-6.1-54.6-2.2c-21,4.5-40.5,15.5-55.6,30.9   
                 c-12.2,12.3-21.4,27.5-27,43.9c-20.3-15.8-40.6-31.5-61-47.3C59,73.6,97.6,39.7,142.9,24.2z" fill="#EA4335" /></g>
                                <g><path d="M21.4,163.2c3.3-16.2,8.7-32,16.2-46.8c20.3,15.8,40.6,31.5,61,47.3c-8,23.3-8,49.2,0,72.4    
                 c-20.3,15.8-40.6,31.6-60.9,47.3C18.9,246.7,13.2,203.6,21.4,163.2z" fill="#FBBC05" /></g><g><path d="M203.7,165.1c58.3,0,116.7,0,175,0c5.8,32.7,4.5,66.8-4.7,98.8c-8.5,29.3-24.6,56.5-47.1,77.2    c-19.7-15.3-39.4-30.6-59.1-45.9c19.5-13.1,33.3-34.3,37.2-57.5c-33.8,0-67.6,0-101.4,0C203.7,213.5,203.7,189.3,203.7,165.1z" fill="#4285F4" /></g><g><path d="M37.5,283.5c20.3-15.7,40.6-31.5,60.9-47.3c7.8,22.9,22.8,43.2,42.6,57.1c12.4,8.7,26.6,14.9,41.4,17.9    c14.6,3,29.7,2.6,44.4,0.1c14.6-2.6,28.7-7.9,41-16.2c19.7,15.3,39.4,30.6,59.1,45.9c-21.3,19.7-48,33.1-76.2,39.6    c-31.2,7.1-64.2,7.3-95.2-1c-24.6-6.5-47.7-18.2-67.6-34.1C67,328.9,49.6,307.5,37.5,283.5z" fill="#34A853" /></g></g></svg></span>
                        <span>Sign in with Google</span>
                    </button>
                    <button onClick={handleGithubClick} className="bg-cyan-500 flex text-xl p-2 rounded-lg w-72 items-center justify-evenly h-16 cursor-pointer">
                        <span>
                            <svg height="40px" viewBox="0 0 512 512" width="40px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g><path d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z" /></g></svg>
                        </span>
                        <span>Sign in with GitHub</span>
                    </button>
                    <button className="bg-black flex text-xl p-2 rounded-lg w-72 items-center justify-evenly h-16 cursor-pointer text-white">
                        <span>
                        <svg  height="40px" viewBox="0 0 56.693 56.693" width="40px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z"/></svg>
                        </span>
                        <span>Sign in with X</span>
                    </button>
                    <div className="flex items-center w-full mt-3">
                        <hr className="h-0.5 bg-indie-200 w-full" />
                        <span className="mx-4 text-indie-200">or</span>
                        <hr className="h-0.5 bg-indie-200 w-full" />
                    </div>
                    <form onSubmit={handleClick} className="w-full text-indie-200 flex flex-col gap-2 mt-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="email@example.com" className="border-2 border-indie-200 rounded-sm p-2" onChange={handleChange} />
                        <button className="bg-veronica-700 text-xl p-2 rounded-lg w-72 text-indie-100 h-16 mt-2 cursor-pointer">Sign in with Email</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;