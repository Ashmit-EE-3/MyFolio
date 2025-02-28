import { useDispatch, useSelector } from "react-redux";
import SocialIcons from "../features/socials/SocialIcons";
import { useRef, useState } from "react";
import {
  addUserDetails,
  addUsername,
  updateUser,
} from "../features/user/userSlice";
import Project from "../features/project/Project";
import { CiLocationOn } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { PiReadCvLogo } from "react-icons/pi";
import { IoLanguageSharp } from "react-icons/io5";
import { Slide, toast } from "react-toastify";
import { PiCertificateFill } from "react-icons/pi";
import { IoMdSchool } from "react-icons/io";
import {motion} from "motion/react"

import UserCertificate from "../features/user/UserCertificate";
import Techstack from "../features/user/Techstack";
import UserDetails from "../features/user/UserDetails";
import UserLanguages from "../features/user/UserLanguages";
import CVUpload from "../features/user/CVUpload";
import Mobile from "./Mobile";
import ShowProject from "../features/project/ShowProject";

function Page() {
  const submit = useSelector((state) => state.user.submit);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const userDetails = useSelector((state) => state.user.userDetails);
  const [formData, setFormData] = useState(currentUser);
  const [userData, setUserData] = useState(userDetails);
  const typingTimeout = useRef(null);
  const [username, setUsername] = useState("");
  const [selected, setSelected] = useState({
    Location: false,
    Languages: false,
    Resume: false,
    Skills: false,
    certificate: false,
    College: false,
  });
  const [cpdf, setCpdf] = useState(null);
  const [cv, setCv] = useState(null);
  const projects = useSelector((state) => state.project?.project);

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleDisplayNameChange(e) {
    const newValue = e.target.value;

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

    typingTimeout.current = setTimeout(() => {
      setFormData((prevData) => ({ ...prevData, displayName: newValue }));
      handleUserSubmit({ ...formData, displayName: newValue });
    }, 2000);
  }

  async function handleProfileImageUpload(e) {
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
    const imageURL = data.secure_url; // Convert file to URL
    setFormData((prevData) => ({ ...prevData, photoURL: imageURL }));
    handleUserSubmit({ ...formData, photoURL: imageURL });
  }

  const handleUserSubmit = async (updatedFormData) => {
    try {
      console.log("Form Data is : ", updatedFormData);
      const res = await fetch(`/api/v1/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });
      const data = await res.json();
      if (data.success === false) {
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
        });
        return;
      }
      dispatch(updateUser(data));
      toast.success("Saved!", {
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
    } catch (error) {
      console.log(error);
      toast.error(error, {
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
  };

  function handleAbout(e) {
    const newAbout = e.target.value;

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

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

    typingTimeout.current = setTimeout(() => {
      setUserData((prevData) => ({ ...prevData, college: newCollege }));
      handleUserDetails({ ...userData, college: newCollege });
    }, 2000);
  }

  async function handleUserDetails(data) {
    const updatedUserDetails = {
      ...data,
      userId: currentUser._id,
    };
    setUserData(updatedUserDetails);
    try {
      console.log("Updated User Details : ", updatedUserDetails);
      const res = await fetch("/api/v1/profile/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUserDetails),
      });

      const data = await res.json();

      if (data.success === false) {
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
        });
      }

      toast.success("Saved!", {
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

      console.log("Data is : ", data);
      dispatch(addUserDetails(data));
    } catch (error) {
      toast.error(error.message, {
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

  async function handleUSubmit(e) {
    e.preventDefault();
    try {
      const usernameData = {
        username: username,
        userId: currentUser._id,
      };
      const res = await fetch("/api/v1/username/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usernameData),
      });
      console.log("Response from error is : ", res);

      const data = await res.json();

      if (res.ok === false) {
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
        });
        return;
      }

      toast.success("Username Created!", {
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

      dispatch(addUsername(data));
    } catch (error) {
      toast.error(error.message, {
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

  return (
    <div className="flex mx-auto h-screen overflow-hidden gap-8">
      <div className="flex flex-col gap-6 font-(family-name:--font-poppins) overflow-y-scroll h-full">
        {!submit && (
          <div className="flex flex-col w-[50vw] bg-indie-700 rounded-2xl text-start p-6 gap-5">
            <h1 className="text-yellow-200">
              ⚠ Create a username to get a public page
            </h1>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleUSubmit}
            >
              <motion.input
                placeholder="username"
                type="text"
                value={username}
                className="border-indie-300/10 p-2 border-1 rounded-md h-12 placeholder:opacity-30 bg-indie-500 focus:outline-none "
                required
                onChange={handleChange}
                whileFocus={{ boxShadow: "0px 0px 8px 8px #242631" }}
              />
              <motion.button
              whileHover={{rotate:[1,0.5,-1,-0.5,0],scale:0.98}}
              transition={{duration:0.25}}
                className="bg-veronica-700 text-indie-600 p-2 rounded-lg h-12 tracking-wide font-semibold hover:bg-veronica-800
            focus:outline-none cursor-pointer"
              >
                CREATE USERNAME
              </motion.button>
            </form>
          </div>
        )}
        <div className="flex flex-col p-6 w-[50vw] bg-indie-700 rounded-2xl text-indie-100 gap-4">
          <form className="flex gap-4 text-xl items-center">
            <div
              onClick={() => document.getElementById("profile-upload").click()}
              className="relative h-14 w-14 group cursor-pointer aspect-square block p-0 m-0 object-cover"
            >
              <input
                type="file"
                onChange={handleProfileImageUpload}
                accept="image/jpeg, image/png, image/jpg"
                className="hidden"
                id="profile-upload"
              />
              <svg
                className="absolute top-0 left-0 h-8 w-8 z-20 translate-x-1/4 translate-y-1/4 opacity-60 bg-indie-400 rounded-lg group-hover:opacity-100 focus:outline-none focus:ring focus:ring-indie-200 focus:ring-offset-1"
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
                src={formData.photoURL}
                className="rounded-full h-13 w-13 aspect-square block p-0 m-0 object-cover group-hover:opacity-60"
                alt="avatar"
              />
            </div>
            <input
              type="text"
              placeholder="Your name"
              onChange={handleDisplayNameChange}
              defaultValue={formData.displayName}
              className="w-full p-2 h-12 rounded-md placeholder:opacity-30 placeholder:text-base focus:outline-none focus:ring focus:ring-indie-100"
            />
          </form>
          <form>
            <motion.textarea
              placeholder="I quit my 9-5 job to work 24/7 on my startup"
              type="text"
              whileFocus={{ boxShadow: "0px 0px 2px 2px #242631" }}
              defaultValue={userData?.about || ""}
              onChange={handleAbout}
              className="border-indie-300/10 h-28 w-full placeholder:text-base p-2 rounded-md focus:outline-none outfocus:ring focus:ring-indie-400 focus:ring-offset-1 placeholder:opacity-30 bg-indie-500"
            ></motion.textarea>
          </form>
          <div className="flex gap-4">
            <UserDetails
              selected={selected}
              setSelected={setSelected}
              Icon={CiLocationOn}
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
              Icon={PiReadCvLogo}
              text="Resume"
            />
            <UserDetails
              selected={selected}
              setSelected={setSelected}
              Icon={PiCertificateFill}
              text="certificate"
            />
          </div>
          {selected.Location && (
            <div className="flex flex-col gap-4 text-start">
              <div className="border-t-2 border-indie-300/10"></div>
              <label>Where are you based?</label>
              <div className="flex items-center border-2 border-indie-100/10 rounded-sm">
                <div className="bg-indie-400 p-3 inline-block h-12">
                  <span className> 🌴 </span>
                </div>
                <motion.input
                  placeholder="Location"
                  type="text"
                  className="p-2 h-12 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none"
                  defaultValue={userData?.location || ""}
                  onChange={handleLocation}
                  whileFocus={{ boxShadow: "0px 0px 1.5px 1.5px #414558" }}
                />
              </div>
            </div>
          )}
          {selected.College && (
            <div className="flex flex-col gap-4 text-start">
              <div className="border-t-2 border-indie-300/10"></div>
              <label>Which College are you in?</label>
              <div className="flex items-center border-2 border-indie-100/10 rounded-sm">
                <div className="bg-indie-400 p-3 inline-block h-12">
                  <span className> 🎓 </span>
                </div>
                <motion.input
                  placeholder="College"
                  type="text"
                  className="p-2 h-12 placeholder:opacity-30 bg-indie-500 w-full focus:outline-none"
                  defaultValue={userData?.college || ""}
                  onChange={handleCollege}
                  whileFocus={{ boxShadow: "0px 0px 1.5px 1.5px #414558" }}
                />
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
          {selected.certificate && (
            <UserCertificate
              handleUserDetails={handleUserDetails}
              userData={userData}
              setUserData={setUserData}
              pdfFile={cpdf}
              setPdfFile={setCpdf}
            />
          )}
        </div>
        <h1 className="text-xl">
          Your failures, successes and everything in between!
        </h1>
        <Project />
        <ShowProject projects={projects} />
        <SocialIcons />
      </div>
      <div className="overflow-y-scroll">{submit && <Mobile />}</div>
    </div>
  );
}
export default Page;
