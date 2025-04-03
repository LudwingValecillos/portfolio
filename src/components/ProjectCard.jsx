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
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="relative h-48 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${getTechColor(tech)}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
          )}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="w-6 h-6" />
            </motion.a>
          )}
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
