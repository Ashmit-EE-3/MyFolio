import React from 'react'
import { useNavigate } from 'react-router-dom';
import { addLogInCredentials } from '../features/user/userSlice';
import app from '../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, sendSignInLinkToEmail } from "firebase/auth";
import { useDispatch } from 'react-redux';

function OAuth({provider,Icon,name}) {
    const navigate = useNavigate() ; 
    const dispatch = useDispatch() ;
    const handleClick = async () => {
        try {
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            console.log('Result is : ',result.user.displayName,result.user.email,result.user.photoURL) ; 
            const res = await fetch('api/v1/auth/oAuth',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL,
                })
            })
            const data = res.json() ; 
            data
            .then((dataResult)=>{
                console.log(dataResult) ; 
                dispatch(addLogInCredentials(dataResult)) ;
                navigate('/admin') ; 
            })
            .catch((err)=>{
                console.log(err) ; 
            })
        }
        catch (error) {
            console.log(error);
        }
    }
    
    return (
        <button onClick={handleClick} className="bg-indie-100 flex text-xl p-2 rounded-lg w-72 items-center justify-evenly h-16 cursor-pointer">
            <Icon className='h-10 w-10' color='Black' />
            <span>Sign in with {name}</span>
        </button>
    )
}

export default OAuth ; 