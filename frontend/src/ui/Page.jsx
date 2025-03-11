import { useDispatch, useSelector } from "react-redux";
import SocialIcons from "../features/socials/SocialIcons";
import { useRef, useState } from "react";
import {
  addUserDetails,
  addUsername,
  endLoading,
  startLoading,
  updateUser,
} from "../features/user/userSlice";
import Project from "../features/project/Project";
import { GiSkills } from "react-icons/gi";
import { IoDocumentText, IoLanguageSharp } from "react-icons/io5";
import { Slide, toast } from "react-toastify";
import { IoMdSchool } from "react-icons/io";
import { motion } from "motion/react"
import Techstack from "../features/user/Techstack";
import UserDetails from "../features/user/UserDetails";
import UserLanguages from "../features/user/UserLanguages";
import CVUpload from "../features/user/CVUpload";
import Mobile from "./Mobile";
import ShowProject from "../features/project/ShowProject";
import { MdLocationPin } from "react-icons/md";
import { toastStyles } from "../utils/helper";

function Page() {
  const submit = useSelector((state) => state.user.submit);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const userDetails = useSelector((state) => state.user.userDetails);
  const loading = useSelector((state) => state.user.loading)
  const [formData, setFormData] = useState(currentUser);
  const [userData, setUserData] = useState(userDetails);
  const typingTimeout = useRef(null);
  const [username, setUsername] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [selected, setSelected] = useState({
    Location: false,
    Languages: false,
    Resume: false,
    Skills: false,
    certificate: false,
    College: false,
  });
  const [cv, setCv] = useState(null);
  const projects = useSelector((state) => state.project?.project);
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [showMarkdownGuide, setShowMarkdownGuide] = useState(false);

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleDisplayNameChange(e) {
    const newValue = e.target.value;

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }
    dispatch(startLoading());
    typingTimeout.current = setTimeout(() => {
      setFormData((prevData) => ({ ...prevData, displayName: newValue }));
      handleUserSubmit({ ...formData, displayName: newValue });
    }, 2000);
  }

  async function handleProfileImageUpload(e) {
    setIsUploading(true);
    const file = e.target.files[0];
    if (file && /^image\/(jpeg|png|jpg)$/.test(file.type)) {
      console.log("Image uploaded:", file);
    } else {
      alert("Please upload a JPG, JPEG or PNG file");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "tch_image_upload");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dn17alkhg/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      throw new Error("Cloudinary Upload Error!");
    }

    const data = await res.json();
    const imageURL = data.secure_url;
    setFormData((prevData) => ({ ...prevData, photoURL: imageURL }));
    await handleUserSubmit({ ...formData, photoURL: imageURL });
    setIsUploading(false);
  }

  const handleUserSubmit = async (updatedFormData) => {
    try {
      console.log("Form Data is : ", updatedFormData);
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });
      const data = await res.json();
      if (data.success === false) {
        toast.error(data.message,toastStyles);
        return;
      }
      dispatch(updateUser(data));
      dispatch(endLoading());
      toast.success("Saved!", toastStyles);
    } catch (error) {
      console.log(error);
      toast.error(error, toastStyles);
    }
  };

  function handleAbout(e) {
    const newAbout = e.target.value;

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }
    dispatch(startLoading());
    typingTimeout.current = setTimeout(() => {
      setUserData((prevData) => ({ ...prevData, about: newAbout }));
      handleUserDetails({ ...userData, about: newAbout });
    }, 2000);
  }

  function handleLocation(e) {
    const newLocation = e.target.value;

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }
    dispatch(startLoading());
    typingTimeout.current = setTimeout(() => {
      setUserData((prevData) => ({ ...prevData, location: newLocation }));
      handleUserDetails({ ...userData, location: newLocation });
    }, 2000);
  }
  function handleCollege(e) {
    const newCollege = e.target.value;

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }
    dispatch(startLoading());
    typingTimeout.current = setTimeout(() => {
      setUserData((prevData) => ({ ...prevData, college: newCollege }));
      handleUserDetails({ ...userData, college: newCollege });
    }, 2000);
  }

  async function handleUserDetails(data) {
    dispatch(startLoading());
    const updatedUserDetails = {
      ...data,
      userId: currentUser._id,
    };
    setUserData(updatedUserDetails);
    try {
      console.log("Updated User Details : ", updatedUserDetails);
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/profile/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUserDetails),
      });

      const data = await res.json();

      if (data.success === false) {
        toast.error(data.message, toastStyles);
        dispatch(endLoading());
        return;
      }

      toast.success("Saved!", toastStyles);

      console.log("Data is : ", data);
      dispatch(addUserDetails(data));
      dispatch(endLoading());
    } catch (error) {
      toast.error(error.message, toastStyles);
      dispatch(endLoading());
    }
  }

  async function handleUSubmit(e) {
    setUsernameLoading(true);
    e.preventDefault();
    try {
      const usernameData = {
        username: username,
        userId: currentUser._id,
      };
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/username/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usernameData),
      });
      const data = await res.json();

      if (res.ok === false) {
        toast.error(data.message, toastStyles);
        setUsernameLoading(false);
        return;
      }
      console.log("Data from username creation is : ", data);
      dispatch(addUsername(data));
      toast.success("Username Created!", toastStyles
      );
    } catch (error) {
      toast.error(error.message,toastStyles);
    }
    setUsernameLoading(false);
  }

  return (
    <div className="col-span-9 flex h-screen md:mx-auto lg:gap-8 overflow-hidden p-4 md:p-0">
      <div className="flex flex-col lg:gap-6 gap-3 md:gap-4.5 font-(family-name:--font-poppins) lg:h-full overflow-y-scroll mx-auto md:mx-0 overflow-x-hidden">
        {!submit && (
          <div className="flex flex-col xl:w-[50vw] bg-indie-700 rounded-2xl text-start lg:p-6 lg:gap-5 w-[98%] p-2 md:p-4 gap-2">
            <h1 className="text-yellow-200 text-[10px] md:text-sm lg:text-[16px]">
              ⚠ Create a username to get a public page
            </h1>
            <form
              className="flex flex-col lg:gap-4 sm:gap-3 gap-2"
              onSubmit={handleUSubmit}
            >
              <motion.input
                placeholder="username"
                type="text"
                value={username}
                className="border-indie-300/10 p-2 border-1 rounded-md md:h-12 h-8 placeholder:opacity-30 bg-indie-500 focus:outline-none placeholder:text-[10px] md:placeholder:text-sm lg:placeholder:text-[16px] text-xs md:text-sm lg:text-[16px]"
                required
                onChange={handleChange}
                whileFocus={{ boxShadow: "0px 0px 8px 8px #242631" }}
              />
              <motion.button
                whileHover={{ rotate: [1, 0.5, -1, -0.5, 0], scale: 0.98 }}
                transition={{ duration: 0.25 }}
                disabled={usernameLoading}
                className="bg-veronica-700 disabled:opacity-50 text-indie-600 p-2 rounded-lg sm:h-10 h-8 tracking-wide font-semibold hover:bg-veronica-800
            focus:outline-none cursor-pointer text-[10px] md:text-sm lg:text-[16px]"
              >
                {usernameLoading ? <div className="flex justify-center items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-600 border-t-transparent"></div>
                  Creating Username...
                </div> : <span>CREATE USERNAME</span>}
              </motion.button>
            </form>
          </div>
        )}
        <div className="flex flex-col lg:p-6 xl:w-[50vw] bg-indie-700 rounded-2xl text-indie-100 lg:gap-4 gap-2 sm:gap-3 w-[98%] mx-auto p-2 md:p-4">
          <form className="relative flex lg:gap-4 gap-2 items-center">
            <div
              onClick={() => document.getElementById("profile-upload").click()}
              className="relative lg:h-14 lg:w-14 w-10 h-10 group cursor-pointer aspect-square block p-0 m-0 object-cover"
            >
              <input
                type="file"
                onChange={handleProfileImageUpload}
                accept="image/jpeg, image/png, image/jpg"
                className="hidden"
                id="profile-upload"
              />
              {isUploading ? <div className="flex items-center justify-center absolute top-0 left-0 lg:h-8 lg:w-8 h-6 w-6 z-20 lg:translate-x-1/4 translate-x-1/3 translate-y-1/3 lg:translate-y-1/4 opacity-60 bg-indie-400 rounded-lg group-hover:opacity-100 focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-100 border-t-transparent"></div>
              </div> : <svg
                className="absolute top-0 left-0 lg:h-8 lg:w-8 h-6 w-6 z-20 lg:translate-x-1/4 translate-x-1/3 translate-y-1/3 lg:translate-y-1/4 opacity-60 bg-indie-400 rounded-lg group-hover:opacity-100 focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"
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
              </svg>}
              <img
                src={formData.photoURL}
                className="rounded-full lg:h-13 lg:w-13 w-10 h-10 aspect-square block p-0 m-0 object-cover group-hover:opacity-60"
              />
            </div>

            <input
              type="text"
              placeholder="Your name"
              onChange={handleDisplayNameChange}
              defaultValue={formData.displayName}
              className="w-full pr-8 p-2 lg:h-12 h-8 sm:h-10 rounded-md text-[10px] md:text-[16px] placeholder:opacity-30 placeholder:text-base focus:outline-none focus:ring focus:ring-indie-100"
            />
            {loading && document.activeElement === document.querySelector('input[placeholder="Your name"]') && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-100 border-t-transparent"></div>
              </div>
            )}
          </form>
          <form className="relative">
            <motion.textarea
              placeholder="About me..."
              type="text"
              whileFocus={{ boxShadow: "0px 0px 2px 2px #242631" }}
              defaultValue={userData?.about || ""}
              onChange={handleAbout}
              className="pr-8 border-indie-300/10 text-[10px] md:text-sm lg:text-[16px] md:h-28 h-18 w-full placeholder:text-[10px] md:placeholder:text-[14px] lg:placeholder:text-[16px] p-2 rounded-md focus:outline-none placeholder:opacity-30 bg-indie-500"
            ></motion.textarea>
            <div className="absolute bottom-0 right-0 p-2 text-[6px] md:text-[10px] lg:text-sm underline cursor-pointer" onMouseEnter={() => setShowMarkdownGuide(true)} onMouseLeave={() => setShowMarkdownGuide(false)}>Markdown guide</div>
            {showMarkdownGuide && <div className="absolute  bg-black text-white text-[6px] md:text-[10px] lg:text-sm right-0 translate-x-4 p-2 rounded-sm text-left flex flex-col gap-2">
              <p>Customize your about section using markdowns ✨</p>
              <p>**text** → For <b>bold</b> text</p>
              <p>*text* → For <i>italic</i> text</p>
              <p>[link](https://link.com) → For <a href="https://link.com">links</a></p>
            </div>}
            {loading && document.activeElement === document.querySelector('textarea[placeholder="About me..."]') && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-100 border-t-transparent"></div>
              </div>
            )}
          </form>
          <div className="flex md:gap-4 sm:gap-2">
            <UserDetails
              selected={selected}
              setSelected={setSelected}
              Icon={MdLocationPin}
              text="Location"
            />
            <UserDetails
              selected={selected}
              setSelected={setSelected}
              Icon={IoMdSchool}
              text="College"
            />
            <UserDetails
              selected={selected}
              setSelected={setSelected}
              Icon={IoLanguageSharp}
              text="Languages"
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
              Icon={IoDocumentText}
              text="Resume"
            />
            {/* <UserDetails
              selected={selected}
              setSelected={setSelected}
              Icon={PiCertificateFill}
              text="certificate"
            /> */}
          </div>
          {selected.Location && (
            <div className="flex flex-col lg:gap-4 sm:gap-2.5 gap-1.5 text-start text-[10px] md:text-sm lg:text-[16px]">
              <div className="border-t-2 border-indie-300/10"></div>
              <label className="text-[10px] md:text-sm lg:text-[16px]">Where are you based?</label>
              <div className="relative flex items-center border-2 border-indie-100/10 rounded-sm">
                <div className="bg-indie-400 md:p-3 p-1.5 inline-block md:h-12 h-8">
                  <span className> 🌴 </span>
                </div>
                <motion.input
                  placeholder="Location"
                  type="text"
                  className="p-2 md:h-12 h-8 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none placeholder:text-[10px] md:placeholder:text-[14px] lg:placeholder:text-[16px]"
                  defaultValue={userData?.location || ""}
                  onChange={handleLocation}
                  whileFocus={{ boxShadow: "0px 0px 1.5px 1.5px #414558" }}
                />
                {loading && document.activeElement === document.querySelector('input[placeholder="Location"]') && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-100 border-t-transparent"></div>
                  </div>
                )}
              </div>
            </div>
          )}
          {selected.College && (
            <div className="flex flex-col lg:gap-4 gap-1.5 sm:gap-2.5 text-start text-[10px] md:text-sm lg:text-[16px]">
              <div className="border-t-2 border-indie-300/10"></div>
              <label className="text-[10px] md:text-sm lg:text-[16px]">Which College are you in?</label>
              <div className="relative flex items-center border-2 border-indie-100/10 rounded-sm">
                <div className="bg-indie-400 md:p-3 p-1.5 h-8 inline-block md:h-12">
                  <span className> 🎓 </span>
                </div>
                <motion.input
                  placeholder="College"
                  type="text"
                  className="p-2 md:h-12 h-8 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none placeholder:text-[10px] md:placeholder:text-[14px] lg:placeholder:text-[16px]"
                  defaultValue={userData?.college || ""}
                  onChange={handleCollege}
                  whileFocus={{ boxShadow: "0px 0px 1.5px 1.5px #414558" }}
                />
                {loading && document.activeElement === document.querySelector('input[placeholder="College"]') && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-100 border-t-transparent"></div>
                  </div>
                )}
              </div>
            </div>
          )}
          {selected.Languages && (
            <UserLanguages
              handleUserDetails={handleUserDetails}
              userData={userData}
              setUserData={setUserData}
            />
          )}
          {selected.Resume && (
            <CVUpload
              file={cv}
              setPdfFile={setCv}
              handleUserDetails={handleUserDetails}
              userData={userData}
              setUserData={setUserData}
            />
          )}
          {selected.Skills && (
            <Techstack
              handleUserDetails={handleUserDetails}
              userData={userData}
              setUserData={setUserData}
            />
          )}
          {/* {selected.certificate && (
            <UserCertificate
              handleUserDetails={handleUserDetails}
              userData={userData}
              setUserData={setUserData}
              pdfFile={cpdf}
              setPdfFile={setCpdf}
            />
          )} */}
        </div>
        <h1 className="md:text-[16px] lg:text-xl sm:text-[12px] text-[10px] mx-auto">
          Your failures, successes and everything in between!
        </h1>
        <Project />
        <ShowProject projects={projects} />
        <SocialIcons />
      </div>
      {submit && <Mobile />}
    </div>
  );
}
export default Page;
