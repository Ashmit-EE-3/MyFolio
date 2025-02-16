import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsername, deleteUser, logOutUser } from "../features/user/userSlice";
import { Slide, toast, ToastContainer } from "react-toastify";
import { FaFaceSmile } from "react-icons/fa6";

function Account() {
  const username = useSelector((state) => state.user.username);
  const [user, setUsername] = useState("");
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
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
        toast.success("User deleted successfully!", {
          position: 'top-center',
          autoClose: 1000,
          transition: Slide,
          style: {
            width: "auto",
            whiteSpace: "nowrap",
            padding: "12px 20px"
          }
        })
        dispatch(deleteUser());
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

  function changeUsername(e) {
    e.preventDefault();
    dispatch(addUsername(user));
    setUsername("");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`indiepa.ge/${username}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid gap-6 mx-auto w-[40vw]">
      <div className="bg-indie-700 rounded-2xl p-8 font-poppins text-indie-100">
        <form
          className="flex flex-col gap-6 text-start"
          onSubmit={changeUsername}
        >
          <label className="text-xl">Change Username</label>
          <div className="flex gap-2">
            <input
              placeholder={username || "Enter Username"}
              type="text"
              className="border-2 rounded-lg h-12 focus:outline-none focus:ring focus:ring-indie-200 focus-ring-offset-1
            placeholder:opacity-30 p-4 w-full"
              value={user}
              onChange={handleChange}
              required
            />
            <button
              className={`p-3 rounded-xl bg-indie-400 ${user !== ""
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
      <div className="bg-indie-700 rounded-2xl p-8 font-poppins text-indie-100">
        <div className="flex flex-col gap-6 text-start">
          <h1 className="text-xl">MyFolio Domain</h1>
          <div className="flex justify-between items-center">
            <p>indiepa.ge/{username}</p>
            <button
              onClick={handleCopy}
              className="p-3 rounded-xl bg-veronica-600 hover:bg-indie-400 cursor-pointer transition-colors duration-200"
            >
              {copied ? "COPIED!" : "COPY"}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-indie-700 rounded-2xl p-8 font-poppins text-indie-100">
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
      </div>
      <div className="border-b-2 border-indie-400"></div>
      <div className="flex justify-end gap-4">
        <button onClick={handleDeleteClick} className="p-3 rounded-xl hover:bg-red-500 cursor-pointer transition-colors duration-200">DELETE</button>
        <button onClick={handleLogOutClick} className="p-3 rounded-xl hover:bg-indie-400 cursor-pointer transition-colors duration-200">LOGOUT</button>
        <ToastContainer limit={2} hideProgressBar />
      </div>

    </div>
  );
}
export default Account;
