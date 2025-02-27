/* eslint-disable react/prop-types */
import { useRef } from "react";
import CertificatePdf from "./CertificatePdf";
import { motion } from "motion/react";

function UserCertificate({pdfFile,setPdfFile, setUserData,userData,handleUserDetails }) {
  const typingTimeout = useRef(null);
  function handleName(e)
  {
    const name=e.target.value
    
    if (typingTimeout.current){
      clearTimeout(typingTimeout.current) ; 
    }

    typingTimeout.current = setTimeout(()=>{
      setUserData((prev)=>({
        ...prev,
        certificate:{
          ...(prev?.certificate||{}),
          certificateName:name,
        },
      }))
      handleUserDetails({
        ...(userData||{}),
        certificate: {
          ...(userData?.certificate||{}),
          certificateName:name,
        },
      })
    }, 2000)
  }

  function handleLink(e)
  {
    const link=e.target.value
    
    if (typingTimeout.current){
      clearTimeout(typingTimeout.current) ; 
    }

    typingTimeout.current = setTimeout(()=>{
      setUserData((prev)=>({
        ...prev,
        certificate:{
          ...(prev?.certificate||{}),
          certificateLink:link,
        },
      }))
      handleUserDetails({
        ...(userData||{}),
        certificate: {
          ...(userData?.certificate||{}),
          certificateLink:link,
        },
      })
    }, 2000)
  }

  return (
    <>
      <div className="flex flex-col gap-4 border-indie-400">
        <div className="flex border-indie-400 gap-2">
          <div className="flex items-center border-2 border-indie-100/10 rounded-sm w-full">
            <div className="bg-indie-400 p-3 inline-block h-12">
              <span className> 🏆 </span>
            </div>
            <motion.input
              type="text"
              defaultValue={userData?.certificate?.certificateName||""}    
              placeholder="Certification Name"
              className="w-full p-2 h-12 rounded-md focus:outline-none bg-indie-500 placeholder:opacity-30"
              onChange={handleName}
              whileFocus={{ boxShadow: "0px 0px 2px 2px #414558" }}
            />
          </div>
        </div>
        <div className="flex border-indie-400 gap-2">
          <div className="flex items-center border-2 border-indie-100/10 rounded-sm w-full">
            <div className="bg-indie-400 p-3 inline-block h-12">
              <span className> 🔗 </span>
            </div>
            <motion.input
              type="url"
              defaultValue={userData?.certificate?.certificateLink||""}
              placeholder="Certification Link"
              className="w-full p-2 h-12 rounded-md focus:outline-none bg-indie-500 placeholder:opacity-30"
              onChange={handleLink}
              whileFocus={{ boxShadow: "0px 0px 2px 2px #414558" }}
            />
          </div>
        </div>
      </div>
      <CertificatePdf file={pdfFile} setPdfFile={setPdfFile} setUserData={setUserData} userData={userData} handleUserDetails={handleUserDetails}  />
    </>
  );
}

export default UserCertificate;
