/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";

function UserLanguages({languageData,setLanguageData,handleUserDetails,userData,setUserData}) {

  const {register,handleSubmit,watch} = useForm({
    defaultValues:{
      proficiency:"Basic"
    }
  })
  // eslint-disable-next-line no-unused-vars
  const proficiencyValue = watch("proficiency");
  function onSubmit(data)
  {
    var present=false;
    languageData.map((language)=>
    {
      if(language.language===data.language)
        present=true;
    })
    if(present){
      toast.error("Language Already Present",{
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
    const newLanguageData=[...languageData,{language:data.language,proficiency:data.proficiency}]
    setLanguageData(newLanguageData)
    setUserData((prev)=>({...prev,languages:newLanguageData}))
    handleUserDetails({...userData,languages:newLanguageData})
  }

  function handleDelete(language)
  {
    const updatedLanguageData = (languageData).filter((lang)=> lang.language !== language)
    setLanguageData(updatedLanguageData)
    setUserData((prev)=>({...prev,languages:updatedLanguageData})) 
    handleUserDetails({...userData, languages:updatedLanguageData}) 
  }
  const languageOptions = [
    "English",
    "Hindi",
    "Spanish",
    "German",
    "Mandarin",
    "Arabic",
    "Polish",
    "Portugese",
    "French",
    "Japanese",
  ].sort();
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
          <select
            className="cursor-pointer w-[270px] p-2 border-2 border-indie-100/10 rounded-sm bg-indie-500"
            name=""
            id=""
            {...register("language")}
          >
            {languageOptions.map((language, idx) => (
              <option
                key={idx}
                className="cursor-pointer bg-indie-500"
                value={language}
              >
                {language}
              </option>
            ))}
          </select>
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
            <div key={language} className="bg-indie-400 h-10 gap-4 flex justify-center px-3 items-center rounded-xl ">
              <li><span>{language.language}</span></li>
              <button className=" text-xs bg-veronica-700 rounded-full text-indie-500 w-4 h-4 flex justify-center items-center
              hover:bg-veronica-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent"
              onClick={()=>handleDelete(language.language)}> x </button>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

export default UserLanguages;
