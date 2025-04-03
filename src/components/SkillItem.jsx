import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiSpring,
  SiPostgresql,
  SiJsonwebtokens,
  SiVite,
  SiRedux,
  SiPostman,
  SiSocketdotio,
  SiTypescript,
  SiSupabase,
  SiNextdotjs,
} from "react-icons/si";
import PropTypes from "prop-types";

const SKILL_ICONS = {
  React: {
    Icon: FaReact,
    color: "text-[#61DAFB]",
  },
  "Tailwind CSS": {
    Icon: SiTailwindcss,
    color: "text-[#38B2AC]",
  },
  JavaScript: {
    Icon: SiJavascript,
    color: "text-[#F7DF1E]",
  },
  Java: {
    Icon: FaJava,
    color: "text-[#007396]",
  },
  Spring: {
    Icon: SiSpring,
    color: "text-[#6DB33F]",
  },
  PostgreSQL: {
    Icon: SiPostgresql,
    color: "text-[#336791]",
  },
  JWT: {
    Icon: SiJsonwebtokens,
    color: "text-[#000000] dark:text-white",
  },
  Git: {
    Icon: FaGitAlt,
    color: "text-[#F05032]",
  },
  GitHub: {
    Icon: FaGithub,
    color: "text-[#181717] dark:text-white",
  },
  Vite: {
    Icon: SiVite,
    color: "text-[#646CFF]",
  },
  Redux: {
    Icon: SiRedux,
    color: "text-[#764ABC]",
  },
  Postman: {
    Icon: SiPostman,
    color: "text-[#FF6C37]",
  },
  TypeScript: {
    Icon: SiTypescript,
    color: "text-[#3178C6]",
  },
  HTML: {
    Icon: FaHtml5,
    color: "text-[#E34F26]",
  },
  CSS: {
    Icon: FaCss3Alt,
    color: "text-[#1572B6]",
  },
  Socket: {
    Icon: SiSocketdotio,
    color: "text-[#010101] dark:text-white",
  },
  Supabase: {
    Icon: SiSupabase,
    color: "text-[#3ECF8E]",
  },
  "Next.js": {
    Icon: SiNextdotjs,
    color: "text-[#000000] dark:text-white",
  },
  Node: {
    Icon: FaNodeJs,
    color: "text-[#339933]",
  },
  Express: {
    Icon: FaNodeJs,
    color: "text-[#339933]",
  },
};

const SkillItem = ({ skill }) => {
  const skillConfig = SKILL_ICONS[skill];

  if (!skillConfig) return null;

  const { Icon, color } = skillConfig;

  return (
    <motion.div
      className="group relative bg-white/10 dark:bg-gray-800/50 py-2 rounded-xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30 hover:border-gray-300/40 dark:hover:border-gray-600/40 transition-all duration-300"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      <div className="relative flex flex-col items-center gap-3">
        <div className="p-3 rounded-lg bg-white/5 dark:bg-gray-700/30 group-hover:bg-white/10 dark:group-hover:bg-gray-700/40 transition-colors duration-300">
          <Icon
            className={`w-8 h-8 ${color} transform group-hover:scale-110 transition-transform duration-300`}
          />
        </div>
        <span className="text-gray-800 dark:text-white text-sm font-medium tracking-wide">
          {skill}
        </span>
      </div>
    </motion.div>
  );
};

SkillItem.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillItem;
