/* eslint-disable react/prop-types */
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast, Slide } from "react-toastify";
const ProjectImage = ({ images, setImages }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && /^image\/(jpeg|png|jpg)$/.test(file.type)) {
      setImages([...images, file]);
      toast.success("Image uploaded successfully", {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px",
        },
      });
    } else {
      toast.error("Please upload a JPG, JPEG or PNG file", {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
        style: {
          width: "auto",
          whiteSpace: "nowrap",
          padding: "12px 20px",
        },
      });
    }
  };

  function handleImageDelete(image) {
    setImages((prev) => prev.filter((img) => img !== image));
  }

  return (
    <div className="py-2 w-full">
      <input
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        className="hidden"
        id="image-upload"
        // {...register("image", { // because of register, onChange is not working, so we need to handle it manually
        //   onChange: (e) => handleImageUpload(e),
        // })}
        onChange={handleImageUpload}
      />
      {images && (
        <div className="flex gap-4">
          {images.map((image, index) => (
            <div className="relative" key={index}>
              <img src={URL.createObjectURL(image)} alt="Project"/>
              <span
                className="absolute rounded-full bg-veronica-700 text-indie-600 text-xs w-5 h-5 flex items-center justify-center top-0
            cursor-pointer hover:bg-veronica-800"
                onClick={() => handleImageDelete(image)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      )}
      <div className={`flex flex-col gap-2 ${images.length > 0 ? "my-4" : ""}`}>
        <button
          onClick={() => document.getElementById("image-upload").click()}
          type="button"
          className="bg-veronica-700 hover:bg-veronica-800 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 cursor-pointer px-6 py-2 rounded-lg text-indie-600 font-semibold tracking-wide transition duration-200 flex items-center gap-2 justify-center"
        >
          <span>
            <IoCloudUploadOutline style={{ color: "#22222A" }} size={28} />
          </span>
          UPLOAD IMAGE
        </button>
      </div>
    </div>
  );
};

export default ProjectImage;
