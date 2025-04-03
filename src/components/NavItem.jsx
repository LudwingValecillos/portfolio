import { motion } from "framer-motion";
import PropTypes from "prop-types";

const NavItem = ({ id, title, activeSection }) => (
  <motion.a
    href={`#${id}`}
    className={`px-4 py-2 rounded transition-colors ${
      activeSection === id
        ? "bg-blue-500 text-white"
        : "hover:bg-gray-200 dark:hover:bg-gray-700"
    }`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {title}
  </motion.a>
);

NavItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default NavItem;
