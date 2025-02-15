import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSkills } from "../features/user/userSlice";
import StackIcon from "tech-stack-icons";

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

{
  /* <StackIcon name="vim"/> */
}

function Techstack() {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function handleSelect(value) {
    setSelectedSkill(value);
    setIsOpen(false);
  }

  function handleAdd() {
    dispatch(addSkills(selectedSkill));
  }

  return (
    <div className="flex flex-col justify-start gap-4 mb-4 ml-4">
      <label className="text-start ml-2">Tech Stack</label>
      <div className="relative flex w-full gap-2 justify-center items-center">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2.5 rounded-lg border-2 border-indie-600 text-start
          focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent cursor-pointer min-w-[200px]
          bg-indie-700 text-indie-100 w-full h-12"
        >
          {selectedSkill ? (
            <div className="flex gap-6 justify-center items-center">
              <div className="w-8 h-8">
                <StackIcon name={selectedSkill} />
              </div>
              {techOptions.find(tech => tech.value === selectedSkill)?.label}
            </div>
          ) : (
            "Select your Tech Stack"
          )}
        </div>
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-full max-h-60 overflow-y-auto bg-indie-500 border-2 border-indie-600 rounded-lg">
            {techOptions.map((tech) => (
              <div
                key={tech.value}
                onClick={() => handleSelect(tech.value)}
                className="flex items-center gap-8 w-full p-2 hover:bg-indie-400 cursor-pointer h-12"
              >
                <div className="w-6 h-6">
                  <StackIcon name={tech.value} />
                </div>
                {tech.label}
              </div>
            ))}
          </div>
        )}
        <button
        className="bg-veronica-700 text-indie-500 px-4 rounded-full border-2 border-indie-600 hover:cursor-pointer hover:bg-veronica-700
        hover:text-indie-100 focus:outline-none focus:ring-2 focus:ring-indie-600 focus:border-transparent h-12 mr-2"
        onClick={handleAdd}
      >
        +
      </button>
      </div>
      
    </div>
  );
}

export default Techstack;
