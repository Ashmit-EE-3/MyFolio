/* eslint-disable react/prop-types */
import { IoCloudUploadOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";
import { useState } from "react";
import { startLoading } from "./userSlice";
import { toastStyles } from "../../utils/helper";

function PdfUpload({
  file,
  setPdfFile,
  handleUserDetails,
  userData,
  setUserData,
}) {
  const dispatch = useDispatch();
  const [isUploading, setIsUploading] = useState(false);
  const pdfName = file ? file.name : "";
  const cv = useSelector((state) => state.user.userDetails?.resume);
  const [hover, setHover] = useState(false);
  async function handleFileUpload(e) {
    setIsUploading(true);
    try {
      dispatch(startLoading());
      const file = e.target.files[0];
      if (file && file.type === "application/pdf") {
        setPdfFile(file);
      }
      
      const formData = new FormData();
      formData.append('resume',file) ; 
      const res = await fetch('/api/v1/resume/upload',{
        method: 'POST',
        body: formData
      })

      const data = await res.json() ; 

      if (!res.ok){
        toast.error(data.message,toastStyles) ;
        setIsUploading(false) ; 
        return ; 
      }

      console.log(data) ; 
      setUserData((prev) => ({
        ...prev,
        resume: data.fileURL,
      }));
      handleUserDetails({
        ...userData,
        resume: data.fileURL,
      });
      toast.success("Saved!",toastStyles) 
    } catch (error) {
      console.log("Error uploading PDF: ", error);
    }
    setIsUploading(false);
  }
  return (
    <div>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        className="hidden"
        id="pdf-upload"
      />
      <motion.div className="flex flex-col gap-2">
        <motion.button
          onClick={() => document.getElementById("pdf-upload").click()}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          disabled={isUploading}
          className={`bg-veronica-700 disabled:opacity-50 hover:bg-veronica-800 focus:outline-none cursor-pointer text-[10px] md:text-[16px] h-8 md:h-12 px-6 py-2 rounded-lg text-indie-600 font-semibold tracking-wide transition duration-200 flex items-center gap-2 justify-center`}
        >
          {(isUploading) ?
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-600 border-t-transparent"></div>
              <span>Uploading...</span>
            </div> :
            <motion.div className="flex items-center gap-2">
              <motion.span animate={{ y: hover ? -4 : 0 }}>
                <IoCloudUploadOutline style={{ color: "#22222A" }} size={28} />
              </motion.span>
              <span>{pdfName || (cv && "UPLOADED CV ✔ ") || "UPLOAD PDF"}</span>
            </motion.div>}

        </motion.button>
        {pdfName && !isUploading && (
          <p className="text-sm text-indie-300">Selected file: {pdfName}</p>
        )}
      </motion.div>
    </div>
  );
}

export default PdfUpload;
