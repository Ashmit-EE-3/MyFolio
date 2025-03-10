/* eslint-disable react/prop-types */
function ProjectStatus({register}) {
  return (
    <div className="flex lg:gap-4 gap-2 flex-col">
      <div className="border-t-2 border-indie-300/30"></div>
      <div className="flex gap-2 w-full">
        <label className="text-start text-[10px] md:text-sm lg:text-[16px]">
          Project Status
        </label>
      </div>
      <div className="font-poppins">
        <select
          name="status"
          defaultValue=""
          className="text-indie-100 rounded-lg border-2 border-indie-600 bg-indie-600
      focus:outline-none focus:border-transparent cursor-pointer
      text-start w-full px-2 md:h-10 h-8"
          {...register("status")}
        >
          <option value="" disabled>
            Pick One
          </option>
          <option value="Planning">🖖 Planning...</option>
          <option value="In Progress">🔥 In Progess...</option>
          <option value="Completed">✅ Completed</option>
          <option value="Deployed">🚀 Deployed</option>
        </select>
      </div>
    </div>
  );
}

export default ProjectStatus;
