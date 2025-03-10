/* eslint-disable react/prop-types */
import { useState } from "react";
import { Slide, toast } from "react-toastify";
import StackIcon from "tech-stack-icons";
import Select from "react-select";
import { motion } from "motion/react";
import { options, toastStyles } from "../../utils/helper";

const techOptions=options;

function ProjectTechstack({ skills, setSkills }) {
  const [selectedSkill, setSelectedSkill] = useState("");

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
      <div className="flex gap-2 md:gap-6 justify-start items-center">
        <div className="w-6 h-6 md:w-8 md:h-8">
          <StackIcon name={value} />
        </div>
        {label}
      </div>
    ),
  }));

  function handleAdd() {
    if (!selectedSkill) {
      toast.error("Please select a tool!", {
        position: "top-center",
        autoClose: 1000,
        transition: Slide,
      });
      return;
    }
    var present = false;
    skills.map((skill) => {
      if (skill === selectedSkill) present = true;
    });
    if (present) {
      toast.error("Skill already present!", toastStyles);
      return;
    }
    setSkills([...skills, selectedSkill]);
  }

  function handleDelete(skill) {
    setSkills((prev) => prev.filter((s) => s !== skill));
  }

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className="border-t-2 border-indie-300/30"></div>
      <label className="text-start text-[10px] md:text-xs lg:text-[16px]">Tech Stack💻</label>
      <div className="w-full flex gap-2 justify-items-start items-start">
        <Select
          className="w-full text-[10px] md:text-xs lg:text-[16px]"
          options={options}
          styles={customStyles}
          isSearchable={true}
          placeholder="Select your Tech Stack 👨‍💻"
          onChange={(selected) => {
            setSelectedSkill(selected.value);
          }}
        />
        <motion.button
          className="bg-veronica-700 text-indie-500 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-indie-600 hover:cursor-pointer hover:bg-veronica-800
       focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent text-sm md:text-[16px] flex justify-center items-center"
          onClick={handleAdd}
          type="button"
        >
          <motion.div
            animate={{ rotate: [0, 90] }}
            transition={{ repeatDelay: 2, duration: 0.2, repeat: Infinity }}
            className="flex justify-center items-center"
          >
            +
          </motion.div>
        </motion.button>
      </div>
      {skills.length > 0 && (
        <ul className="flex gap-2 md:gap-4 flex-wrap">
          {skills.map((skill) => (
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
                className="rotate-45 text-[10px] md:text-xs bg-veronica-700 rounded-full text-indie-500 w-2 h-2 md:w-4 md:h-4 flex justify-center items-center
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
  );
}

export default ProjectTechstack;
