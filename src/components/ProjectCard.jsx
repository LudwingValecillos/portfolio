import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
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
    "Chakra UI": "bg-[#319795]/10 text-[#319795] border-[#319795]/20",
    Firebase: "bg-[#FFCA28]/10 text-[#FFCA28] border-[#FFCA28]/20",

  };
  return (
    colors[tech] ||
    "bg-gray-100/10 text-gray-700 dark:text-gray-300 border-gray-200/20 dark:border-gray-700/20"
  );
};

const getStatusColor = (status) => {
  const colors = {
    Live: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    Development: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
    Planning: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  };
  return colors[status] || "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20";
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group relative bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/30 dark:border-gray-700/40 backdrop-blur-sm"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <motion.div
          className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FaStar className="w-3 h-3" />
          Featured
        </motion.div>
      )}

      {/* Status Badge */}
      <motion.div
        className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        {project.status}
      </motion.div>

      <motion.div
        className="relative h-56 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </motion.div>
      
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <motion.span
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <motion.span
              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100/50 text-gray-600 dark:bg-gray-700/50 dark:text-gray-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              +{project.technologies.length - 4} more
            </motion.span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-4 h-4" />
                <span className="text-sm font-medium">Code</span>
              </motion.a>
            )}
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </motion.a>
            )}
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
    link: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    status: PropTypes.string,
    featured: PropTypes.bool,
  }).isRequired,
};

export default ProjectCard;
