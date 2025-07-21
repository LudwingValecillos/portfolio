import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Footer = ({ language }) => {
  return (
    <motion.footer
      className="py-6 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200/30 dark:border-gray-700/40 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex w-full justify-between items-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Ludwing Valecillos.{" "}
          {language === "en"
            ? "All rights reserved."
            : "Todos los derechos reservados."}
        </p>
        <p className="text-sm mt-2 text-gray-500 dark:text-gray-500">
          {language === "en" 
            ? "Built with React, Tailwind CSS, and ❤️" 
            : "Construido con React, Tailwind CSS y ❤️"}
        </p>
      </div>
    </motion.footer>
  );
};

Footer.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Footer; 