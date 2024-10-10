import { motion } from 'framer-motion'

const SkillItem = ({ skill }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-lg font-semibold">{skill}</span>
  </motion.div>
)

export default SkillItem