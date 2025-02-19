/* eslint-disable react/prop-types */
import CertificatePdf from "./CertificatePdf";

function UserCertificate({ setClink, setCname, pdfFile,setPdfFile, cname, clink,setUserData,userData,handleUserDetails }) {
  function handleName(e)
  {
    const name=e.target.value
    setCname(e.target.value)
    setUserData((prev)=>({...prev,cname:name}))
    handleUserDetails({...userData,cname:name})
  }
  function handleLink(e)
  {
    const link=e.target.value
    setClink(e.target.value)
    setUserData((prev)=>({...prev,clink:link}))
    handleUserDetails({...userData,clink:link})
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
              value={cname}
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
              value={clink}
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
