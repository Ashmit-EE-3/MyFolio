import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSocial } from "../features/socials/socialSlice";

function AdminIcons() {
  const [selected, setSelected] = useState({
    Github: false,
    Instagram: false,
    LinkedIn: false,
    Email: false,
    Twitter: false,
    Youtube: false,
  });
  const [link,setLink]=useState("")
  const social = Object.keys(selected).filter((key) => selected[key]);

  const dispatch=useDispatch()

  function handleLink(e)
  {
    setLink(e.target.value)
  }
  function handleSubmit(e)
  {
    e.preventDefault();
    dispatch(addSocial({platform:social[0],link}))
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
      <div className={`flex gap-8 m-auto ${social.length == 0 ? `mb-8` : ``}`}>
        <span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("Github") ? `bg-indie-400` : ``
          }`}
          onClick={() =>
            setSelected((prev)=>({
              Instagram: false,
              Github: !prev.Github,
              LinkedIn: false,
              Email: false,
              Twitter: false,
              Youtube: false,
            }))
          }
        >
          <svg
            height="30px"
            width="30px"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <g>
              <path d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z" />
            </g>
          </svg>
        </span>
        <span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("Instagram") ? `bg-indie-400` : ``
          }`}
          onClick={() =>
            setSelected((prev)=>({
              Github: false,
              Instagram: !prev.Instagram,
              LinkedIn: false,
              Email: false,
              Twitter: false,
              Youtube: false,
            }))
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.7 56.7"
            xmlSpace="preserve"
            fill="white"
            height="30px"
            width="30px"
          >
            <g>
              <path
                d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
              />
              <circle cx="41.5" cy="16.4" r="2.9" />
              <path
                d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
              />
            </g>
          </svg>
        </span>
        <span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("LinkedIn") ? `bg-indie-400` : ``
          }`}
          onClick={() =>
            setSelected((prev)=>({
              Github: false,
              LinkedIn: !prev.LinkedIn,
              Instagram: false,
              Email: false,
              Twitter: false,
              Youtube: false,
            }))
          }
        >
          <svg
            viewBox="0 0 56.693 56.693"
            width="30px"
            height="30px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <g>
              <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" />
              <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
            </g>
          </svg>
        </span>
        <span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("Email") ? `bg-indie-400` : ``
          }`}
          onClick={() =>
            setSelected((prev)=>({
              Github: false,
              Email: !prev.Email,
              LinkedIn: false,
              Instagram: false,
              Twitter: false,
              Youtube: false,
            }))
          }
        >
          <svg
            height="30px"
            viewBox="0 0 72 72"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z"
                fill="#FFF"
              />
              <path
                d="M18,26.1623226 L18,46.5476129 C18,47.6566452 18.8117419,48.5554839 19.9300645,48.5554839 L51.7447742,48.5554839 C52.8619355,48.5554839 53.6748387,47.6461935 53.6748387,46.5476129 L53.6748387,26.1623226 C53.6748387,24.9452903 52.947871,24 51.7447742,24 L19.9300645,24 C18.6805161,24 18,24.9685161 18,26.1623226 M20.9334194,27.9379355 C20.9334194,27.4467097 21.2307097,27.1656774 21.7056774,27.1656774 C21.9994839,27.1656774 33.560129,34.4910968 34.2603871,34.9207742 L36.0696774,36.0460645 C36.6433548,35.6616774 37.2193548,35.3330323 37.8139355,34.9347097 C39.0274839,34.1589677 49.8251613,27.1656774 50.1224516,27.1656774 C50.5985806,27.1656774 50.8947097,27.4467097 50.8947097,27.9379355 C50.8947097,28.4581935 49.8925161,28.9749677 49.239871,29.3732903 C45.1393548,31.8723871 41.04,34.5967742 36.980129,37.1887742 C36.7432258,37.3490323 36.2845161,37.6916129 35.9407742,37.6393548 C35.5575484,37.580129 23.7936774,30.0224516 21.6534194,28.7636129 C21.3317419,28.5743226 20.9334194,28.4012903 20.9334194,27.9379355"
                fill="#000"
              />
            </g>
          </svg>
        </span>
        <span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("Twitter") ? `bg-indie-400` : ``
          }`}
          onClick={() =>
            setSelected((prev)=>({
              Github: false,
              Twitter: !prev.Twitter,
              LinkedIn: false,
              Email: false,
              Instagram: false,
              Youtube: false,
            }))
          }
        >
          <svg
            enableBackground="new 0 0 56.693 56.693"
            height="30px"
            viewBox="0 0 56.693 56.693"
            width="30px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
          >
            <path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z" />
          </svg>
        </span>
        <span
          className={`hover:bg-indie-400 p-2 rounded-full cursor-pointer transition duration-200 ${
            social.includes("Youtube") ? `bg-indie-400` : ``
          }`}
          onClick={() =>
            setSelected((prev)=>({
              Github: false,
              Youtube: !prev.Youtube,
              LinkedIn: false,
              Email: false,
              Twitter: false,
              Instagram: false,
            }))
          }
        >
          <svg
            height="30px"
            viewBox="0 0 512 512"
            width="30px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <path d="M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z" />
          </svg>
        </span>
      </div>
      {social.length > 0 && (
        <form className="flex flex-col gap-3 text-start px-6 py-2 mb-6" onSubmit={handleSubmit}>
          <label>{social}</label>
          <div className="flex items-center gap-2">
            <input
              value={link}
              placeholder={`Link to your ${social} account`}
              type="text"
              className="p-4 h-12 placeholder:opacity-30 bg-indie-500 w-full"
              onChange={handleLink}
            />
            <button className="bg-veronica-700 p-3 rounded-lg w-24 mr-1 text-indie-700 cursor-pointer hover:bg-veronica-800">
              {" "}
              + ADD{" "}  
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
export default AdminIcons;
