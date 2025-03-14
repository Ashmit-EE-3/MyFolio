/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { addLogInCredentials, addUserDetails, addUsername, endLoading, startLoading } from '../features/user/userSlice';
import app from '../firebase';
import { getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addSocial } from '../features/socials/socialSlice';
import { addProjectLogin } from '../features/project/projectSlice';
import { motion } from 'motion/react';
import { toastStyles } from '../utils/helper';

function OAuth({ provider, Icon, name, onError }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.loading)
    const username = useSelector((state)=>state.user.username?.username) ; 
    const fetchProfile = async (id) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/profile/get/${id}`, {
                method: "GET"
            })
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message, toastStyles);
            }
            console.log("Profile is : ", data);
            dispatch(addUserDetails(data));

        }
        catch (error) {
            toast.error(error.message, toastStyles);
            console.log(error)
        }
    }
    const fetchProjects = async (id) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/project/get/${id}`, {
                method: "GET",
            })
            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message, toastStyles);
            }
            console.log("Projects are : ", data);

            dispatch(addProjectLogin(data))

        }
        catch (error) {
            toast.error(error.message, toastStyles);
            console.log(error)
        }
    }
    const fetchUsername = async (id) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/username/get/${id}`, {
                method: "GET"
            })
            const data = await res.json();
            console.log("User Response is : ", res)
            if (!res.ok) {
                toast.error(data.message, toastStyles);
                dispatch(endLoading()) ; 
                return ; 
            }

            if (username){
                if (!data || !data.username){
                    const formData = {
                        username : username,
                        userId: id,
                    }
                    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/username/create`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    })
                    const data = await res.json();
                    if (!res.ok){
                        toast.error(data.message, toastStyles) ; 
                    }
                    toast.success(data.message, toastStyles) ; 
                    dispatch(addUsername(data)) ; 
                }
                else {
                    if (username !== data.username){
                        toast.error("Username already created!", toastStyles) ; 
                        dispatch(addUsername(data)) ; 
                        return ; 
                    }
                    
                }
            }
            else {
                if (!data || !data.username){
                    dispatch(endLoading()) ; 
                    return ; 
                }
                else {
                    dispatch(addUsername(data)) ; 
                }
            }
            dispatch(endLoading()) ; 
        }
        catch (error) {
            console.log("Error from username is : ", error);
        }
    }
    const fetchSocials = async (id) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/social/get/${id}`, {
                method: "GET"
            })
            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message, toastStyles);
            }
            console.log("Socials are : ", data);

            dispatch(addSocial(data));

        }
        catch (error) {
            toast.error(error.message, toastStyles);
            console.log(error)
        }
    }
    const handleClick = async () => {
        dispatch(startLoading());
        try {
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const formData = {
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
            };

            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/oAuth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message, toastStyles);
                dispatch(endLoading());
                return;
            }

            dispatch(addLogInCredentials(data));

            await Promise.all([
                fetchProjects(data._id),
                fetchProfile(data._id),
                fetchUsername(data._id),
                fetchSocials(data._id)
            ]);
            dispatch(endLoading());
            navigate('/admin', { replace: true });
        }
        catch (error) {
            console.log("Error from firebase is : ", error.message);
            toast.error(error.message, toastStyles);
            onError(error.message);
            dispatch(endLoading());
        }
    }

    return (
        loading ?
            (<motion.button disabled={loading} onClick={handleClick} className="bg-indie-100 flex text-xl md:p-2 p-1 rounded-lg w-full items-center justify-center md:h-16 h-12 cursor-pointer disabled:opacity-50"
                whileHover={{ scale: 0.95 }}>
                <div className='flex items-center gap-2'>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-600 border-t-transparent"></div>
                    <span className='text-[10px] md:text-sm lg:text-xl'>Signing in...</span>
                </div>
            </motion.button>) :
            (<motion.button onClick={handleClick} className="bg-indie-100 flex text-xl md:p-2 p-1 rounded-lg w-full items-center justify-evenly md:h-16 h-12 cursor-pointer"
                whileHover={{ scale: 0.95 }}>
                <Icon className='lg:h-10 lg:w-10 h-6 w-6' color='Black' />
                <span className='text-[10px] md:text-sm lg:text-xl'>Sign in with {name}</span>
            </motion.button>)
    )
}

export default OAuth; 