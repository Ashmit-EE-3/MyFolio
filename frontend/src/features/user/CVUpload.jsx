/* eslint-disable react/prop-types */
import { IoCloudUploadOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { useState } from "react";
function PdfUpload({
  file,
  setPdfFile,
  handleUserDetails,
  userData,
  setUserData,
}) {
  const pdfName = file ? file.name : "";
  const cv = useSelector((state) => state.user.userDetails?.resume);
  const [hover,setHover]=useState(false);
  async function handleFileUpload(e) {
    try {
      const file = e.target.files[0];
      if (file && file.type === "application/pdf") {
        setPdfFile(file);
      }
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "tch_image_upload");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dn17alkhg/raw/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Cloudinary Upload Error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Cloudinary Response Data: ", data);
      const resumeURL = data.secure_url;
      setUserData((prev) => ({
        ...prev,
        resume: resumeURL,
      }));
      handleUserDetails({
        ...userData,
        resume: resumeURL,
      });
    } catch (error) {
      console.log("Error uploading PDF: ", error);
    }
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
          onHoverStart={()=>setHover(true)}
          onHoverEnd={()=>setHover(false)}
          className="bg-veronica-700 hover:bg-veronica-800 focus:outline-none cursor-pointer px-6 py-2 rounded-lg text-indie-600 font-semibold tracking-wide transition duration-200 flex items-center gap-2 justify-center"
        >
          <motion.div className="flex items-center gap-2">
            <motion.span animate={{y:hover?-4:0}}>
              <IoCloudUploadOutline style={{ color: "#22222A" }} size={28} />
            </motion.span>
            <span>{pdfName || (cv && "UPLOADED CV ✔ ") || "UPLOAD PDF"}</span>
          </motion.div>
        </motion.button>
        {pdfName && (
          <p className="text-sm text-indie-300">Selected file: {pdfName}</p>
        )}
      </motion.div>
    </div>
  );
}

export default PdfUpload;
