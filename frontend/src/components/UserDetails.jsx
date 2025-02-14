/* eslint-disable react/prop-types */


function UserDetails({ selected, setSelected, Icon, text }) {
  return (
    <span
      className={`p-2 hover:bg-indie-400 rounded-full ml-2 relative group cursor-pointer ${
        selected[text] ? "bg-indie-400" : ""
      }`}
      onClick={() =>
        setSelected((prev) => {
          const newState = { ...prev };
          Object.keys(newState).forEach((key) => {
            newState[key] = key === text ? !newState[key] : false;
          });
          return newState;
        })
      }
    >
      <div className="absolute -top-10 left-1/2 bg-black text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
        {text}
      </div>
      <Icon size={28} />
    </span>
  );
}

export default UserDetails;
