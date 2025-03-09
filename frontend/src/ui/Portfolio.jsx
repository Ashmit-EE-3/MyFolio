import { GiGraduateCap } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { flag, options, toastStyles } from "../utils/helper";
import StackIcon from "tech-stack-icons";
import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";
import PortfolioProject from "../components/PortfolioProject";
import { toast } from "react-toastify";

const techOptions = options;
const flags = flag;

function Portfolio() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        setLoading(true);
        try {
          const usernameRes = await fetch(
            `/api/v1/username/getUser/${username}`
          );
          const usernameData = await usernameRes.json();

          if (!usernameRes.ok) {
            console.log("Error in username is : ", usernameData.message);
          }

          if (!usernameData || !usernameData.username) {
            console.log("Invalid username data");
          }

          const userId = usernameData.userId;

          const [profileRes, projectsRes, socialsRes, userRes] =
            await Promise.all([
              fetch(`/api/v1/profile/get/${userId}`),
              fetch(`/api/v1/project/get/${userId}`),
              fetch(`/api/v1/social/get/${userId}`),
              fetch(`/api/v1/user/get/${userId}`),
            ]);

          const [profile, projects, socials, user] = await Promise.all([
            profileRes.json(),
            projectsRes.json(),
            socialsRes.json(),
            userRes.json(),
          ]);

          if (
            !profileRes.ok ||
            !projectsRes.ok ||
            !socialsRes.ok ||
            !userRes.ok
          ) {
            console.log("Failed to fetch user data");
          }

          setUserData({
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            username: usernameData?.username,
            theme: usernameData?.theme,
            font: usernameData?.font,
            about: profile?.about,
            college: profile?.college,
            location: profile?.location,
            certificate: profile?.certificate,
            languages: profile?.languages,
            resume: profile?.resume,
            techStack: profile?.techStack,
            projects,
            socials,
          });
        } catch (err) {
          console.log(err.message);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [username]
  );

  if (loading) return <Spinner />;

  const theme = userData.theme;
  const font = userData.font;

  const { Github, Instagram, LinkedIn, Email, Youtube, Twitter } =
    userData.socials || "";

  const techStack = userData.techStack ?? null;
  const selectedTechOptions = techOptions.filter((option) =>
    techStack?.includes(option.value)
  );

  const languages = userData.languages ?? null;

  const projects = userData?.projects;
  const withImages = projects?.filter((project) => project.images.length > 0);
  const withoutImages = projects?.filter(
    (project) => !project.images.length > 0
  );
  let newProjects = [...(withImages || []), ...(withoutImages || [])];
  let flag = false;
  if (withImages?.length % 2 == 1) {
    flag = true;
  }
  const len = withImages?.length;

  const handleDownload = async () => {
    try {
      const fileName = (userData.resume).split('/').pop();
      const response = await fetch(`api/v1/resume/download/${fileName}`);

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message, toastStyles)
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      toast.success("Downloaded!",toastStyles)
    } catch (error) {
      console.error('Error downloading file:', error);
    }

    const filepath = (userData.resume).split('/').pop();
    console.log(filepath)
    window.location.href = `http://localhost:3000/api/v1/resume/download/${filepath}`;
  }
  return (
    <div
      className="md:grid md:grid-cols-[0.4fr_0.6fr] flex flex-col md:h-screen md:overflow-hidden "
      data-theme={theme}
      data-font={font}
    >
      <div className="font-[family-name:var(--primary-font)] bg-[var(--secondary-bg-color)] text-[var(--primary-text-color)] overflow-y-scroll lg:py-20 md:py-10 py-8 lg:px-14 md:px-10 px-2 flex flex-col lg:gap-6 md:gap-4 gap-2 relative no-scrollbar">
        <img
          src={userData.photoURL}
          alt="profile"
          className="rounded-full lg:h-40 lg:w-40 md:h-30 md:w-30 w-15 h-15 border-10 border-[var(--primary-button-color)] relative"
        />
        <div className="rounded-full lg:h-45 lg:w-45 hidden lg:block border-12 border-[var(--primary-button-color)]/60 absolute top-17.5 left-11.5" />
        <div className="rounded-full lg:h-50 lg:w-50 hidden lg:block border-14 border-[var(--primary-button-color)]/30 absolute top-15 left-9.25" />
        <h1 className="font-bold md:font-extrabold md:tracking-wide lg:text-4xl md:text-2xl text-lg mt-5">
          {userData.displayName}
        </h1>
        <div className=" flex flex-col gap-2 justify-start">
          {userData?.location && (
            <p className="flex items-center capitalize md:gap-2 md:text-xl text-xs gap-1 font-semibold">
              <span>
                <FaLocationDot color="[var(--secondary-text-color)]" />
              </span>
              {userData?.location}
            </p>
          )}
          {userData?.college && (
            <p className="flex items-center capitalize md:gap-2 md:text-xl text-xs gap-1 font-semibold">
              <span>
                <GiGraduateCap color="[var(--secondary-text-color)]" />
              </span>
              {userData?.college}
            </p>
          )}
        </div>
        {userData?.about && (
          <p className="md:text-lg text-xs">
            <ReactMarkdown>{userData?.about}</ReactMarkdown>
          </p>
        )}
        {selectedTechOptions && (
          <div className="flex flex-col gap-4">
            <h1 className="lg:text-2xl md:text-xl text-lg">Skills:</h1>
            <div className="flex flex-wrap lg:gap-3 md:gap-2 gap-1">
              {selectedTechOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className="group relative flex rounded-sm justify-center items-center lg:px-8 lg:py-4 md:px-6 md:py-2 px-4 py-1 bg-[var(--primary-bg-color)]/60 border-2 border-[var(--primary-bg-color)]/30 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="group-hover:scale-[0.75] group-hover:opacity-20 transition-all duration-1000 group-hover:blur-[1px]">
                    <StackIcon
                      name={option.value}
                      className="lg:h-10 lg:w-10 md:h-8 md:w-8 h-6 w-6"
                    />
                  </span>
                  <p className="absolute whitespace-nowrap scale-10 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                    {option.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        {languages && (
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-2xl md:text-xl text-lg">Languages:</h1>
            <div className="flex flex-wrap md:gap-2 gap-1 md:p-2 p-1">
              {languages?.map((language, index) => (
                <div
                  key={index}
                  className={`${language.proficiency === "Proficient"
                    ? "bg-Proficient"
                    : language.proficiency === "Intermediate"
                      ? "bg-Intermediate"
                      : "bg-Basic"
                    } flex gap-2 items-center justify-center rounded-full md:px-2 md:py-1 p-1`}
                >
                  <div className="h-5 w-5 rounded-full overflow-hidden">
                    <img
                      src={flags[language.language]}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className=" text-white ">{language.language}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {userData?.resume && (
          <button onClick={handleDownload} className="text-[var(--secondary-text-color)] w-full uppercase lg:p-4 md:p-3 p-2 rounded-md bg-[var(--primary-button-color)] cursor-pointer hover:bg-[var(--primary-button-color-hover)] transition duration-300 outline-none lg:text-lg text-sm">
            Download CV
          </button>
        )}
        {(Github || Instagram || Youtube || Twitter || Email || LinkedIn) && (
          <div className="flex flex-col gap-2">
            <div className="flex lg:gap-4 md:gap-3 gap-2 items-center md:p-2 p-1">
              {Github && (
                <a className="cursor-pointer" href={Github} target="_blank">
                  <FiGithub
                    className="lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4"
                    color="[var(--secondary-text-color)]"
                  />
                </a>
              )}
              {Email && (
                <a className="cursor-pointer" href={Email} target="_blank">
                  <CiMail
                    className="lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4"
                    color="[var(--secondary-text-color)]"
                  />
                </a>
              )}
              {LinkedIn && (
                <a className="cursor-pointer" href={LinkedIn} target="_blank">
                  <SlSocialLinkedin
                    className="lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4"
                    color="[var(--secondary-text-color)]"
                  />
                </a>
              )}
              {Youtube && (
                <a className="cursor-pointer" href={Youtube} target="_blank">
                  <AiOutlineYoutube
                    className="lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4"
                    color="[var(--secondary-text-color)]"
                  />
                </a>
              )}
              {Instagram && (
                <a className="cursor-pointer" href={Instagram} target="_blank">
                  <FaInstagram
                    className="lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4"
                    color="[var(--secondary-text-color)]"
                  />
                </a>
              )}
              {Twitter && (
                <a className="cursor-pointer" href={Twitter} target="_blank">
                  <RiTwitterXFill
                    className="lg:h-8 lg:w-8 md:h-6 md:w-6 h-4 w-4"
                    color="[var(--secondary-text-color)]"
                  />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="bg-[var(--secondary-bg-color)] overflow-y-scroll no-scrollbar">
        <div className="xl:grid xl:grid-cols-2 flex flex-col lg:gap-10 md:gap-6 gap-4 xl:p-10 p-4">
          {newProjects &&
            newProjects.map((project, index) => (
              <div
                key={index}
                className={`${index === len - 1 && flag ? "col-span-2" : "col-span-1"
                  }`}
              >
                <PortfolioProject
                  project={project}
                  flag={flag}
                  index={index}
                  len={len}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
