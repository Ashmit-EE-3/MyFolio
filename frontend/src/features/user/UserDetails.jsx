/* eslint-disable react/prop-types */


function UserDetails({ selected, setSelected, Icon, text }) {
  return (
    <span
      className={`hover:bg-indie-400 rounded-full relative group cursor-pointer p-1 ${
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
      <Icon className="h-4 w-4 lg:h-8 lg:w-8 md:h-6 md:w-6" />
    </span>
  );
}

export default UserDetails;
