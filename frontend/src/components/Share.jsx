/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaCopy } from "react-icons/fa";

function Share({ share, setShare }) {
  const username = useSelector((state) => state.user.username.username);
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(`indiepa.ge/${username}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  function handleShare() {
    setShare(() => !share);
  }
  return (
    <div className="bg-indie-400 rounded-md mx-auto w-80 text-indie-100 p-2 h-30 left-2.5 flex flex-col justify-center absolute top-10 z-10 !opacity-100">
      <div className="flex justify-between items-center text-xl">
        <h1>Share MyFolio Page</h1>
        <button className="cursor-pointer" onClick={handleShare}>x</button>
      </div>
      <div className="h-12 border-1 border-indie-100 w-full flex items-center justify-between my-2 rounded-md">
        <div className="flex gap-2 items-center px-2">
          <span>
            <FaCopy color="white" />
          </span>
          {`https://myfolio.tech/portfolio/${username}`}
        </div>
        <button
          className="mx-2 bg-indie-100 p-1.5 rounded-md cursor-pointer text-indie-400"
          onClick={handleCopy}
        >
          {!copied ? "COPY" : "COPIED!"}
        </button>
      </div>
    </div>
  );
}

export default Share;
