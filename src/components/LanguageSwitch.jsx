import { motion } from "framer-motion";
import PropTypes from "prop-types";

const LanguageSwitch = ({ language, toggleLanguage }) => (
  <motion.button
    onClick={toggleLanguage}
    className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {language === "en" ? "ES" : "EN"}
  </motion.button>
);

LanguageSwitch.propTypes = {
  language: PropTypes.oneOf(["en", "es"]).isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};

export default LanguageSwitch;
