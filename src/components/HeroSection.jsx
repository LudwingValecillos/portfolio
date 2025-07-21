import { motion } from "framer-motion";
import PropTypes from "prop-types";

const HeroSection = ({ language, stats }) => {
  return (
    <motion.section
      className="section-spacing relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      
    >
      {/* Background Elements */}
      <div className=" absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className=" absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container-spacing relative z-10 ">
        <div className="text-center max-w-4xl mx-auto ">
          {/* Main Heading */}
          <motion.h1
            className="heading-1 text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            
          >
            {language === "en" ? (
              <>
                <span className="text-primary-600 dark:text-primary-400">Full Stack</span>{" "}
                Developer
              </>
            ) : (
              <>
                <span className="text-primary-600 dark:text-primary-400">Desarrollador</span>{" "}
                Full Stack
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="body-large text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {language === "en"
              ? "Crafting innovative digital solutions that drive business growth. Specialized in React, Spring Boot, and modern web technologies."
              : "Creando soluciones digitales innovadoras que impulsan el crecimiento empresarial. Especializado en React, Spring Boot y tecnologías web modernas."}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center"
            >
              {language === "en" ? "View My Work" : "Ver Mi Trabajo"}
            </a>
            <a
              href="#contact"
              className="btn-outline inline-flex items-center justify-center"
            >
              {language === "en" ? "Get In Touch" : "Contactar"}
            </a>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="card-hover p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

HeroSection.propTypes = {
  language: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HeroSection; 