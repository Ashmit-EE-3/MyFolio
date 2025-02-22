/* eslint-disable react/prop-types */
import { useRef } from "react";
import CertificatePdf from "./CertificatePdf";

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
          ...prev.certificate,
          certificateName:name,
        },
      }))
      handleUserDetails({
        ...userData,
        certificate: {
          ...userData.certificate,
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
          ...prev.certificate,
          certificateLink:link,
        },
      }))
      handleUserDetails({
        ...userData,
        certificate: {
          ...userData.certificate,
          certificateLink:link,
        },
      })
    }, 2000)
  }

  return (
    <>
      <div className="flex flex-col gap-3 px-4 border-indie-400">
        <div className="flex mx-2 border-indie-400 gap-2">
          <div className="flex items-center border-2 border-indie-100/10 rounded-sm w-full">
            <div className="bg-indie-400 border-r-2 border-indie-100/10 p-3 inline-block h-12">
              <span className> 🏆 </span>
            </div>
            <input
              type="text"
              defaultValue={userData.certificate.certificateName}
              placeholder="Certification Name"
              className="w-full p-2 h-full
                  focus:outline-none focus:ring focus:ring-offset-1 focus:ring-indie-400"
              onChange={handleName}
            />
          </div>
        </div>
        <div className="flex mx-2 border-indie-400 gap-2">
          <div className="flex items-center border-2 border-indie-100/10 rounded-sm w-full">
            <div className="bg-indie-400 border-r-2 border-indie-100/10 p-3 inline-block h-12">
              <span className> 🔗 </span>
            </div>
            <input
              type="url"
              defaultValue={userData.certificate.certificateLink}
              placeholder="Certification Link"
              className="w-full p-2 h-full
                  focus:outline-none focus:ring focus:ring-offset-1 focus:ring-indie-400"
              onChange={handleLink}
            />
          </div>
        </div>
      </div>
      <CertificatePdf file={pdfFile} setPdfFile={setPdfFile} setUserData={setUserData} userData={userData} handleUserDetails={handleUserDetails}  />
    </>
  );
}

export default UserCertificate;
