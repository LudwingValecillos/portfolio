import { motion } from 'framer-motion'

const NavItem = ({ id, title, activeSection }) => (
  <motion.a
    href={`#${id}`}
    className={`px-4 py-2 rounded transition-colors ${
      activeSection === id
        ? 'bg-blue-500 text-white'
        : 'hover:bg-gray-200 dark:hover:bg-gray-700'
    }`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {title}
  </motion.a>
)

export default NavItem