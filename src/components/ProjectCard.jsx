import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 p-6 duration-400 rounded-lg shadow-lg overflow-hidden border-2 border-blue-500 dark:border-gray-600"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img src={project.image} alt={project.title} className="w-full h- object-cover mb-4 rounded" />
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech, techIndex) => (
        <span key={techIndex} className="px-2 py-1 bg-blue-500 text-white rounded text-sm">{tech}</span>
      ))}
    </div>
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
    >
      View Project <FaExternalLinkAlt className="ml-2" />
    </a>
  </motion.div>
)

export default ProjectCard