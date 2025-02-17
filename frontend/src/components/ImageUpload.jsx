/* eslint-disable react/prop-types */
import { IoCloudUploadOutline } from "react-icons/io5";
import {toast,Slide} from "react-toastify"
const ImageUpload = ({ register }) => {
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file && /^image\/(jpeg|png|jpg)$/.test(file.type)) {
        toast.success("Image uploaded successfully",{
          position: 'top-center',
          autoClose: 2000,
          transition: Slide,
          style: {
            width: "auto",
            whiteSpace: "nowrap",
            padding: "12px 20px"
          }
        });
      } else {
        toast.error("Please upload a JPG, JPEG or PNG file",{position: 'top-center',
          autoClose: 2000,
          transition: Slide,
          style: {
            width: "auto",
            whiteSpace: "nowrap",
            padding: "12px 20px"
          }
        });
      }
    };
  
    return (
      <div className="py-2 w-full">
        <input 
          type="file" 
          accept="image/jpeg, image/png, image/jpg"
          onChange={handleImageUpload}
          className="hidden"
          id="image-upload"
          {...register("image",{
            onChange:(e)=>handleImageUpload(e)
          })}
        />
        <div className="flex flex-col gap-2">
          <button 
            onClick={() => document.getElementById('image-upload').click()}
            type="button"
            className="bg-veronica-700 hover:bg-veronica-800 focus:outline-none focus:ring focus:ring-veronica-800 focus:ring-offset-2 cursor-pointer px-6 py-2 rounded-lg text-indie-600 font-semibold tracking-wide transition duration-200 flex items-center gap-2 justify-center"
          >
            <span><IoCloudUploadOutline style={{ color: '#22222A' }} size={28}/></span>
            UPLOAD IMAGE
          </button>
        </div>
      </div>
    );
  };

export default ImageUpload;