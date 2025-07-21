import { motion } from "framer-motion";
import ContactItem from "./ContactItem";
import ContactForm from "./ContactForm";
import PropTypes from "prop-types";

const ContactSection = ({ language, contactLinks, contactRef }) => {
  return (
    <motion.section
      id="contact"
      ref={contactRef}
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
              {language === "en" ? "Let's Work Together" : "Trabajemos Juntos"}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="heading-3 text-gray-900 dark:text-white mb-6">
                {language === "en" ? "Get In Touch" : "Ponte en Contacto"}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactLinks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ContactItem item={item} />
                  </motion.div>
                ))}
              </div>

              {/* Additional Contact Info */}
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {language === "en" ? "Why Choose Me?" : "¿Por Qué Elegirme?"}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "Quick response time (within 24 hours)" : "Tiempo de respuesta rápido (dentro de 24 horas)"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "Clear communication throughout the project" : "Comunicación clara durante todo el proyecto"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "Flexible collaboration options" : "Opciones de colaboración flexibles"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "en" ? "Ongoing support and maintenance" : "Soporte y mantenimiento continuo"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <ContactForm language={language} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

ContactSection.propTypes = {
  language: PropTypes.string.isRequired,
  contactLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  contactRef: PropTypes.object.isRequired,
};

export default ContactSection; 