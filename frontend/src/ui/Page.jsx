import { useDispatch, useSelector } from "react-redux";
import AdminIcons from "../components/AdminIcons";
import { useState } from "react";
import {
  addLocation,
  addPdf,
  addSkills,
  addUsername,
} from "../features/user/userSlice";
import Project from "../components/Project";
import { CiLocationOn } from "react-icons/ci";
import UserDetails from "../components/UserDetails";
import { GiSkills } from "react-icons/gi";
import { PiReadCvLogo } from "react-icons/pi";
import { IoCloudUploadOutline } from "react-icons/io5";

function Page() {
  const name = useSelector((state) => state.user.currentUser.displayName);
  const imgURL = useSelector((state) => state.user.currentUser.avatar);
  const submit = useSelector((state) => state.user.submit);

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [Location, setLocation] = useState("");
  const [skill, setSkill] = useState("");
  const [selected, setSelected] = useState({
    Location: false,
    Skills: false,
    Resume: false,
  });
  const [, setPdfFile] = useState(null);
  const [pdfName, setPdfName] = useState("");

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUsername(username));
  }

  function handleLocation(e) {
    setLocation(e.target.value);
  }

  function handleLocationSubmit(e) {
    e.preventDefault();
    dispatch(addLocation(Location));
    setSelected((prev) => ({ ...prev, Location: !prev.Location }));
  }

  function handleSkills(e) {
    setSkill(e.target.value);
  }

  function handleSkillSubmit(e) {
    e.preventDefault();
    dispatch(addSkills(skill));
    setSkill("");
  }

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = () => {
        setPdfFile(file);
        setPdfName(file.name);
        dispatch(addPdf({
          file: reader.result,
          name: file.name
        }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a PDF file");
    }
  }
  
  return (
    <div className="flex flex-col gap-4 font-poppins m-auto overflow-y-scroll h-full">
      {!submit && (
        <div className="flex flex-col w-[50vw] m-auto bg-indie-700 rounded-2xl text-start p-6 gap-4">
          <h1 className="text-yellow-200">
            ⚠ Create a username to get a public page
          </h1>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              placeholder="username"
              type="text"
              value={username}
              className="p-4 border-[1px] rounded-lg h-12 placeholder:opacity-30 bg-indie-500 focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"
              required
              onChange={handleChange}
            />
            <button
              className="bg-veronica-700 text-indie-600 p-2 rounded-lg h-12 tracking-wide font-semibold hover:bg-veronica-800
            transition duration-200 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 cursor-pointer"
            >
              CREATE USERNAME
            </button>
          </form>
        </div>
      )}
      <div className="flex flex-col w-[50vw] bg-indie-700 rounded-2xl font-poppins text-indie-100">
        <form className="flex gap-5 p-6 text-xl items-center">
          <div className="relative h-14 w-14 group">
            <input type="picture" className="hidden" />
            <svg
              className="absolute top-0 left-0 h-8 w-8 z-20  translate-x-1/4 translate-y-1/4 opacity-60 bg-indie-400 rounded-lg group-hover:opacity-100 focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="white"
            >
              <g>
                <path d="M417.5,160h-61.7c-32.1-36-42.2-48-54.5-48h-88.5c-12.3,0-22.2,12-54.5,48H145v-16h-34v16H97.5C79.9,160,64,173.2,64,190.7 v176c0,17.5,15.9,33.3,33.5,33.3h320c17.6,0,30.5-15.8,30.5-33.3v-176C448,173.2,435.1,160,417.5,160z M432,366.7 c0,9.3-6.2,17.3-14.5,17.3h-320c-8.7,0-17.5-8.7-17.5-17.3v-176c0-8.2,8.1-14.7,17.5-14.7h60.7h7.1l4.8-3.2c4-4.5,7.7-10,11.1-13.8 c11.3-12.7,19.5-21.7,25.3-26.9c4.7-4.2,6.2-4.1,6.2-4.1h88.5c0,0,1.6-0.1,6.7,4.5c6.1,5.5,14.7,16.5,26.6,29.8 c2.9,3.3,6,6.8,9.3,10.5l4.8,3.2h7.2h61.7c8.8,0,14.5,6,14.5,14.7V366.7z" />
                <path d="M256,189.5c-47.1,0-85.5,38.4-85.5,85.5s38.4,85.5,85.5,85.5s85.5-38.4,85.5-85.5S303.1,189.5,256,189.5z M256,344.5 c-38.4,0-69.5-31.1-69.5-69.5s31.1-69.5,69.5-69.5s69.5,31.1,69.5,69.5S294.4,344.5,256,344.5z" />
                <rect x="352" y="192" />
                <circle cx="256" cy="275" r="32" />
              </g>
            </svg>
            <img
              src={imgURL}
              className="rounded-full group-hover:opacity-60"
              alt="avatar"
            />
          </div>
          <input
            type="text"
            placeholder="Your name"
            defaultValue={name}
            className="w-full p-2 rounded-lg focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1 placeholder:opacity-50 placeholder:text-base"
          />
        </form>
        <form className="px-6">
          <textarea
            placeholder="I quit my 9-5 job to work 24/7 on my startup"
            type="text"
            className="h-28 w-full placeholder:text-base p-4 rounded-lg focus:ring focus:ring-indie-300 focus:ring-offset-1 placeholder:opacity-50 bg-indie-500"
          ></textarea>
        </form>
        <div className="flex gap-2 items-center mt-2 mb-2">
          <UserDetails
            selected={selected}
            setSelected={setSelected}
            Icon={CiLocationOn}
            text="Location"
          />
          <UserDetails
            selected={selected}
            setSelected={setSelected}
            Icon={GiSkills}
            text="Skills"
          />
          <UserDetails
            selected={selected}
            setSelected={setSelected}
            Icon={PiReadCvLogo}
            text="Resume"
          />
        </div>
        {selected.Location && (
          <form
            className="flex flex-col gap-3 text-start px-6 py-2"
            onSubmit={handleLocationSubmit}
          >
            <div className="border-t-2 border-indie-300/10 ml-2 mr-2"></div>
            <label>Where are you based</label>
            <div className="flex items-center border-2 border-indie-100/10 rounded-sm">
              <div className="bg-indie-400 border-r-2 border-indie-100/10 p-3 inline-block h-12">
                <span className> 🌴 </span>
              </div>
              <input
                placeholder="Location"
                type="text"
                className="p-4 h-12 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"
                value={Location}
                onChange={handleLocation}
              />
            </div>
          </form>
        )}
        {selected.Skills && (
          <form
            className="flex flex-col gap-3 text-start px-6 py-2"
            onSubmit={handleSkillSubmit}
          >
            <div className="border-t-2 border-indie-300/10 ml-2 mr-2"></div>
            <label>Where are your Skills</label>
            <div className="flex items-center border-2 border-indie-100/10 rounded-sm">
              <div className="bg-indie-400 border-r-2 border-indie-100/10 p-3 inline-block h-12">
                <span className> 🧠 </span>
              </div>
              <input
                placeholder="Add Skills"
                type="text"
                className="p-4 h-12 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"
                value={skill}
                onChange={handleSkills}
              />
            </div>
          </form>
        )}
        {selected.Resume && (
          <div className="px-6 py-2">
            <input 
              type="file" 
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="pdf-upload"
            />
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => document.getElementById('pdf-upload').click()}
                className="bg-veronica-700 hover:bg-veronica-800 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 cursor-pointer px-6 py-2 rounded-lg text-indie-600 font-semibold tracking-wide transition duration-200 flex items-center gap-2 justify-center"
              >
                <span><IoCloudUploadOutline style={{ color: '#22222A' }} size={28}/></span>
                {pdfName || "UPLOAD CV"}
              </button>
              {pdfName && (
                <p className="text-sm text-indie-300">Selected file: {pdfName}</p>
              )}
            </div>
          </div>
        )}
      </div>
      <h1 className="text-xl">Your failures, successes and everything in between!</h1>
      <Project />
      <AdminIcons />
    </div>
  );
}
export default Page;
