import { GiGraduateCap } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Portfolio() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});
  async function fetchUserData() {
    try {
      const usernameRes = await fetch(`/api/v1/username/getUser/${username}`);
      const usernameData = await usernameRes.json();
      
      if (!usernameRes.ok) {
        console.log("Error in username is : ",usernameData.message)
      }
      
      if (!usernameData || !usernameData.username) {
        console.log('Invalid username data');
      }

      const userId = usernameData.userId;
      
      const [profileRes, projectsRes, socialsRes, userRes] = await Promise.all([
        fetch(`/api/v1/profile/get/${userId}`),
        fetch(`/api/v1/project/get/${userId}`),
        fetch(`/api/v1/social/get/${userId}`),
        fetch(`/api/v1/user/get/${userId}`)
      ]);

      const [profile, projects, socials, user] = await Promise.all([
        profileRes.json(),
        projectsRes.json(),
        socialsRes.json(),
        userRes.json()
      ]);

      if (!profileRes.ok || !projectsRes.ok || !socialsRes.ok || !userRes.ok) {
        console.log('Failed to fetch user data');
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
        socials
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  const [loading, setLoading] = useState(true);
  console.log("Fetched user data is : ",userData) ; 
  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      <div className="text-indie-400 col-span-4 bg-indie-300 overflow-y-scroll lg:py-20 md:py-10 py-8 lg:px-14 md:px-10 px-2 flex flex-col lg:gap-6 md:gap-4 gap-2 ">
        <img src={userData.photoURL} alt="profile" className="rounded-full lg:h-40 lg:w-40 md:h-30 md:w-30 w-15 h-15" />
        <h1 className="font-bold md:font-extrabold md:tracking-wide lg:text-4xl md:text-2xl text-lg">{userData.displayName}</h1>
        <div className=" flex flex-col gap-2 justify-start">
          <p className="flex items-center capitalize md:gap-2 md:text-xl text-xs gap-1 font-semibold"><span><FaLocationDot color="#282A36" /></span>{userData.location}</p>
          <p className="flex items-center capitalize md:gap-2 md:text-xl text-xs gap-1 font-semibold"><span><GiGraduateCap color="#282A36" /></span>{userData.college}</p>
        </div>
        <p className="italic md:text-lg text-xs">{userData.about}</p>
      </div>
      <div className="col-span-8 bg-veronica-700 overflow-y-scroll"></div>
    </div>
  )
}

export default Portfolio
