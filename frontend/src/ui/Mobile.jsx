import { useSelector } from "react-redux";
import { IoLocationOutline, IoShareOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import StackIcon from "tech-stack-icons";
import { useState } from "react";
import Share from "../components/Share";

const obj = {
  English: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
  Hindi: "https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg",
  Polish: "https://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg",
  German: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
  French: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
  Spanish: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg",
  Arabic: "https://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg",
  Portugese:
    "https://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg",
  Mandarin:
    "https://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg",
  Japanese:
    "https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg",
};

function Mobile() {
  const displayName = useSelector(
    (state) => state.user.currentUser.displayName
  );
  const userImage = useSelector((state) => state.user.currentUser.photoURL);
  const username = useSelector((state) => state.user.username);
  const about = useSelector((state) => state.user.userDetails.about);
  const college = useSelector((state) => state.user.userDetails.college);
  const location = useSelector((state) => state.user.userDetails.location);
  const skills = useSelector((state) => state.user.userDetails.techStack);
  const languages = useSelector((state) => state.user.userDetails.languages);
  const socials = useSelector((state) => state.social.socials);
  const [share,setShare]=useState(false)

  function handleShare()
  {
    setShare(()=>!share)
  }

  return (
    <>
      {displayName && (
        <div className="relative overflow-y-scroll w-100 font-poppins">
          <div className={`h-screen bg-stone-300 rounded-[3rem] border-12 border-black w-[95%] text-indie-400 relative`}>
            <div className="w-[95%] flex justify-end my-2">
              <span className={`bg-purple-600 p-0.5 rounded-md cursor-pointer ${share ? "opacity-50" : ""}`}
              onClick={handleShare}>
                <IoShareOutline />
              </span>
            </div>
            {share && <Share share={share} setShare={setShare}/>}
            <div className={`flex flex-col justify-center items-center gap-4 ${share ? "opacity-25" : ""}`}>
              <img
                src={userImage}
                className="rounded-full w-30 h-30 border-6 border-purple-600 translate-y-15"
              />
              <div className="bg-indie-100 w-[96%] mx-auto rounded-lg flex flex-col gap-2">
                <div className="mt-12">
                  {location && (
                    <div className="text-sm flex justify-center items-center">
                      <span>
                        <IoLocationOutline color="black" />
                      </span>
                      <p>{location}</p>
                    </div>
                  )}
                  {college && (
                    <div className="text-sm flex justify-center items-center">
                      <p>🎓 {college}</p>
                    </div>
                  )}
                  <h1 className="font-semibold uppercase text-[28px]">
                    {displayName}
                  </h1>
                  <h2 className="text-md bg-purple-600 text-stone-200 w-fit px-3 py-0.5 rounded-xl mx-auto italic">
                    @{username}
                  </h2>
                  <p className="text-sm my-1">{about}</p>
                </div>
                {skills.length > 0 && (
                  <>
                    <div className="w-[90%] h-0.5 bg-indie-100 mx-auto my-2">
                      <hr />
                    </div>
                    <h1 className="text-start text-sm italic mx-4">Skills:</h1>
                    <div className="flex gap-3 p-2 flex-wrap">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 p-2 bg-stone-300 rounded-[16px] gap-2 items-center justify-center"
                        >
                          <div className="w-8 h-8 flex justify-center items-center">
                            <StackIcon name={skill} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {languages.length > 0 && (
                  <>
                    <div className="w-[90%] h-0.5 bg-indie-100 mx-auto my-2">
                      <hr />
                    </div>
                    <h1 className="italic text-start text-sm mx-4">
                      Languages:
                    </h1>
                    <div className="grid gap-3 p-2 grid-cols-10 mx-2">
                      {languages.map((language, index) => (
                        <div
                          key={index}
                          className="w-10 h-10 overflow-hidden rounded-full hover:scale-[1.5] cursor-pointer"
                        >
                          <img
                            key={index}
                            src={obj[language.language]}
                            alt={language.language}
                            className="h-full object-cover w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {socials.length > 0 && (
                  <>
                    <div className="w-[90%] h-0.5 bg-indie-100 mx-auto my-2">
                      <hr />
                    </div>
                    <p className="text-sm italic text-start mx-4">
                      You can find me on ...
                    </p>
                    <div className="flex gap-2 justify-center items-center my-3">
                      {socials["Github"] && (
                        <a target="_blank" href={socials["Github"]}>
                          <FaGithub size={30} color="purple" />
                        </a>
                      )}
                      {socials["Instagram"] && (
                        <a target="_blank" href={socials["Instagram"]}>
                          <FaInstagram size={30} color="purple" />
                        </a>
                      )}
                      {socials["LinkedIn"] && (
                        <a target="_blank" href={socials["LinkedIn"]}>
                          <FaLinkedin size={30} color="purple" />
                        </a>
                      )}
                      {socials["Email"] && (
                        <a target="_blank" href={socials["Email"]}>
                          <MdEmail size={30} color="purple" />
                        </a>
                      )}
                      {socials["Twitter"] && (
                        <a target="_blank" href={socials["Twitter"]}>
                          <FaXTwitter size={30} color="purple" />
                        </a>
                      )}
                      {socials["Youtube"] && (
                        <a target="_blank" href={socials["Youtube"]}>
                          <FaYoutube size={30} color="purple" />
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Mobile;
