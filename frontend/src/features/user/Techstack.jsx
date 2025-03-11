/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { Slide, toast } from "react-toastify";
import StackIcon from "tech-stack-icons";
import Select from "react-select";
import { motion } from "motion/react";
import { options, toastStyles } from "../../utils/helper";

const techOptions=options

function Techstack({ setUserData, handleUserDetails, userData }) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      maxWidth: "290px",
      padding: "1px",
      border: "2px solid rgba(255, 255, 255, 0.1)",
      backgroundColor: "#282A36",
      color: "white",
      cursor: "pointer",
      alignItems: "left",
      minHeight: "32px",
      "@media (min-width: 650px)": {
        minHeight: "40px",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#414558" : "#282A36",
      color: "white",
      display: "flex",
      padding: "4px",
      cursor: "pointer",
      alignItems: "left",
      fontSize: "10px",
      "@media (min-width: 650px)": {
        padding: "10px",
        fontSize: "14px",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "left",
      color: "white",
      fontSize: "10px",
      "@media (min-width: 650px)": {
        fontSize: "14px",
      },
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
    placeholder: (provided) => ({
      ...provided,
      textAlign: "left",
      width: "100%",
    }),
  };

  const options = techOptions.map(({ value, label }) => ({
    value: value,
    label: (
      <div className="flex gap-6 justify-start items-center">
        <div className="w-8 h-8">
          <StackIcon name={value} />
        </div>
        {label}
      </div>
    ),
  }));

  const tc = useSelector((state) => state.user.userDetails?.techStack) || [];
  const [selectedSkill, setSelectedSkill] = useState("");

  function handleAdd() {
    if (!selectedSkill) {
      toast.error("Please select a skill",toastStyles);
      return;
    }
    if (tc.includes(selectedSkill)) {
      toast.error("Skill Already Present", toastStyles);
      return;
    }

    const updatedSkill = [...tc, selectedSkill];
    setUserData((prev) => ({ ...prev, techStack: updatedSkill }));
    handleUserDetails({ ...userData, techStack: updatedSkill });
  }

  function handleDelete(skill) {
    const updatedSkills = userData.techStack.filter((s) => s !== skill);
    setUserData((prev) => ({ ...prev, techStack: updatedSkills }));
    handleUserDetails({ ...userData, techStack: updatedSkills });
  }

  return (
    <div className={`flex flex-col w-full justify-start md:gap-4 gap-2`}>
      <div className="border-t-2 border-indie-300/10"></div>
      <label className="text-start text-[10px] lg:text-[16px]">Tech Stack</label>
      <div className={`${tc.length > 0 && "gap-2 md:gap-4 flex flex-col"}`}>
        <div className="relative w-full flex gap-2 justify-items-start items-start">
          <Select
            className="w-full placeholder:text-center text-[10px] lg:text-[16px]"
            options={options}
            styles={customStyles}
            isSearchable={true}
            placeholder="Select your Tech Stack 👨‍💻"
            onChange={(selected) => {
              setSelectedSkill(selected.value);
            }}
          />
          <motion.button
            className="bg-veronica-700 text-indie-500 w-10 h-9 md:w-12 md:h-12 rounded-full border-2 border-indie-600 hover:cursor-pointer hover:bg-veronica-800
       focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent text-sm md:text-sm lg:text-[16px]"
            onClick={handleAdd}
          >
            <motion.div
              animate={{ rotate: [0, 90] }}
              transition={{ repeatDelay: 2, duration: 0.2, repeat: Infinity }}
            >
              +
            </motion.div>
          </motion.button>
        </div>
        <div>
          {tc && (
            <ul className="flex gap-2 md:gap-4 flex-wrap">
              {tc?.map((skill) => (
                <motion.div
                  key={skill}
                  className="bg-indie-400 h-8 md:h-12 flex justify-between w-fit px-1 md:px-2 gap-1 md:gap-2 items-center rounded-lg md:rounded-xl"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                >
                  <li className="w-5 h-5 md:w-7 md:h-7">
                    <span>
                      <StackIcon name={skill} />
                    </span>
                  </li>
                  <button
                    className="rotate-45 text-[10px] md:text-xs bg-veronica-700 rounded-full text-indie-500 w-4 h-4 md:w-5 md:h-5 flex justify-center items-center
              hover:bg-veronica-800 cursor-pointer focus:outline-none focus:border-transparent"
                    onClick={() => handleDelete(skill)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </motion.div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Techstack;
