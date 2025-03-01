/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { addLogInCredentials, addUserDetails, addUsername } from '../features/user/userSlice';
import app from '../firebase';
import { getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addSocial } from '../features/socials/socialSlice';
import { addProjectLogin } from '../features/project/projectSlice';
import { motion } from 'motion/react';

function OAuth({ provider, Icon, name }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchProfile = async (id) => {
        try {
            const res = await fetch(`/api/v1/profile/get/${id}`, {
                method: "GET"
            })
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message);
            }
            console.log("Profile is : ", data);
            dispatch(addUserDetails(data));

        }
        catch (error) {
            console.log(error)
        }
    }
    const fetchProjects = async (id) => {
        try {
            const res = await fetch(`/api/v1/project/get/${id}`, {
                method: "GET",
            })
            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message)
            }
            console.log("Projects are : ", data);

            dispatch(addProjectLogin(data))

        }
        catch (error) {
            console.log(error)
        }
    }
    const fetchUsername = async (id) => {
        try {
            const res = await fetch(`/api/v1/username/get/${id}`, {
                method: "GET"
            })
            const data = await res.json();
            console.log("User Response is : ", res)
            if (!res.ok) {
                toast.error(data.message)
            }

            if (!data || !data.username) {
                return;
            }
            console.log("Username is : ", data);

            dispatch(addUsername(data))

        }
        catch (error) {
            console.log(error)
        }
    }
    const fetchSocials = async (id) => {
        try {
            const res = await fetch(`api/v1/social/get/${id}`, {
                method: "GET"
            })
            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message)
            }
            console.log("Socials are : ", data);

            dispatch(addSocial(data));

        }
        catch (error) {
            console.log(error)
        }
    }
    const handleClick = async () => {
        try {
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const formData = {
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
            };

            console.log("Form Data is : ", formData);
            const res = await fetch('api/v1/auth/oAuth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
            }
            console.log(data);
            dispatch(addLogInCredentials(data));
            fetchProjects(data._id) ; 
            fetchProfile(data._id) ; 
            fetchUsername(data._id) ;
            fetchSocials(data._id) ; 
            navigate('/admin') ; 
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <motion.button onClick={handleClick} className="bg-indie-100 flex text-xl md:p-2 p-1 rounded-lg w-full items-center justify-evenly md:h-16 h-12 cursor-pointer"
        whileHover={{scale:0.95}}>
            <Icon className='lg:h-10 lg:w-10 h-6 w-6' color='Black' />
            <span className='text-[10px] md:text-sm lg:text-xl'>Sign in with {name}</span>
        </motion.button>
    )
}

export default OAuth; 