import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSocial } from "../socials/socialSlice";
import { Slide, toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { motion } from "motion/react";

function AdminIcons() {
  const [selected, setSelected] = useState({
    Github: false,
    Instagram: false,
    LinkedIn: false,
    Email: false,
    Twitter: false,
    Youtube: false,
  });
  const socialdetails = useSelector((state) => state.social.socials);
  const social = Object.keys(selected).filter((key) => selected[key]);
  const [link, setLink] = useState(socialdetails?.[social[0]]);
  const socialForm = useSelector((state) => state.social.socials);
  const [formData, setFormData] = useState(socialForm);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  function handleLink(e) {
    setLink(e.target.value);
  }
  const handleIconClick = (socialType) => {
    setLink("");
    setSelected((prev) => {
      const newState = {
        Github: false,
        Instagram: false,
        LinkedIn: false,
        Email: false,
        Twitter: false,
        Youtube: false,
      };
      newState[socialType] = !prev[socialType];
      return newState;
    });
  };

  function handleAdd() {
    if (!link && socialdetails?.[social[0]]) {
      setLink(socialdetails[social[0]]); // YAHA DELETE KARANA HOGA.
      return;
    }
    const updatedFormData = {
      ...formData,
      [social[0]]: link,
      userId: currentUser._id,
    };

    setFormData(updatedFormData);
  }

  function handleDelete() {
    const updatedFormData = Object.fromEntries(
      Object.entries(socialdetails).filter(([key]) => key !== social[0])
    );

    setFormData(updatedFormData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("Form Data is : ", formData);
      const res = await fetch("/api/v1/social/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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

      toast.success("Socials Saved!", {
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
      dispatch(addSocial(data));
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
    setSelected({
      Github: false,
      Instagram: false,
      LinkedIn: false,
      Email: false,
      Twitter: false,
      Youtube: false,
    });
    setLink("");
  }

  return (
    <div className="flex flex-col gap-4">
      <motion.div
        className={`flex gap-8 mx-auto ${social.length == 0 ? `mb-4` : ``}`}
      >
        <motion.span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("Github") ? `bg-indie-400` : ``
          }`}
          animate={{ y: [0, -20,20,0] }}
          transition={{ duration: 0.6, repeat: Infinity,delay:0,ease:"easeInOut",repeatDelay:2 }}
          onClick={() => handleIconClick("Github")}
        >
          <FaGithub size={28} color="#F8F8F2" />
        </motion.span>
        <motion.span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("Instagram") ? `bg-indie-400` : ``
          }`}
          animate={{ y: [0, -20, 20, 0] }}
          transition={{ duration: 0.6, repeat: Infinity,delay:0.4,ease:"easeInOut",repeatDelay:2 }}
          onClick={() => handleIconClick("Instagram")}
        >
          <FaSquareInstagram size={28} color="#F8F8F2" />
        </motion.span>
        <motion.span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("LinkedIn") ? `bg-indie-400` : ``
          }`}
          animate={{ y: [0, -20, 20, 0] }}
          transition={{ duration: 0.6, repeat: Infinity,delay:0.8,ease:"easeInOut",repeatDelay:2 }}
          onClick={() => handleIconClick("LinkedIn")}
        >
          <FaLinkedin size={28} color="#F8F8F2" />
        </motion.span>
        <motion.span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("Email") ? `bg-indie-400` : ``
          }`}
          animate={{ y: [0, -20, 20, 0] }}
          transition={{ duration: 0.6, repeat: Infinity,delay:1.2,ease:"easeInOut",repeatDelay:2}}
          onClick={() => handleIconClick("Email")}
        >
          <MdEmail size={28} color="#F8F8F2" />
        </motion.span>
        <motion.span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("Twitter") ? `bg-indie-400` : ``
          }`}
          animate={{ y: [0, -20, 20, 0] }}
          transition={{ duration: 0.6, repeat: Infinity,delay:1.6,ease:"easeInOut",repeatDelay:2}}
          onClick={() => handleIconClick("Twitter")}
        >
          <BsTwitterX size={24} color="#F8F8F2" />
        </motion.span>
        <motion.span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("Youtube") ? `bg-indie-400` : ``
          }`}
          animate={{ y: [0, -20, 20, 0] }}
          transition={{ duration: 0.6, repeat: Infinity,delay:2,ease:"easeInOut",repeatDelay:2}}
          onClick={() => handleIconClick("Youtube")}
        >
          <FaYoutube size={28} color="#F8F8F2" />
        </motion.span>
      </motion.div>
      {social.length > 0 && (
        <form
          className="flex flex-col gap-4 text-start p-6 bg-indie-700 rounded-2xl mb-4"
          onSubmit={handleSubmit}
        >
          <label>{social}</label>
          <div className="flex items-center gap-2">
            <input
              value={socialdetails?.[social[0]] || link}
              placeholder={`Link to your ${social} account`}
              type="url"
              className="p-2 h-12 placeholder:opacity-30 bg-indie-500 w-full outline-none rounded-md"
              onChange={handleLink}
            />
            {socialdetails?.[social[0]] ? (
              <button
                onClick={handleDelete}
                className="bg-veronica-700 p-3 rounded-lg w-24 text-indie-700 cursor-pointer hover:bg-veronica-800"
              >
                DELETE
              </button>
            ) : (
              <button
                onClick={handleAdd}
                className="bg-veronica-700 p-3 rounded-lg w-24 text-indie-700 cursor-pointer hover:bg-veronica-800"
              >
                ADD
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
export default AdminIcons;
