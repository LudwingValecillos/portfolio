import { motion } from "framer-motion";
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

const ContactItem = ({ item }) => {
  const Icon = item.icon;
  const isCV = item.label === "Resume" || item.label === "Currículum";

  const handleClick = (e) => {
    if (isCV) {
      e.preventDefault();
      handleDownload(item.link, "LudwingValecillosCV.pdf");
    }
  };

  return (
    <motion.a
      href={item.link}
      target={isCV ? undefined : "_blank"}
      rel={isCV ? undefined : "noopener noreferrer"}
      onClick={handleClick}
      className="group relative flex flex-col items-center p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/30 dark:border-gray-700/40 backdrop-blur-sm overflow-hidden"
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
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
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
      />
      
      {/* Icon container */}
      <motion.div
        className="relative mb-4 p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
      </motion.div>
      
      {/* Label */}
      <motion.span
        className="relative text-gray-800 dark:text-gray-200 font-semibold text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
      >
        {item.label}
      </motion.span>
      
      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
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
