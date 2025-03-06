/* eslint-disable react/prop-types */
import { GoProjectRoadmap } from "react-icons/go";
function PortfolioProject({ name }) {
  return (
    <div className="flex gap-4 bg-[var(--primary-bg-color)] p-5 text-[var(--primary-text-color)] items-center rounded-lg">
      <span>
        <GoProjectRoadmap color="text-[var(--primary-text-color)]" size={24}/>
      </span>
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl">{name}</h1>
    </div>
  );
}

export default PortfolioProject;
