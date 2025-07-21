import { motion } from "framer-motion";
import { FaCertificate, FaDownload } from "react-icons/fa";
import PropTypes from "prop-types";

const handleDownload = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const CertificationsSection = ({ language, certifications, downloadCV }) => {
  return (
    <motion.section
      className="section-spacing bg-gray-50 dark:bg-gray-800"
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
              {language === "en" ? "Certifications & Learning" : "Certificaciones y Aprendizaje"}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="heading-3 text-gray-900 dark:text-white mb-6">
                {language === "en" ? "Professional Certifications" : "Certificaciones Profesionales"}
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="card-hover p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaCertificate className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
                          {cert.issuer}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {cert.date}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download CV Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="heading-3 text-gray-900 dark:text-white mb-8">
                {language === "en" ? "Get My Resume" : "Obtener Mi CV"}
              </h3>
              
              <div className="card-hover p-8 text-center">
                <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaDownload className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {language === "en" ? "Download My Professional Resume" : "Descargar Mi CV Profesional"}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {language === "en"
                    ? "Get a detailed overview of my experience, skills, and achievements in a professional format."
                    : "Obtén una vista detallada de mi experiencia, habilidades y logros en un formato profesional."}
                </p>
                
                <button
                  onClick={() => handleDownload(downloadCV.link, "LudwingValecillosCV.pdf")}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <downloadCV.icon className="w-5 h-5" />
                  <span>{downloadCV.label}</span>
                </button>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {language === "en" ? "What's Included" : "Qué Incluye"}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "Detailed work experience" : "Experiencia laboral detallada"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "Technical skills assessment" : "Evaluación de habilidades técnicas"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "Project portfolio highlights" : "Destacados del portafolio de proyectos"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "Professional references" : "Referencias profesionales"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

CertificationsSection.propTypes = {
  language: PropTypes.string.isRequired,
  certifications: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      issuer: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  downloadCV: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default CertificationsSection; 