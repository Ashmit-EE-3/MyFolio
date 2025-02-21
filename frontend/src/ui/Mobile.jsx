import { useSelector } from "react-redux";
import { IoLocationOutline, IoShareOutline } from "react-icons/io5";
import StackIcon from "tech-stack-icons";

function Mobile() {
  const displayName = useSelector(
    (state) => state.user.currentUser.displayName
  );
  const userImage = useSelector((state) => state.user.currentUser.photoURL);
  const about = useSelector((state) => state.user.userDetails.about);
  const location = useSelector((state) => state.user.userDetails.location);
  const skills = useSelector((state) => state.user.userDetails.skills);
  return (
    <div className="w-90 h-screen bg-indie-100 rounded-[3rem] border-12 border-black">
      <div className="flex justify-start gap-2 m-4">
        <img src={userImage} alt="user" className="w-15 h-15 rounded-full" />
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-indie-700 text-xl uppercase">{displayName}</h1>
            <span className="bg-veronica-800 hover:bg-veronica-900 rounded-lg p-1 cursor-pointer">
              <IoShareOutline color="white" />
            </span>
          </div>
          <h3 className="text-indie-400 capitalize text-sm text-start flex gap-1 items-center">
            <span>
              <IoLocationOutline color="black" />
            </span>
            {location}
          </h3>
        </div>
      </div>
      <p className="text-indie-400 mx-4 text-sm text-start">{about}</p>
      <div className="flex gap-3 p-2 flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-12 cursor-pointer h-12 p-2 bg-veronica-800 rounded-[16px] group hover:flex hover:w-auto gap-2 items-center justify-center"
          >
            <div className="w-8 h-8 flex justify-center items-center">
            <StackIcon name={skill}/>
            </div>
            <span className="opacity-0 group-hover:opacity-100 text-indie-300 capitalize">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mobile;
