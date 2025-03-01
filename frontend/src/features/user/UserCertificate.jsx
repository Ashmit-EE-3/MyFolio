/* eslint-disable react/prop-types */
import { useRef } from "react";
import CertificatePdf from "./CertificatePdf";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { startLoading } from "./userSlice";

function UserCertificate({pdfFile,setPdfFile, setUserData,userData,handleUserDetails }) {
  const typingTimeout = useRef(null);
  const loading = useSelector((state)=>state.user.loading);
  const dispatch = useDispatch();
  function handleName(e)
  {
    const name=e.target.value
    
    if (typingTimeout.current){
      clearTimeout(typingTimeout.current) ; 
    }
    dispatch(startLoading());
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
    dispatch(startLoading());
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
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 border-indie-400 text-[10px] md:text-sm lg:text-[16px]">
        <div className="flex border-indie-400 gap-2">
          <div className="relative flex items-center border-2 border-indie-100/10 rounded-sm w-full">
            <div className="bg-indie-400 md:p-3 p-1.5 inline-block md:h-12 h-8">
              <span> 🏆 </span>
            </div>
            <motion.input
              type="text"
              defaultValue={userData?.certificate?.certificateName||""}    
              placeholder="Certification Name"
              className="w-full p-2 md:h-12 h-8 md:rounded-md focus:outline-none bg-indie-500 placeholder:opacity-30 placeholder:text-[10px] md:placeholder:text-[16px]"
              onChange={handleName}
              whileFocus={{ boxShadow: "0px 0px 2px 2px #414558" }}
            />
            {loading && document.activeElement === document.querySelector('input[placeholder="Certification Name"]') && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-100 border-t-transparent"></div>
                  </div>
                )}
          </div>
        </div>
        <div className="flex border-indie-400 gap-2">
          <div className="relative flex items-center border-2 border-indie-100/10 rounded-sm w-full">
            <div className="bg-indie-400 md:p-3 p-1.5 inline-block md:h-12 h-8">
              <span> 🔗 </span>
            </div>
            <motion.input
              type="url"
              defaultValue={userData?.certificate?.certificateLink||""}
              placeholder="Certification Link"
              className="w-full p-2 md:h-12 h-8 placeholder:text-[10px] md:placeholder:text-[16px] md:rounded-md focus:outline-none bg-indie-500 placeholder:opacity-30"
              onChange={handleLink}
              whileFocus={{ boxShadow: "0px 0px 2px 2px #414558" }}
            />
            {loading && document.activeElement === document.querySelector('input[placeholder="Certification Link"]') && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-100 border-t-transparent"></div>
                  </div>
                )}
          </div>
        </div>
      </div>
      <CertificatePdf file={pdfFile} setPdfFile={setPdfFile} setUserData={setUserData} userData={userData} handleUserDetails={handleUserDetails}  />
    </div>
  );
}

export default UserCertificate;
