import { motion } from "framer-motion";
import { FaReact, FaJava, FaGithub, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiSpring, SiPostgresql, SiJsonwebtokens, SiVite, SiRedux, SiPostman, SiSocketdotio, SiTypescript } from "react-icons/si";

const SKILL_ICONS = {
  React: {
    Icon: FaReact,
    color: "text-[#61DAFB]"
  },
  "Tailwind CSS": {
    Icon: SiTailwindcss,
    color: "text-[#38B2AC]"
  },
  JavaScript: {
    Icon: SiJavascript,
    color: "text-[#F7DF1E]"
  },
  Java: {
    Icon: FaJava,
    color: "text-[#007396]"
  },
  Spring: {
    Icon: SiSpring,
    color: "text-[#6DB33F]"
  },
  PostgreSQL: {
    Icon: SiPostgresql,
    color: "text-[#336791]"
  },
  JWT: {
    Icon: SiJsonwebtokens,
    color: "text-[#000000] dark:text-white"
  },
  Git: {
    Icon: FaGitAlt,
    color: "text-[#F05032]"
  },
  GitHub: {
    Icon: FaGithub,
    color: "text-[#181717] dark:text-white"
  },
  Vite: {
    Icon: SiVite,
    color: "text-[#646CFF]"
  },
  Redux: {
    Icon: SiRedux,
    color: "text-[#764ABC]"
  },
  Postman: {
    Icon: SiPostman,
    color: "text-[#FF6C37]"
  },
  TypeScript: {
    Icon: SiTypescript,
    color: "text-[#3178C6]"
  },
  HTML: {
    Icon: FaHtml5,
    color: "text-[#E34F26]"
  },
  CSS: {
    Icon: FaCss3Alt,
    color: "text-[#1572B6]"
  },
  Socket: {
    Icon: SiSocketdotio,
    color: "text-[#010101] dark:text-white"
  }
};

const SkillItem = ({ skill }) => {
  const skillConfig = SKILL_ICONS[skill];
  
  if (!skillConfig) return null;
  
  const { Icon, color } = skillConfig;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center justify-evenly gap-5">
        <Icon className={`w-10 h-10 ${color}`} />
        <span className="text-gray-800 dark:text-white text-lg font-medium">
          {skill}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillItem;