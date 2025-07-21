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
  SiChakraui,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import PropTypes from "prop-types";

const SKILL_ICONS = {
  React: {
    Icon: FaReact,
    color: "text-[#61DAFB]",
    bgColor: "bg-[#61DAFB]/10",
    borderColor: "border-[#61DAFB]/20",
  },
  "Tailwind CSS": {
    Icon: SiTailwindcss,
    color: "text-[#38B2AC]",
    bgColor: "bg-[#38B2AC]/10",
    borderColor: "border-[#38B2AC]/20",
  },
  JavaScript: {
    Icon: SiJavascript,
    color: "text-[#F7DF1E]",
    bgColor: "bg-[#F7DF1E]/10",
    borderColor: "border-[#F7DF1E]/20",
  },
  Java: {
    Icon: FaJava,
    color: "text-[#007396]",
    bgColor: "bg-[#007396]/10",
    borderColor: "border-[#007396]/20",
  },
  Spring: {
    Icon: SiSpring,
    color: "text-[#6DB33F]",
    bgColor: "bg-[#6DB33F]/10",
    borderColor: "border-[#6DB33F]/20",
  },
  PostgreSQL: {
    Icon: SiPostgresql,
    color: "text-[#336791]",
    bgColor: "bg-[#336791]/10",
    borderColor: "border-[#336791]/20",
  },
  JWT: {
    Icon: SiJsonwebtokens,
    color: "text-[#000000] dark:text-white",
    bgColor: "bg-gray-900/10 dark:bg-white/10",
    borderColor: "border-gray-900/20 dark:border-white/20",
  },
  Git: {
    Icon: FaGitAlt,
    color: "text-[#F05032]",
    bgColor: "bg-[#F05032]/10",
    borderColor: "border-[#F05032]/20",
  },
  GitHub: {
    Icon: FaGithub,
    color: "text-[#181717] dark:text-white",
    bgColor: "bg-gray-900/10 dark:bg-white/10",
    borderColor: "border-gray-900/20 dark:border-white/20",
  },
  Vite: {
    Icon: SiVite,
    color: "text-[#646CFF]",
    bgColor: "bg-[#646CFF]/10",
    borderColor: "border-[#646CFF]/20",
  },
  Redux: {
    Icon: SiRedux,
    color: "text-[#764ABC]",
    bgColor: "bg-[#764ABC]/10",
    borderColor: "border-[#764ABC]/20",
  },
  Postman: {
    Icon: SiPostman,
    color: "text-[#FF6C37]",
    bgColor: "bg-[#FF6C37]/10",
    borderColor: "border-[#FF6C37]/20",
  },
  TypeScript: {
    Icon: SiTypescript,
    color: "text-[#3178C6]",
    bgColor: "bg-[#3178C6]/10",   
    borderColor: "border-[#3178C6]/20",
  },
  HTML: {
    Icon: FaHtml5,
    color: "text-[#E34F26]",
    bgColor: "bg-[#E34F26]/10",
    borderColor: "border-[#E34F26]/20",
  },
  CSS: {
    Icon: FaCss3Alt,
    color: "text-[#1572B6]",
    bgColor: "bg-[#1572B6]/10",
    borderColor: "border-[#1572B6]/20",
  },
  Socket: {
    Icon: SiSocketdotio,
    color: "text-[#010101] dark:text-white",
    bgColor: "bg-gray-900/10 dark:bg-white/10",
    borderColor: "border-gray-900/20 dark:border-white/20",
  },
  Supabase: {
    Icon: SiSupabase,
    color: "text-[#3ECF8E]",
    bgColor: "bg-[#3ECF8E]/10",
    borderColor: "border-[#3ECF8E]/20",
  },
  Express: {
    Icon: SiExpress ,
    color: "text-[#339933]",
    bgColor: "bg-[#339933]/10",
    borderColor: "border-[#339933]/20",
  },
  "Next.js": {
    Icon: SiNextdotjs,
    color: "text-[#000000] dark:text-white",
    bgColor: "bg-gray-900/10 dark:bg-white/10",
    borderColor: "border-gray-900/20 dark:border-white/20",
  },
  "Chakra UI": {
    Icon: SiChakraui,
    color: "text-[#319795]",
    bgColor: "bg-[#319795]/10",
    borderColor: "border-[#319795]/20",
  },
  Firebase: {
    Icon: SiFirebase,
    color: "text-[#FFCA28]",
    bgColor: "bg-[#FFCA28]/10",
    borderColor: "border-[#FFCA28]/20",
  },
  
};

const SkillItem = ({ skill }) => {
  const skillConfig = SKILL_ICONS[skill];

  if (!skillConfig) return null;

  const { Icon, color, bgColor, borderColor } = skillConfig;

  return (
    <motion.div
      className={`group relative ${bgColor} p-3 rounded-lg backdrop-blur-sm border ${borderColor} hover:border-opacity-50 transition-all duration-300 cursor-pointer w-full max-w-[120px]`}
      whileHover={{
        scale: 1.05,
        y: -3,
        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      <div className="relative flex flex-col items-center gap-2 w-full h-full">
        <motion.div
          className={`p-2 w-20 h-20  rounded-lg ${bgColor} group-hover:bg-opacity-20 transition-all duration-300`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon
            className={`w-full h-full ${color} transform group-hover:scale-110 transition-transform duration-300`}
          />
        </motion.div>
        <motion.span
          className="text-gray-800 text-nowrap dark:text-white text-xs font-medium tracking-wide text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {skill}
        </motion.span>
      </div>
    </motion.div>
  );
};

SkillItem.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillItem;
