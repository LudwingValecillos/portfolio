import { motion } from "framer-motion";
import PropTypes from "prop-types";
import perfil from "../assets/perfil.png";

const AboutSection = ({ language, aboutRef }) => {
  return (
    <motion.section
      id="about"
      ref={aboutRef}
      className="section-spacing bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container-spacing">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="heading-2 text-gray-900 dark:text-white ">
              {language === "en" ? "About Me" : "Sobre Mí"}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-2xl"></div>
                <img
                  src={perfil}
                  alt="Ludwing Valecillos"
                  className="relative w-full h-full rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="space-y-3 mt-6">
                <h3 className="heading-3 text-gray-900 dark:text-white">
                  {language === "en" ? "Driving Digital Transformation" : "Impulsando la Transformación Digital"}
                </h3>
                
                <div className="body-medium text-gray-600 dark:text-gray-300 space-y-3">
                  <p>
                    {language === "en"
                      ? "I'm a Full Stack Developer with experience building efficient, secure, and scalable web applications."
                      : "Soy Desarrollador Full Stack con experiencia construyendo aplicaciones web eficientes, seguras y escalables."}
                  </p>

                  <p>
                    {language === "en"
                      ? "I specialize in React, Spring Boot, and modern web technologies. My focus is on delivering well-structured, maintainable solutions."
                      : "Me especializo en React, Spring Boot y tecnologías web modernas. Mi enfoque está en entregar soluciones bien estructuradas y mantenibles."}
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  {language === "en" ? "Key Achievements" : "Logros Principales"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "7+ projects delivered" : "7+ proyectos entregados"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "100% client satisfaction" : "100% satisfacción del cliente"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "60% performance improvement" : "60% mejora en rendimiento"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "20+ technologies mastered" : "20+ tecnologías dominadas"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  {language === "en" ? "React Expert" : "Experto en React"}
                </span>
                <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">
                  {language === "en" ? "Spring Boot" : "Spring Boot"}
                </span>
                <span className="px-4 py-2 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 rounded-full text-sm font-medium">
                  {language === "en" ? "Full Stack" : "Full Stack"}
                </span>
                <span className="px-4 py-2 bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-300 rounded-full text-sm font-medium">
                  {language === "en" ? "Business Focus" : "Enfoque Empresarial"}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

AboutSection.propTypes = {
  language: PropTypes.string.isRequired,
  aboutRef: PropTypes.object.isRequired,
};

export default AboutSection; 