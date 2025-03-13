import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, endLoading, logOutUser, startLoading, updateUsername } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { persistor } from '../store';
import { useNavigate } from "react-router-dom";
import { toastStyles } from "../utils/helper";
import Spinner from "../ui/Spinner"

function Account() {
  const username = useSelector((state) => state.user.username.username) || null;
  const [user, setUsername] = useState("");
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const usernameState = useSelector((state) => state.user.username);
  const loading = useSelector((state) => state.user.loading);
  const [load,setLoad]=useState(false);
  function handleChange(e) {
    setUsername(e.target.value);
  }

  const handleUsernameSubmit = async (e) => {
    e.preventDefault();
    dispatch(startLoading()) ; 
    try {
      if (Object.keys(usernameState).length === 0) {
        toast.error("Username not created yet!",toastStyles);
        dispatch(endLoading()) ; 
        return;
      }
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/username/update/${usernameState._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: user }),
      })
      console.log("Response from username update is : ", res);
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message,toastStyles);
        dispatch(endLoading()) ; 
        return;
      }
      console.log("Data is : ", data);
      dispatch(updateUsername(data));
      toast.success("Username Updated Successfully!",toastStyles);
      dispatch(endLoading()) ; 
    }
    catch (error) {
      toast.error(error.message, toastStyles);
      dispatch(endLoading()) ; 
    }
  }
  const handleLogOutClick = async () => {
    try {
      setLoad(true);
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/logout`, {
        method: 'GET',
      })

      const data = await res.json();
      if (data.success === true) {
        persistor.pause();
        await persistor.purge();
        toast.success("Logged out successfully!",toastStyles);
        dispatch(logOutUser());
        navigate('/');
        setLoad(false);
        return;
      }
      else {
        toast.error("Something went wrong!", toastStyles)
        setLoad(false);
      }
    } catch (error) {
      toast.error(error.message, toastStyles)
      console.log(error)
    }
  }

  const handleDeleteClick = async () => {
    try {
      console.log("Current User is : ", currentUser);
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      })

      const data = await res.json();
      if (data.success === true) {
        persistor.pause();
        await persistor.purge();
        toast.success("User deleted successfully!",toastStyles)
        dispatch(deleteUser());
        navigate('/');
        return;
      }
      else {
        toast.error("Something went wrong!", toastStyles)
      }
    } catch (error) {
      toast.error(error.message, toastStyles)
      console.log(error)
    }
  }


  const handleCopy = () => {
    if (!username) {
      toast.error("Please enter a username first!", toastStyles)
      return;
    }
    navigator.clipboard.writeText(`myfolio.tech/${username}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if(load)
    return <Spinner/>

  return (
    <div className="grid lg:gap-6 md:gap-4 gap-3 mx-auto lg:w-full xl:w-[40vw] w-[80vw] px-10 text-[10px] md:text-[16px]">
      <div className="bg-indie-700 rounded-2xl md:p-8 p-5 font-poppins text-indie-100">
        <form
          className="flex flex-col md:gap-6 gap-4 text-start"
          onSubmit={handleUsernameSubmit}
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
              disabled={user === "" || loading}
            >
              {loading ? "UPDATING..." : "UPDATE"}
            </button>
          </div>
        </form>
      </div>
      <div className="bg-indie-700 rounded-2xl md:p-8 p-5 font-poppins text-indie-100">
        <div className="flex flex-col md:gap-6 gap-4 text-start">
          <h1>MyFolio Domain</h1>
          <div className="flex justify-between items-center">
            <p>https://myfolio.tech/{username}</p>
            <button
              onClick={handleCopy}
              className="md:p-3 md:rounded-xl p-2 rounded-md bg-veronica-600 hover:bg-indie-400 cursor-pointer transition-colors duration-200"
            >
              {copied ? "COPIED!" : "COPY"}
            </button>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-indie-400"></div>
      <div className="flex justify-end gap-4">
        <button onClick={handleDeleteClick} className="p-3 rounded-xl hover:bg-red-500 cursor-pointer transition-colors duration-200">DELETE</button>
        <button onClick={handleLogOutClick} className="p-3 rounded-xl hover:bg-indie-400 cursor-pointer transition-colors duration-200">LOGOUT</button>
      </div>
    </div>
  );
}
export default Account;
