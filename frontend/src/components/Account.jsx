import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsername } from "../features/user/userSlice";

function Account() {
  const username = useSelector((state) => state.user.username);
  const [user, setUsername] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setUsername(e.target.value);
  }
  function changeUsername(e) {
    e.preventDefault();
    dispatch(addUsername(user));
    setUsername("");
  }

  return (
    <div className="flex flex-col gap-8 bg-indie-700 rounded-2xl p-8 font-poppins text-indie-100 w-[40vw] mx-auto">
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
            className={`p-3 rounded-xl bg-indie-400 ${
              user !== ""
                ? "bg-veronica-700 hover:bg-veronica-800 cursor-pointer transition-colors duration-200"
                : ""
            }`}
            disabled={user === ""}
          >
            UPDATE
          </button>
        </div>
      </form>
      <form
        className="flex flex-col gap-6 text-start"
      >
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
  );
}
export default Account;
