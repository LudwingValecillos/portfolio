import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ContactItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.div
        className="mb-3 text-blue-600 dark:text-blue-400"
        whileHover={{ scale: 1.1 }}
      >
        <Icon className="w-8 h-8" />
      </motion.div>
      <motion.span
        className="text-gray-800 dark:text-gray-200 font-medium"
        whileHover={{ color: "#3B82F6" }}
      >
        {item.label}
      </motion.span>
    </motion.a>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
