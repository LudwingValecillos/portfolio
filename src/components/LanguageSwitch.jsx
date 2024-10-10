import { motion } from 'framer-motion'

const LanguageSwitch = ({ language, toggleLanguage }) => (
  <motion.button
    onClick={toggleLanguage}
    className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {language === 'en' ? 'ES' : 'EN'}
  </motion.button>
)

export default LanguageSwitch