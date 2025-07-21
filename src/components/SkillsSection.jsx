import { motion } from "framer-motion";
import SkillItem from "./SkillItem";
import PropTypes from "prop-types";

const SkillsSection = ({ language, skills, skillsRef }) => {
  // Flatten all skills into a single array
  const allSkills = Object.values(skills).flat();

  return (
    <motion.section
      id="skills"
      ref={skillsRef}
      className="section-spacing bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container-spacing">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="heading-2 text-gray-900 dark:text-white mb-4">
              {language === "en" ? "Technical Expertise" : "Experiencia Técnica"}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            <p className="body-medium text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              {language === "en"
                ? "Comprehensive skill set spanning frontend, backend, database, and DevOps technologies."
                : "Conjunto completo de habilidades que abarcan tecnologías frontend, backend, base de datos y DevOps."}
            </p>
          </motion.div>

          {/* All skills in one grid - Better organized */}
          <motion.div
            className="flex justify-center items-center h-full w-full mb-8 gap-3 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {allSkills.map((skill) => (
              <SkillItem key={skill} skill={skill} />
            ))}
          </motion.div>

          {/* Skills Summary - More compact */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="card-hover p-6 max-w-3xl mx-auto">
              <h3 className="heading-3 text-gray-900 dark:text-white mb-4">
                {language === "en" ? "Why Choose My Skills?" : "¿Por Qué Elegir Mis Habilidades?"}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                    {language === "en" ? "Proven Experience" : "Experiencia Comprobada"}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {language === "en" 
                      ? "7+ projects delivered successfully"
                      : "7+ proyectos entregados exitosamente"}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 bg-success-100 dark:bg-success-900/30 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-5 h-5 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                    {language === "en" ? "Performance Focus" : "Enfoque en Rendimiento"}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {language === "en"
                      ? "60% performance improvements achieved"
                      : "Mejoras de rendimiento del 60% logradas"}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 bg-warning-100 dark:bg-warning-900/30 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-5 h-5 text-warning-600 dark:text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                    {language === "en" ? "Continuous Learning" : "Aprendizaje Continuo"}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {language === "en"
                      ? "Always updated with latest technologies"
                      : "Siempre actualizado con las últimas tecnologías"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

SkillsSection.propTypes = {
  language: PropTypes.string.isRequired,
  skills: PropTypes.object.isRequired,
  skillsRef: PropTypes.object.isRequired,
};

export default SkillsSection; 