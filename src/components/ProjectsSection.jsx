import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";

const ProjectsSection = ({ language, projects, projectsRef }) => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <motion.section
      id="projects"
      ref={projectsRef}
      className="section-spacing bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container-spacing">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="heading-2 text-gray-900 dark:text-white mb-4">
            {language === "en" ? "Featured Projects" : "Proyectos Destacados"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
      
      </div>
    </motion.section>
  );
};

ProjectsSection.propTypes = {
  language: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      github: PropTypes.string,
      status: PropTypes.string,
      featured: PropTypes.bool,
    })
  ).isRequired,
  projectsRef: PropTypes.object.isRequired,
};

export default ProjectsSection; 