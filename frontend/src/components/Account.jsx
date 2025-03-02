import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsername, deleteUser, logOutUser } from "../features/user/userSlice";
import { Slide, toast} from "react-toastify";
import {persistor} from '../store' ; 
import { useNavigate } from "react-router-dom";

function Account() {
  const username = useSelector((state) => state.user.username.username)||null;
  const [user, setUsername] = useState("");
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate() ; 
  const currentUser = useSelector((state) => state.user.currentUser) ;
  function handleChange(e) {
    setUsername(e.target.value);
  }

  const handleLogOutClick = async () => {
    try {
      const res = await fetch('/api/v1/auth/logout', {
        method: 'GET',
      })

      const data = await res.json();
      if (data.success === true) {
        persistor.pause() ; 
        await persistor.purge() ;
        toast.success("Logged out successfully!", {
          position: 'top-center',
          autoClose: 1000,
          transition: Slide,
          style: {
            width: "auto",
            whiteSpace: "nowrap",
            padding: "12px 20px"
          }
        })
        dispatch(logOutUser());
        navigate('/') ; 
        return;
      }
      else {
        toast.error("Something went wrong!", {
          position: 'top-center',
          autoClose: 1000,
          transition: Slide,
          style: {
            width: "auto",
            whiteSpace: "nowrap",
            padding: "12px 20px"
          }
        })
      }
    } catch (error) {
      toast.error(error, {
        position: 'top-center',
        autoClose: 1000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px"
        }
      })
      console.log(error)
    }
  }

  const handleDeleteClick = async () => {
    try {
      console.log("Current User is : ",currentUser) ;
      const res = await fetch(`/api/v1/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      })

      const data = await res.json();
      if (data.success === true) {
        persistor.pause() ; 
        await persistor.purge() ; 
        toast.success("User deleted successfully!", {
          position: 'top-center',
          autoClose: 1000,
          transition: Slide,
          style: {
            width: "auto",
            whiteSpace: "nowrap",
            padding: "12px 20px",
            fontFamily: "Poppins"
          }
        })
        dispatch(deleteUser());
        navigate('/') ; 
        return;
      }
      else {
        toast.error("Something went wrong!", {
          position: 'top-center',
          autoClose: 1000,
          transition: Slide,
          style: {
            width: "auto",
            whiteSpace: "nowrap",
            padding: "12px 20px",
            fontFamily: "Poppins"
          }
        })
      }
    } catch (error) {
      toast.error(error, {
        position: 'top-center',
        autoClose: 1000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px",
          fontFamily: "Poppins"
        }
      })
      console.log(error)
    }
  }

  function changeUsername(e) {
    e.preventDefault();
    dispatch(addUsername({username:user}));
    setUsername("");
  }

  const handleCopy = () => {
    if(!username)
    {
      toast.error("Please enter a username first!", {
        position: 'top-center',
        autoClose: 1000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px",
          fontFamily: "Poppins"
        }
      })
      return;
    }
    navigator.clipboard.writeText(`indiepa.ge/${username}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid lg:gap-6 md:gap-4 gap-3 mx-auto lg:w-full xl:w-[40vw] w-[80vw] px-10 text-[10px] md:text-[16px]">
      <div className="bg-indie-700 rounded-2xl md:p-8 p-5 font-poppins text-indie-100">
        <form
          className="flex flex-col md:gap-6 gap-4 text-start"
          onSubmit={changeUsername}
        >
          <label>Change Username</label>
          <div className="flex gap-2">
            <input
              placeholder={username || "Enter Username"}
              type="text"
              className="border-2 rounded-lg md:h-12 h-8 focus:outline-none focus:ring focus:ring-indie-200 focus-ring-offset-1
            placeholder:opacity-30 md:p-4 p-2 w-full"
              value={user}
              onChange={handleChange}
              required
            />
            <button
              className={`md:p-3 p-2 md:rounded-xl rounded-md bg-indie-400 ${user !== ""
                ? "bg-veronica-700 hover:bg-veronica-800 cursor-pointer transition-colors duration-200"
                : ""
                }`}
              disabled={user === ""}
            >
              UPDATE
            </button>
          </div>
        </form>
      </div>
      <div className="bg-indie-700 rounded-2xl md:p-8 p-5 font-poppins text-indie-100">
        <div className="flex flex-col md:gap-6 gap-4 text-start">
          <h1>MyFolio Domain</h1>
          <div className="flex justify-between items-center">
            <p>indiepa.ge/{username}</p>
            <button
              onClick={handleCopy}
              className="md:p-3 md:rounded-xl p-2 rounded-md bg-veronica-600 hover:bg-indie-400 cursor-pointer transition-colors duration-200"
            >
              {copied ? "COPIED!" : "COPY"}
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-indie-700 rounded-2xl p-8 font-poppins text-indie-100">
        <form className="flex flex-col gap-6 text-start">
          <label className="text-xl">Custom Domain</label>
          <div className="flex gap-2">
            <input
              placeholder="example.com"
              type="text"
              className="border-2 rounded-lg h-12 focus:outline-none focus:ring focus:ring-indie-200 focus-ring-offset-1
            placeholder:opacity-30 p-4 w-full"
            />
            <button className="p-3 rounded-xl bg-veronica-700 hover:bg-veronica-800 cursor-pointer transition-colors duration-200">
              SAVE
            </button>
          </div>
        </form>
      </div> */}
      <div className="border-b-2 border-indie-400"></div>
      <div className="flex justify-end gap-4">
        <button onClick={handleDeleteClick} className="p-3 rounded-xl hover:bg-red-500 cursor-pointer transition-colors duration-200">DELETE</button>
        <button onClick={handleLogOutClick} className="p-3 rounded-xl hover:bg-indie-400 cursor-pointer transition-colors duration-200">LOGOUT</button>
      </div>
    </div>
  );
}
export default Account;
