/* eslint-disable react/prop-types */
import { IoCloudUploadOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
function CertificatePdf({ file, setPdfFile, handleUserDetails, userData, setUserData }) {
  const pdfName = file ? file.name : "";
  
  async function handleFileUpload(e) {
    try {
      const file = e.target.files[0];
      if (file && file.type === "application/pdf") {
        setPdfFile(file);
      }
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "tch_image_upload");

      const response = await fetch("https://api.cloudinary.com/v1_1/dn17alkhg/raw/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Cloudinary Upload Error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Cloudinary Response Data: ", data);
      const certificateURL = data.secure_url;
      setUserData((prev) => ({
        ...prev, certificate: {
          ...prev.certificate,
          certificatePDF: certificateURL
        }
      }))
      handleUserDetails({
        ...userData, certificate: {
          ...userData.certificate,
          certificatePDF: certificateURL
        }
      })
    }
    catch (error) {
      console.log("Error uploading images: ", error);
    }
  }
  return (
    <div className="px-6 py-2">
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        className="hidden"
        id="pdf-upload"
      />
      <div className="flex flex-col gap-2">
        <button
          onClick={() => document.getElementById("pdf-upload").click()}
          className="bg-veronica-700 hover:bg-veronica-800 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 cursor-pointer px-6 py-2 rounded-lg text-indie-600 font-semibold tracking-wide transition duration-200 flex items-center gap-2 justify-center"
        >
          <span>
            <IoCloudUploadOutline style={{ color: "#22222A" }} size={28} />
          </span>
          {pdfName  || "UPLOAD PDF"}
        </button>
        {pdfName && (
          <p className="text-sm text-indie-300">Selected file: {pdfName}</p>
        )}
      </div>
    </div>
  );
}

export default CertificatePdf;
