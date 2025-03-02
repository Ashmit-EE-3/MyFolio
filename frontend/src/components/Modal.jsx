import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";

function Modal({ setModal }) {
    const navigate=useNavigate();
    const username=useSelector((state)=>state.user.username?.username)||null;
    function handleClick()
    {
        if(!username){
            toast.error("Please fill your details first!",{
                position: "top-center",
                autoClose: 1000,
                transition: Slide,
                style: {
                  width: "auto",
                  whiteSpace: "nowrap",
                  padding: "12px 20px",
                  fontFamily: "Poppins",
                },
              })
            return;
        }
        navigate(`/portfolio/${username}`);
    }
  return createPortal(
    <div className="fixed z-21 inset-0 backdrop-blur-sm flex items-center justify-center">
      <div className="text-indie-100 md:p-6 p-3 flex flex-col md:gap-10 gap-6 w-[90%] max-w-md bg-indie-800 rounded-lg">
        <div className="lg:text-xl md:text-lg text-xs font-semibold">
          <h1>Are you sure you want to proceed?</h1>
        </div>
        <div className="flex md:gap-4 gap-2 justify-end items-center text-lg">
          <button className="py-2 px-4 md:rounded-lg rounded-md cursor-pointer hover:bg-indie-400" onClick={() => setModal(false)}>
            No
          </button>
          <button className="py-2 px-4 md:rounded-lg rounded-md bg-veronica-800 cursor-pointer hover:bg-veronica-900"
          onClick={handleClick}>
            Yes
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("page")
  );
}

export default Modal;
