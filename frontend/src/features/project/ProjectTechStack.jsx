/* eslint-disable react/prop-types */
import { useState } from "react";
import { Slide, toast } from "react-toastify";
import StackIcon from "tech-stack-icons";
import Select from "react-select";
import { motion } from "motion/react";
const techOptions = [
  { value: "angular", label: "Angular" },
  { value: "ai", label: "Adobe Illustrator" },
  { value: "apache", label: "Apache" },
  { value: "atom", label: "Atom" },
  { value: "aws", label: "AWS" },
  { value: "azure", label: "Azure" },
  { value: "babel", label: "Babel" },
  { value: "bash", label: "Bash" },
  { value: "bootstrap4", label: "Bootstrap" },
  { value: "c++", label: "C++" },
  { value: "canva", label: "Canva" },
  { value: "chakraui", label: "Chakra UI" },
  { value: "csharp", label: "C#" },
  { value: "css3", label: "CSS" },
  { value: "dart", label: "Dart" },
  { value: "django", label: "Django" },
  { value: "docker", label: "Docker" },
  { value: "figma", label: "Figma" },
  { value: "firebase", label: "Firebase" },
  { value: "flask", label: "Flask" },
  { value: "flutter", label: "Flutter" },
  { value: "gcloud", label: "Google Cloud" },
  { value: "git", label: "Git" },
  { value: "github", label: "GitHub" },
  { value: "gitlab", label: "GitLab" },
  { value: "go", label: "Go" },
  { value: "graphql", label: "GraphQL" },
  { value: "html5", label: "HTML" },
  { value: "id", label: "InDesign" },
  { value: "java", label: "Java" },
  { value: "jquery", label: "jQuery" },
  { value: "js", label: "JavaScript" },
  { value: "kotlin", label: "Kotlin" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "laravel", label: "Laravel" },
  { value: "linux", label: "Linux" },
  { value: "mariadb", label: "MariaDB" },
  { value: "materialui", label: "Material UI" },
  { value: "mongodb", label: "MongoDB" },
  { value: "mongoose", label: "Mongoose" },
  { value: "mysql", label: "MySQL" },
  { value: "nextjs", label: "Next.js" },
  { value: "nodejs", label: "Node.js" },
  { value: "nuxtjs", label: "Nuxt.js" },
  { value: "openai", label: "OpenAI" },
  { value: "php", label: "PHP" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "postman", label: "Postman" },
  { value: "ps", label: "Photoshop" },
  { value: "python", label: "Python" },
  { value: "pytorch", label: "PyTorch" },
  { value: "radixui", label: "Radix UI" },
  { value: "reactjs", label: "React" },
  { value: "redis", label: "Redis" },
  { value: "redux", label: "Redux" },
  { value: "reactrouter", label: "React Router" },
  { value: "reactquery", label: "React Query" },
  { value: "rust", label: "Rust" },
  { value: "ruby", label: "Ruby" },
  { value: "sass", label: "Sass" },
  { value: "scala", label: "Scala" },
  { value: "shadcnui", label: "shadcn/ui" },
  { value: "slack", label: "Slack" },
  { value: "spring", label: "Spring" },
  { value: "streamlit", label: "Streamlit" },
  { value: "supabase", label: "Supabase" },
  { value: "sveltejs", label: "Svelte" },
  { value: "swift", label: "Swift" },
  { value: "tailwindcss", label: "Tailwind CSS" },
  { value: "typescript", label: "TypeScript" },
  { value: "ubuntu", label: "Ubuntu" },
  { value: "vim", label: "Vim" },
  { value: "vitejs", label: "Vite" },
  { value: "vscode", label: "VS Code" },
  { value: "vuejs", label: "Vue.js" },
  { value: "wordpress", label: "WordPress" },
  { value: "webpack", label: "Webpack" },
  { value: "yoga", label: "Yoga" },
  { value: "zod", label: "Zod" },
  { value: "sublime", label: "Sublime" },
  { value: "solidity", label: "Solidity" },
  { value: "jira", label: "Jira" },
  { value: "elastic", label: "Elasticsearch" },
  { value: "elixir", label: "Elixir" },
  { value: "electron", label: "Electron" },
  { value: "copilotgithub", label: "GitHub Copilot" },
  { value: "analytics", label: "Analytics" },
].sort((a, b) => a.label.localeCompare(b.label));

function ProjectTechstack({ skills, setSkills }) {
  const [selectedSkill, setSelectedSkill] = useState("");

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      maxWidth: "290px",
      padding: "1px",
      border: "2px solid rgba(255, 255, 255, 0.1)",
      backgroundColor: "#282A36",
      color: "white",
      cursor: "pointer",
      alignItems: "left",
      minHeight: "32px",
      "@media (min-width: 650px)": {
        minHeight: "40px",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#414558" : "#282A36",
      color: "white",
      display: "flex",
      padding: "4px",
      cursor: "pointer",
      alignItems: "left",
      fontSize: "10px",
      "@media (min-width: 650px)": {
        padding: "10px",
        fontSize: "14px",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "left",
      color: "white",
      fontSize: "10px",
      "@media (min-width: 650px)": {
        fontSize: "14px",
      },
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
    placeholder: (provided) => ({
      ...provided,
      textAlign: "left",
      width: "100%",
    }),
  };

  const options = techOptions.map(({ value, label }) => ({
    value: value,
    label: (
      <div className="flex gap-2 md:gap-6 justify-start items-center">
        <div className="w-6 h-6 md:w-8 md:h-8">
          <StackIcon name={value} />
        </div>
        {label}
      </div>
    ),
  }));

  function handleAdd() {
    if (!selectedSkill) {
      toast.error("Please select a tool!", {
        position: "top-center",
        autoClose: 1000,
        transition: Slide,
      });
      return;
    }
    var present = false;
    skills.map((skill) => {
      if (skill === selectedSkill) present = true;
    });
    if (present) {
      toast.error("Skill already present!", {
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
      return;
    }
    setSkills([...skills, selectedSkill]);
  }
  function handleDelete(skill) {
    setSkills((prev) => prev.filter((s) => s !== skill));
  }

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className="border-t-2 border-indie-300/30"></div>
      <label className="text-start text-[10px] md:text-xs lg:text-[16px]">Tech Stack💻</label>
      <div className="w-full flex gap-2 justify-items-start items-start">
        <Select
          className="w-full text-[10px] md:text-xs lg:text-[16px]"
          options={options}
          styles={customStyles}
          isSearchable={true}
          placeholder="Select your Tech Stack 👨‍💻"
          onChange={(selected) => {
            setSelectedSkill(selected.value);
          }}
        />
        <motion.button
          className="bg-veronica-700 text-indie-500 w-10 h-9 md:w-12 md:h-12 rounded-full border-2 border-indie-600 hover:cursor-pointer hover:bg-veronica-800
       focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent text-sm md:text-[16px]"
          onClick={handleAdd}
          type="button"
        >
          <motion.div
            animate={{ rotate: [0, 90] }}
            transition={{ repeatDelay: 2, duration: 0.2, repeat: Infinity }}
          >
            +
          </motion.div>
        </motion.button>
      </div>
      {skills.length > 0 && (
        <ul className="flex gap-2 md:gap-4 flex-wrap">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="bg-indie-400 h-8 md:h-12 flex justify-between w-fit px-1 md:px-2 gap-1 md:gap-2 items-center rounded-lg md:rounded-xl"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <li className="w-5 h-5 md:w-7 md:h-7">
                <span>
                  <StackIcon name={skill} />
                </span>
              </li>
              <button
                className="rotate-45 text-[10px] md:text-xs bg-veronica-700 rounded-full text-indie-500 w-4 h-4 md:w-5 md:h-5 flex justify-center items-center
              hover:bg-veronica-800 cursor-pointer focus:outline-none focus:border-transparent"
                onClick={() => handleDelete(skill)}
              >
                {" "}
                +{" "}
              </button>
            </motion.div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectTechstack;
