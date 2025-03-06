/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";
import Select from "react-select";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { langOptions } from "../../utils/helper";

function UserLanguages({ handleUserDetails, userData, setUserData }) {
  const userlanguages =
    useSelector((state) => state.user.userDetails?.languages) || [];
  // const loading = useSelector((state) => state.user.loading);
  const [lang, setLang] = useState("");
  const languageOptions=langOptions

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width:"100%",
      maxWidth: "270px",
      padding: "2px",
      border: "2px solid rgba(255, 255, 255, 0.1)",
      backgroundColor: "#282A36",
      color: "white",
      cursor: "pointer",
      alignItems: "left",
      minHeight: "32px",
      "@media (min-width: 650px)": {
        minHeight: "40px"
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#414558" : "#282A36",
      color: "white",
      display: "flex",
      padding: "6px",
      cursor: "pointer",
      alignItems: "left",
      fontSize: "10px",
      "@media (min-width: 650px)": {
        padding: "10px",
        fontSize: "16px"
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "left",
      color: "white",
      fontSize: "10px",
      "@media (min-width: 650px)": {
        fontSize: "16px"
      }
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

  const options = languageOptions.map(({ language, url }) => ({
    value: language,
    label: (
      <div className="flex items-center">
        <img src={url} alt="" className="w-6 h-6 mr-2" />
        {language}
      </div>
    ),
  }));

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      proficiency: "Basic",
    },
  });
  // eslint-disable-next-line no-unused-vars
  const proficiencyValue = watch("proficiency");

  function onSubmit(data) {
    if (!lang) {
      toast.error("Please select a language", {
        position: "top-center",
        autoClose: 1000,
        transition: Slide,
      });
      return;
    }
    var present = false;
    userlanguages?.map((language) => {
      if (language.language === lang) present = true;
    });
    if (present) {
      toast.error("Language Already Present", {
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
    const newLanguageData = [
      ...userlanguages,
      { language: lang, proficiency: data.proficiency },
    ];
    setUserData((prev) => ({ ...prev, languages: newLanguageData }));
    handleUserDetails({ ...userData, languages: newLanguageData });
  }

  function handleDelete(language) {
    const newLanguageData = userData.languages.filter(
      (data) => data.language !== language
    );
    setUserData((prev) => ({ ...prev, languages: newLanguageData }));
    handleUserDetails({ ...userData, languages: newLanguageData });
  }

  const levels = [
    {
      value: "Basic",
      size: 42.38,
    },
    {
      value: "Intermediate",
      size: 102.06,
    },
    {
      value: "Proficient",
      size: 73.31,
    },
  ];
  return (
    <div className={`flex flex-col ${userlanguages.length > 0 ? "gap-4" : ""}`}>
      <form
        className="flex flex-col gap-2.5 text-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="border-t-2 border-indie-300/10"></div>
        <label className="text-[10px] md:text-sm lg:text-[16px]">What Languages do you know?</label>
        <>
          <div className="flex justify-end">
            <div className="flex w-full md:w-[50%] justify-evenly text-xs md:text-sm">
              {levels.map((level, idx) => (
                <div key={idx}>{level.value}</div>
              ))}
            </div>
          </div>
          <div className="border-t-2 border-indie-300/10"></div>
        </>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 md:justify-between">
          <Select
            className="text-[10px] md:text-sm lg:text-[16px]"
            options={options}
            styles={customStyles}
            placeholder="Select your language"
            isSearchable={true}
            onChange={(selected) => {
              console.log("selected is : ", selected);
              setLang(selected.value);
            }}
          />
          <div className="flex w-full md:w-[50%] justify-evenly">
            {levels.map((level, idx) => (
              <label
                className="flex items-center justify-center"
                key={idx}
                style={{ width: level.size }}
              >
                <input
                  type="radio"
                  name="languageProficiency"
                  className="cursor-pointer accent-veronica-700 w-3 h-3 md:w-4 md:h-4"
                  value={level.value}
                  {...register("proficiency")}
                />
              </label>
            ))}
          </div>
        </div>
        <button className="bg-veronica-700 md:p-2 p-1 max-w-max rounded-lg text-indie-700 text-xs cursor-pointer hover:bg-veronica-800 hover:scale-[1.2] transition duration-200">
          {" "}
          + ADD{" "}
        </button>
      </form>
      <div>
        {userlanguages && (
          <ul className="flex gap-2 md:gap-4 flex-wrap">
            {userlanguages.map((language) => (
              <motion.div
                key={language.language}
                  className="bg-indie-400 h-8 md:h-10 md:gap-2 gap-1 flex justify-center w-fit md:px-2 px-1 items-center rounded-md md:text-sm text-[10px]"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <li>
                  <span>{language.language}</span>
                </li>
                <span
                  className=" text-xs bg-veronica-700 rounded-full text-indie-500 w-4 h-4 flex justify-center items-center
              hover:bg-veronica-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent rotate-45"
                  onClick={() => handleDelete(language.language)}
                >
                  +
                </span>
              </motion.div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserLanguages;
