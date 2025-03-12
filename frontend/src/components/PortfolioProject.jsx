/* eslint-disable react/prop-types */
const icons = projectIcons;
import { GoProjectRoadmap } from "react-icons/go";
import { projectIcons } from "../utils/helper";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { motion } from "motion/react";
import StackIcon from "tech-stack-icons";

function PortfolioProject({ project, flag, index, len }) {
  const {
    description,
    name,
    status,
    repoLink,
    images,
    projectLink,
    techstack,
  } = project;
  const halfDescription =
    flag && index === len - 1
      ? description.slice(0, 90)
      : description.slice(0, 25);
  const [showFull, setShowFull] = useState(false);
  const [number, setNumber] = useState(0);
  const imgLength = images.length;

  const [favicon, setFavicon] = useState();
  useEffect(
    function () {
      if (projectLink) {
        const domain = new URL(projectLink).hostname;
        const faviconApi = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
        setFavicon(faviconApi);
      }
    },
    [projectLink]
  );
  return (
    <div className="bg-[var(--primary-bg-color)] text-[var(--primary-text-color)] rounded-lg flex flex-col h-min overflow-hidden">
      <div
        className={`mx-1 ${
          flag && index === len - 1
            ? "hover:scale-[1.025]"
            : "hover:scale-[1.06]"
        } flex flex-col group gap-1 p-4 hover:bg-[var(--primary-button-color-hover)] transition duration-200 rounded-2xl cursor-default min-h-31`}
      >
        <div className="flex items-center justify-between gap-3 lg:gap-2">
          <div
            className={`${
              flag && index === len - 1 ? "gap-1.5 md:gap-3" : "gap-1"
            } flex items-center`}
          >
            <span className="group-hover:-rotate-15 transition delay-200">
              {favicon ? (
                <img src={favicon} className="h-6 w-6" />
              ) : (
                <GoProjectRoadmap
                  color="text-[var(--primary-text-color)]"
                  size={24}
                />
              )}
            </span>
            <h1
              className="text-sm md:text-xl lg:text-2xl md:font-bold font-semibold"
            >
              <a href={projectLink} className="cursor-pointer hover:underline whitespace-nowrap" target="_blank">
                {name}
              </a>
            </h1>
          </div>
          <p
            className={`md:text-[15px] text-xs bg-[var(--primary-text-color)] text-[var(--secondary-text-color)] rounded-full px-2 hidden md:block whitespace-nowrap`}
          >
            {icons[status]} {status}
          </p>
        </div>
        <p>
          {showFull ? description : halfDescription}
          {!showFull && description !== halfDescription && (
            <span
              className="md:text-xs text-[10px] cursor-pointer hover:text-[var(--secondary-text-color)]"
              onClick={() => setShowFull(!showFull)}
            >
              {" "}
              ...Read More
            </span>
          )}
          {showFull && description !== halfDescription && (
            <span
              className="md:text-xs text-[10px] cursor-pointer hover:text-[var(--secondary-text-color)]"
              onClick={() => setShowFull(!showFull)}
            >
              {" "}
              Read Less
            </span>
          )}
        </p>
        {repoLink && (
          <div className="">
            <div className="flex gap-2 items-center">
              <span>
                <FaGithub color="[var(--text-primary-color)]" />
              </span>
              <a
                href={repoLink}
                target="_blank"
                className="text-sm cursor-pointer hover:text-[var(--primary-button-color)]"
              >
                Visit Repository
              </a>
            </div>
          </div>
        )}
      </div>

      {imgLength > 0 && (
        <div className="relative group">
          <a href={projectLink} target="_blank">
            <div
              className={`p-4 relative ${
                techstack.length > 0
                  ? "group-hover:scale-[0.6] group-hover:blur-lg transition duration-1000"
                  : ""
              }`}
            >
              <motion.img
                src={images[number]}
                className="rounded-sm h-40 mx-auto w-min object-cover cursor-pointer"
              />
            </div>
          </a>
          <button
            className="absolute top-18 cursor-pointer left-2"
            onClick={() => setNumber(number - 1)}
            disabled={number == 0}
          >
            <FaAngleLeft
              color="[var(--secondary-bg-color)]"
              className="h-5 w-5"
            />
          </button>
          <button
            className="absolute top-18 right-3 cursor-pointer"
            disabled={number + 1 == imgLength}
            onClick={() => setNumber(number + 1)}
          >
            <FaAngleRight
              color="[var(--secondary-bg-color)]"
              className="h-5 w-5"
            />
          </button>
          <div className="absolute flex flex-wrap gap-4 inset-5 w-[90%] h-fit items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition duration-1000">
            {techstack.map((tech) => (
              <span key={tech} className="h-10 w-10">
                <StackIcon name={tech} />
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioProject;
