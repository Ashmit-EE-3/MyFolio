import { motion } from "motion/react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUsername } from "../features/user/userSlice";
import { Slide, toast } from "react-toastify";

function Landing() {
  const nam = useSelector((state) => state.user.username?.username) || ""
  const [name, setName] = useState(nam);
  const authenticated = useSelector((state) => state.user.isAuthenticated);
  const username = useSelector((state) => state.user.username?.username)
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (authenticated) {
      if (username && username === name) {
        navigate("/admin");
      }
      else if (username && username !== name) {
        toast.error("Username already created!", {
          position: "top-center",
          autoClose: 1000,
          transition: Slide,
          style: {
            width: "auto",
            whiteSpace: "nowrap",
            padding: "12px 20px",
            fontFamily: "Poppins",
          },
        })
      }
      else {
        try {
          const formData = {
            username: name,
            userId: currentUser._id,
          }
          const res = await fetch('/api/v1/username/create', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
          const data = await res.json();
          if (!res.ok) {
            toast.error(data.message, {
              position: "top-center",
              autoClose: 1000,
              transition: Slide,
              style: {
                width: "auto",
                whiteSpace: "nowrap",
                padding: "12px 20px",
                fontFamily: "Poppins",
              },
            })
            return;
          }
          dispatch(addUsername(data)); 
          toast.success("Username Created!",{
            position: "top-center",
            autoClose: 1000,
            transition: Slide,
            style: {
              width: "auto",
              whiteSpace: "nowrap",
              padding: "12px 20px",
              fontFamily: "Poppins",
            },
          });
          navigate("/admin");
        }
        catch (error) {
          console.log("Error from landing is : ", error);
          toast.error(error.message,{
            position: "top-center",
            autoClose: 1000,
            transition: Slide,
            style: {
              width: "auto",
              whiteSpace: "nowrap",
              padding: "12px 20px",
              fontFamily: "Poppins",
            },
          });
        }
      }
    } else {
      try{
        console.log(`Hi ${name}`) ; 
        const res = await fetch(`/api/v1/username/findUser/${name}`, {
          method: "GET",
        }) ;
        if (!res.ok) {
          toast.error("Internal Server Error!", {
            position: "top-center",
            autoClose: 1000,
            transition: Slide,
            style: {
              width: "auto",
              whiteSpace: "nowrap",
              padding: "12px 20px",
              fontFamily: "Poppins",
            },
          })
          return; 
        }
        const data = await res.json()  ;
        if (data === "Username already exist!"){
          toast.error(data, {
            position: "top-center",
            autoClose: 1000,
            transition: Slide,
            style: {
              width: "auto",
              whiteSpace: "nowrap",
              padding: "12px 20px",
              fontFamily: "Poppins",
            },
          })
          return ; 
        } 
        dispatch(addUsername({username: name})) ; 
        navigate("/login") ; 
      }
      catch(error){
        console.log("Error from landing is : ", error);
        toast.error(error.message,{
          position: "top-center",
          autoClose: 1000,
          transition: Slide,
        })
      }
    }
  };
  return (
    <form id="signup" className='flex flex-col items-center md:gap-10 gap-6 md:py-40 md:px-20 py-10 px-4 landing' onSubmit={handleSubmit}>
      <header className="font-extrabold xl:text-7xl md:text-5xl sm:text-2xl text-xl text-indie-100">Showcase your skills!</header>
      <div className=' flex flex-col sm:gap-2.5 gap-1'>
        <motion.div className="flex border-1 border-indie-100 text-sm md:text-lg items-center md:h-12 h-10 bg-gray-800 text-white rounded-lg p-3 md:w-120 sm:w-80 w-60 mx-auto"
          animate={{
            boxShadow:
              "0px 0px 10px #C2CBF5",
          }}
          transition={{ duration: 1, repeat: Infinity, delay: 1 }}>
          <span className="text-indie-100">myfolio.tech/</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="yourname"
            className="bg-transparent text-white placeholder-gray-500 focus:outline-none w-full "
          />
        </motion.div>
        <motion.button className="bg-veronica-300 cursor-pointer p-3 md:h-12 h-10 text-sm md:text-lg font-semibold rounded-md bg-veronica-700 text-indie-800 md:w-120 mx-auto sm:w-80 w-60 flex items-center justify-center gap-2 group focus:outline-none"
          whileHover={{ scale: 1.05, backgroundColor: "#7B2CBF" }}
          transition={{ duration: 0.1 }}><p>CLAIM MY FOLIO PAGE</p><span className='font-bold group-hover:translate-x-1 transition-transform duration-300 ease-in-out'>→</span></motion.button>
      </div>
    </form>
  )
}

export default Landing