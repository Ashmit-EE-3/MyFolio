import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSkills } from "../features/user/userSlice";

import {
  FaPython,
  FaJava,
  FaJs,
  FaPhp,
  FaHtml5,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNode,
  FaAws,
  FaDocker,
  FaLinux,
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaRProject,
  FaSwift,
  FaAndroid,
  FaCode,
  FaMicrosoft,
  FaGoogle,
  FaPaintBrush,
  FaRobot,
  FaBrain,
  FaShieldAlt,
  FaPalette,
  FaMobile,
  FaNetworkWired,
  FaFlask,
  FaChartBar,
  FaCubes,
  FaUserSecret,
  FaInfinity,
} from "react-icons/fa";

import {
  DiRuby,
  DiGo,
  DiDjango,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiRedis,
  DiJenkins,
  DiHeroku,
  DiNpm,
  DiVisualstudio,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiGit,
  DiCss3,
  DiScala,
  DiRust,
  DiMaterializecss,
  DiLaravel,
  DiWordpress,
  DiJqueryLogo,
  DiFirebase,
} from "react-icons/di";

const techOptions = [
  // Programming Languages
  {
    value: "python",
    label: "Python",
    icon: <FaPython className="text-blue-500" />,
  },
  {
    value: "javascript",
    label: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
  },
  { value: "java", label: "Java", icon: <FaJava className="text-red-500" /> },
  { value: "c", label: "C", icon: <FaCode className="text-blue-700" /> },
  { value: "cpp", label: "C++", icon: <FaCode className="text-blue-600" /> },
  {
    value: "csharp",
    label: "C#",
    icon: <FaCode className="text-purple-600" />,
  },
  { value: "ruby", label: "Ruby", icon: <DiRuby className="text-red-600" /> },
  {
    value: "swift",
    label: "Swift",
    icon: <FaSwift className="text-orange-500" />,
  },
  {
    value: "kotlin",
    label: "Kotlin",
    icon: <FaCode className="text-orange-600" />,
  },
  { value: "go", label: "Go", icon: <DiGo className="text-blue-400" /> },
  {
    value: "rust",
    label: "Rust",
    icon: <DiRust className="text-orange-700" />,
  },
  { value: "php", label: "PHP", icon: <FaPhp className="text-purple-600" /> },
  { value: "r", label: "R", icon: <FaRProject className="text-blue-600" /> },
  {
    value: "typescript",
    label: "TypeScript",
    icon: <DiJavascript1 className="text-blue-600" />,
  },
  {
    value: "scala",
    label: "Scala",
    icon: <DiScala className="text-red-500" />,
  },

  // Web Development
  {
    value: "html_css",
    label: "HTML & CSS",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    value: "nodejs",
    label: "Node.js",
    icon: <FaNode className="text-green-600" />,
  },
  {
    value: "django",
    label: "Django",
    icon: <DiDjango className="text-green-800" />,
  },
  {
    value: "flask",
    label: "Flask",
    icon: <FaFlask className="text-gray-700" />,
  },
  {
    value: "express",
    label: "Express.js",
    icon: <DiNodejsSmall className="text-green-600" />,
  },
  {
    value: "laravel",
    label: "Laravel",
    icon: <DiLaravel className="text-red-500" />,
  },
  {
    value: "wordpress",
    label: "WordPress",
    icon: <DiWordpress className="text-blue-500" />,
  },
  {
    value: "jquery",
    label: "jQuery",
    icon: <DiJqueryLogo className="text-blue-500" />,
  },

  // Web Frontend Frameworks
  {
    value: "react",
    label: "React",
    icon: <FaReact className="text-blue-400" />,
  },
  {
    value: "angular",
    label: "Angular",
    icon: <FaAngular className="text-red-600" />,
  },
  {
    value: "vue",
    label: "Vue.js",
    icon: <FaVuejs className="text-green-500" />,
  },
  {
    value: "svelte",
    label: "Svelte",
    icon: <FaCode className="text-orange-600" />,
  },
  {
    value: "nextjs",
    label: "Next.js",
    icon: <FaReact className="text-black" />,
  },
  {
    value: "nuxtjs",
    label: "Nuxt.js",
    icon: <FaVuejs className="text-green-600" />,
  },

  // DevOps & Cloud
  { value: "aws", label: "AWS", icon: <FaAws className="text-orange-500" /> },
  {
    value: "azure",
    label: "Azure",
    icon: <FaMicrosoft className="text-blue-500" />,
  },
  {
    value: "gcp",
    label: "Google Cloud",
    icon: <FaGoogle className="text-blue-500" />,
  },
  {
    value: "docker",
    label: "Docker",
    icon: <FaDocker className="text-blue-500" />,
  },
  {
    value: "kubernetes",
    label: "Kubernetes",
    icon: <FaCubes className="text-blue-600" />,
  },
  {
    value: "jenkins",
    label: "Jenkins",
    icon: <DiJenkins className="text-red-500" />,
  },
  {
    value: "heroku",
    label: "Heroku",
    icon: <DiHeroku className="text-purple-600" />,
  },

  // Databases
  {
    value: "mysql",
    label: "MySQL",
    icon: <DiMysql className="text-blue-500" />,
  },
  {
    value: "postgresql",
    label: "PostgreSQL",
    icon: <DiPostgresql className="text-blue-600" />,
  },
  {
    value: "mongodb",
    label: "MongoDB",
    icon: <DiMongodb className="text-green-500" />,
  },
  {
    value: "redis",
    label: "Redis",
    icon: <DiRedis className="text-red-500" />,
  },
  {
    value: "firebase",
    label: "Firebase",
    icon: <DiFirebase className="text-orange-500" />,
  },

  // Mobile Development
  {
    value: "flutter",
    label: "Flutter",
    icon: <FaMobile className="text-blue-400" />,
  },
  {
    value: "reactnative",
    label: "React Native",
    icon: <DiReact className="text-blue-500" />,
  },
  {
    value: "android",
    label: "Android",
    icon: <FaAndroid className="text-green-500" />,
  },
  {
    value: "swiftui",
    label: "SwiftUI",
    icon: <FaSwift className="text-orange-500" />,
  },
  {
    value: "kotlin_android",
    label: "Kotlin (Android)",
    icon: <FaAndroid className="text-green-600" />,
  },

  // Machine Learning & Data Science
  {
    value: "tensorflow",
    label: "TensorFlow",
    icon: <FaBrain className="text-orange-500" />,
  },
  {
    value: "scikitlearn",
    label: "Scikit-learn",
    icon: <FaChartBar className="text-blue-500" />,
  },
  {
    value: "keras",
    label: "Keras",
    icon: <FaBrain className="text-red-600" />,
  },
  {
    value: "pandas",
    label: "Pandas",
    icon: <FaChartBar className="text-blue-600" />,
  },

  // UI/UX & CSS Frameworks
  {
    value: "bootstrap",
    label: "Bootstrap",
    icon: <FaBootstrap className="text-purple-500" />,
  },
  {
    value: "tailwind",
    label: "Tailwind CSS",
    icon: <DiCss3 className="text-blue-400" />,
  },
  {
    value: "materialui",
    label: "Material UI",
    icon: <DiMaterializecss className="text-blue-500" />,
  },
  {
    value: "antdesign",
    label: "Ant Design",
    icon: <FaPalette className="text-blue-600" />,
  },

  // Generative AI
  {
    value: "openai",
    label: "OpenAI",
    icon: <FaRobot className="text-gray-700" />,
  },
  {
    value: "stablediffusion",
    label: "Stable Diffusion",
    icon: <FaPaintBrush className="text-purple-600" />,
  },
  {
    value: "midjourney",
    label: "Midjourney",
    icon: <FaInfinity className="text-indigo-500" />,
  },
  {
    value: "huggingface",
    label: "Hugging Face",
    icon: <FaRobot className="text-yellow-500" />,
  },

  // Cybersecurity
  {
    value: "kali",
    label: "Kali Linux",
    icon: <FaUserSecret className="text-black" />,
  },
  {
    value: "metasploit",
    label: "Metasploit",
    icon: <FaShieldAlt className="text-red-500" />,
  },
  {
    value: "wireshark",
    label: "Wireshark",
    icon: <FaNetworkWired className="text-blue-500" />,
  },
  {
    value: "burpsuite",
    label: "Burp Suite",
    icon: <FaUserSecret className="text-orange-500" />,
  },

  // Design Tools
  {
    value: "photoshop",
    label: "Adobe Photoshop",
    icon: <FaPalette className="text-blue-800" />,
  },
  {
    value: "figma",
    label: "Figma",
    icon: <FaFigma className="text-purple-500" />,
  },
  {
    value: "adobe_xd",
    label: "Adobe XD",
    icon: <FaPalette className="text-pink-600" />,
  },
  {
    value: "sketch",
    label: "Sketch",
    icon: <FaPaintBrush className="text-yellow-500" />,
  },
  {
    value: "canva",
    label: "Canva",
    icon: <FaPalette className="text-blue-500" />,
  },

  // Tools & Others
  { value: "git", label: "Git", icon: <DiGit className="text-orange-600" /> },
  {
    value: "github",
    label: "GitHub",
    icon: <FaGithub className="text-gray-800" />,
  },
  { value: "npm", label: "NPM", icon: <DiNpm className="text-red-500" /> },
  {
    value: "vscode",
    label: "VS Code",
    icon: <DiVisualstudio className="text-blue-500" />,
  },
  { value: "linux", label: "Linux", icon: <FaLinux className="text-black" /> },
];

function Techstack() {
  const [selectedSkill, setSelectedSkill] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setSelectedSkill(e.target.value);
  }
  function handleAdd() {
    dispatch(addSkills(selectedSkill));
  }

  return (
    <div className="flex items-center w-full justify-center gap-4 mb-2">
      <select
        name="tech_stack"
        className="p-2 text-indie-600 rounded-lg border-2 border-indie-600 bg-indie-300 text-center
      focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent cursor-pointer
      "
        value={selectedSkill}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select your Skill
        </option>
        {techOptions.map((tech) => (
          <option key={tech.value} value={tech.value}>
            {tech.label}
          </option>
        ))}
      </select>
      <button
        className="bg-indie-300 text-indie-600 p-2 w-16 rounded-lg border-2 border-indie-600 hover:cursor-pointer hover:bg-indie-400
       hover:text-indie-200 focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent
      "
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default Techstack;
