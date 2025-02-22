/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";
import Select from "react-select"
import { useState } from "react";

function UserLanguages({ languageData, setLanguageData, handleUserDetails, userData, setUserData }) {

  const [language, setLanguage] = useState("")
  const languageOptions = [
    { language: "English", url: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" },
    { language: "Hindi", url: "https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg" },
    { language: "Spanish", url: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" },
    { language: "German", url: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DK.svg" },
    { language: "Mandarin", url: "https://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg" },
    { language: "Arabic", url: "https://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg" },
    { language: "Polish", url: "https://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg" },
    { language: "Portugese", url: "https://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg" },
    { language: "French", url: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg" },
    { language: "Japanese", url: "https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg" }
  ].sort((a, b) => a.language.localeCompare(b.language));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "270px",
      padding: "4px",
      border: "2px solid rgba(255, 255, 255, 0.1)", // Equivalent to border-indie-100/10
      backgroundColor: "#282A36", // Equivalent to bg-indie-500
      color: "white",
      cursor: "pointer"
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#374151" : "#1e293b", // Highlight on hover
      color: "white",
      display: "flex",
      alignItems: "center",
      padding: "10px",
      cursor: "pointer"
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      color: "white",
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
      proficiency: "Basic"
    }
  })
  // eslint-disable-next-line no-unused-vars
  const proficiencyValue = watch("proficiency");

  function onSubmit(data) {
    var present = false;
    languageData.map((language) => {
      if (language.language === language)
        present = true;
    })
    if (present) {
      toast.error("Language Already Present", {
        position: 'top-center',
        autoClose: 1000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px"
        }
      });
      return
    }
    const newLanguageData = [...languageData, { language: language, proficiency: data.proficiency }]
    console.log("New Language Data : ", newLanguageData)
    setLanguageData(newLanguageData)
    setUserData((prev) => ({ ...prev, languages: newLanguageData }))
    handleUserDetails({ ...userData, languages: newLanguageData })
  }

  function handleDelete(language) {
    const newLanguageData = languageData.filter((data) => data.language !== language);
    setLanguageData(newLanguageData)
    setUserData((prev) => ({ ...prev, languages: newLanguageData }))
    handleUserDetails({ ...userData, languages: newLanguageData })
    // setLanguageData((prev) => (
    //   prev.filter((data) => data.language !== language)
    // ))
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
    <>
      <form className="flex flex-col gap-3 text-start px-6 py-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="border-t-2 border-indie-300/10"></div>
        <label>What Languages do you know?</label>
        <>
          <div className="flex justify-end">
            <div className="flex w-[50%] justify-evenly">
              {levels.map((level, idx) => (
                <div key={idx}>{level.value}</div>
              ))}
            </div>
          </div>
          <div className="border-t-2 border-indie-300/10"></div>
        </>
        <div className="flex items-center justify-between">
          {/* <MdDelete className="cursor-pointer hover:rounded-full hover:bg-indie-400 h-10 w-10 p-2 " onClick={handleDelete} /> */}
          <Select
            options={options}
            styles={customStyles}
            isSearchable={false}
            onChange={(selected) => {
              console.log("selected is : ", selected);
              setLanguage(selected.value)
            }}
          />
          <div className="flex w-[50%] justify-evenly">
            {levels.map((level, idx) => (
              <label
                className="flex items-center justify-center"
                key={idx}
                style={{ width: level.size }}
              >
                <input
                  type="radio"
                  name="languageProficiency"
                  className="cursor-pointer accent-veronica-700 w-4 h-4"
                  value={level.value}
                  {...register("proficiency")}
                />
              </label>
            ))}
          </div>
        </div>
        <button
          className="bg-veronica-700 p-2 max-w-max rounded-lg text-indie-700 text-xs cursor-pointer hover:bg-veronica-800"
        >
          {" "}
          + ADD{" "}
        </button>
      </form>
      {languageData.length > 0 && (
        <ul className="flex gap-4 flex-wrap mx-2 my-2">
          {languageData.map((language) => (
            <div key={language.language} className="bg-indie-400 h-10 gap-4 flex justify-center px-3 items-center rounded-xl ">
              <li><span>{language.language}</span></li>
              <span className=" text-xs bg-veronica-700 rounded-full text-indie-500 w-4 h-4 flex justify-center items-center
              hover:bg-veronica-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent"
                onClick={() => handleDelete(language.language)}> x </span>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

export default UserLanguages;
