import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ContactItem = ({ item }) => (
  <motion.a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <item.icon className="text-4xl mb-2 text-blue-500" />
    <span className="text-lg font-semibold">{item.label}</span>
  </motion.a>
);

ContactItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
