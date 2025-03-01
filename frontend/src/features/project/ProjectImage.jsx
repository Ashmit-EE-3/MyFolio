/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast, Slide } from "react-toastify";
const ProjectImage = ({ images, setImages }) => {
  const [isUploading, setIsUploading] = useState(false);
  const handleImageUpload = (e) => {
    setIsUploading(true);
    const file = e.target.files[0];
    if (file && /^image\/(jpeg|png|jpg)$/.test(file.type)) {
      setImages([...images, file]);
      toast.success("Image uploaded successfully!", {
        position: "top-center",
        autoClose: 1000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px",
          fontFamily: "Poppins",
        },
      });
    } else {
      toast.error("Please upload a JPG, JPEG, or PNG file", {
        position: "top-center",
        autoClose: 1000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px",
          fontFamily: "Poppins",
        },
      });
    }
    setIsUploading(false);
  };

  function handleImageDelete(image) {
    setImages((prev) => prev.filter((img) => img !== image));
  }

  return (
    <div className="w-full md:space-y-4 space-y-2">
      <input
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        className="hidden"
        id="image-upload"
        onChange={handleImageUpload}
      />
      <div>
        {images && (
          <div className="flex md:gap-4 gap-2">
            {images.map((image, index) => (
              <div className="relative" key={index}>
                <img src={URL.createObjectURL(image)} alt="Project" />
                <span
                  className="absolute rounded-full bg-veronica-700 text-indie-600 text-xs w-5 h-5 flex items-center justify-center top-0
            cursor-pointer hover:bg-veronica-800 rotate-45"
                  onClick={() => handleImageDelete(image)}
                >
                  +
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => document.getElementById("image-upload").click()}
          type="button"
          className="bg-veronica-700 hover:bg-veronica-800 h-8 md:h-12 md:text-[16px] focus:outline-none cursor-pointer px-6 py-2 rounded-lg text-indie-600 font-semibold tracking-wide transition duration-200 flex items-center gap-2 justify-center"
        >
          {isUploading ?
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-indie-600 border-t-transparent"></div>
              <span>Uploading...</span>
            </div> :
            <div className="flex items-center gap-2">
              <span>
                <IoCloudUploadOutline style={{ color: "#22222A" }} className="h-4 w-4 md:h-8 md:w-8" />
              </span>
              <span>UPLOAD IMAGE</span>
            </div>}
        </button>
      </div>
    </div>
  );
};

export default ProjectImage;
