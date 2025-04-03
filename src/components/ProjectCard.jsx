import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const getTechColor = (tech) => {
  const colors = {
    React: "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20",
    "Tailwind CSS": "bg-[#38B2AC]/10 text-[#38B2AC] border-[#38B2AC]/20",
    JavaScript: "bg-[#F7DF1E]/10 text-[#F7DF1E] border-[#F7DF1E]/20",
    Java: "bg-[#007396]/10 text-[#007396] border-[#007396]/20",
    Spring: "bg-[#6DB33F]/10 text-[#6DB33F] border-[#6DB33F]/20",
    PostgreSQL: "bg-[#336791]/10 text-[#3B82F6] border-[#336791]/20",
    JWT: "bg-gray-900/10 text-gray-900 dark:text-white border-gray-900/20 dark:border-white/20",
    Git: "bg-[#F05032]/10 text-[#F05032] border-[#F05032]/20",
    GitHub:
      "bg-gray-900/10 text-gray-900 dark:text-white border-gray-900/20 dark:border-white/20",
    Vite: "bg-[#646CFF]/10 text-[#646CFF] border-[#646CFF]/20",
    Redux: "bg-[#764ABC]/10 text-[#764ABC] border-[#764ABC]/20",
    Postman: "bg-[#FF6C37]/10 text-[#FF6C37] border-[#FF6C37]/20",
    TypeScript: "bg-[#3178C6]/10 text-[#3178C6] border-[#3178C6]/20",
    HTML: "bg-[#E34F26]/10 text-[#E34F26] border-[#E34F26]/20",
    CSS: "bg-[#1572B6]/10 text-[#1572B6] border-[#1572B6]/20",
    Socket:
      "bg-gray-900/10 text-gray-900 dark:text-white border-gray-900/20 dark:border-white/20",
    Supabase: "bg-[#3ECF8E]/10 text-[#3ECF8E] border-[#3ECF8E]/20",
    "Next.js":
      "bg-gray-900/10 text-gray-900 dark:text-white border-gray-900/20 dark:border-white/20",
    Node: "bg-[#339933]/10 text-[#339933] border-[#339933]/20",
    Express: "bg-[#339933]/10 text-[#339933] border-[#339933]/20",
  };
  return (
    colors[tech] ||
    "bg-gray-100/10 text-gray-700 dark:text-gray-300 border-gray-200/20 dark:border-gray-700/20"
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      <div className="relative">
        <div className="relative h-48 overflow-hidden border-b border-gray-200 dark:border-gray-700">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object- transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 flex flex-col justify-between h-full">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-xs font-medium rounded-full border ${getTechColor(
                  tech
                )}`}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span className="text-sm">Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
