/* eslint-disable react/prop-types */
import PdfUpload from "../../components/PdfUpload";

function UserCertificate({ setClink, setCname, pdfFile,setPdfFile, cname, clink }) {

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
              onChange={(e) => setCname(e.target.value)}
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
              onChange={(e) => setClink(e.target.value)}
            />
          </div>
        </div>
      </div>
      <PdfUpload file={pdfFile} setPdfFile={setPdfFile} />
    </>
  );
}

export default UserCertificate;
