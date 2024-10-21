import { useState, useEffect } from 'react'
import { FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import NavItem from './components/NavItem'
import ProjectCard from './components/ProjectCard'
import SkillItem from './components/SkillItem'
import ContactItem from './components/ContactItem'
import LanguageSwitch from './components/LanguageSwitch'
import perfil from './assets/perfil.png'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [language, setLanguage] = useState('en')
  const [activeSection, setActiveSection] = useState('about')

  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 })
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.5 })
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.5 })
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (aboutInView) setActiveSection('about')
    else if (projectsInView) setActiveSection('projects')
    else if (skillsInView) setActiveSection('skills')
    else if (contactInView) setActiveSection('contact')
  }, [aboutInView, projectsInView, skillsInView, contactInView])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  const projects = [
    {
      title: language === 'en' ? "Cultural center" : "Centro cultural",
      description: language === 'en' 
        ? "platform that allows users to purchase tickets for events with numbered seats, access conventions and reserve stands for entrepreneurs."
        : "Plataforma que permite a los usuarios comprar tickets para eventos con asientos numerados, acceder a convenciones y reservar stands para emprendedores.",
      image: "https://i.imgur.com/yt6yiEH.png",
      link: "https://passwave.onrender.com/",
      technologies: ["React", "Tailwind CSS","Redux", "Java", "Spring Boot","Spring Security", "PostgreSQL",  "JWT"]
    },
    {
      title: language === 'en' ? "HomeBanking" : "HomeBankig",
      description: language === 'en'
        ? "A secure platform to manage bank accounts, make transfers, request loans, manage cards and make payments with it."
        : "Una plataforma segura para gestionar cuentas bancarias, realizar transferencias, pedir prestamos administrar tarjetas y relaizar pagos con ella.",
      image: "https://i.imgur.com/AXxErHB.png",
      link: "https://homebankig-frontend.onrender.com/",
      technologies: ["React", "Tailwind CSS","Redux", "Java", "Spring Boot","Spring Security", "PostgreSQL", "JWT"]
    }
  ]

  const skills = ["React", "Tailwind CSS", "JavaScript", "Java", "Spring", "PostgreSQL", "JWT", "Git","GitHub", "Vite", "Redux", "Postman"]

  const contactLinks = [
    { icon: FaGithub, link: "https://github.com/LudwingValecillos", label: "GitHub" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/ludwingvalecillos/", label: "LinkedIn" },
    { icon: FaFileAlt, link: "https://docs.google.com/document/d/1ojk9tphk276DXZf0ICeeXiszQMwDwBfnJtM5_uNaa1M/edit?usp=sharing", label: language === 'en' ? "CV" : "Currículum" },
    { icon: FaEnvelope, link: "mailto:ludwingvaldev@gmail.com", label: language === 'en' ? "Email" : "Correo" }
  ]

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md p-4 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ludwing Valecillos
          </motion.h1>
          <div className="flex items-center space-x-4">
            {['about', 'projects', 'skills', 'contact'].map((section) => (
              <NavItem 
                key={section} 
                id={section} 
                title={
                  language === 'en' 
                    ? section.charAt(0).toUpperCase() + section.slice(1)
                    : {
                        about: 'Sobre mí',
                        projects: 'Proyectos',
                        skills: 'Habilidades',
                        contact: 'Contacto'
                      }[section]
                } 
                activeSection={activeSection} 
              />
            ))}
            <LanguageSwitch language={language} toggleLanguage={toggleLanguage} />
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
            </motion.button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto mt-20">
        <motion.section 
          id="about" 
          ref={aboutRef} 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-8 ">
            <motion.img
              src={perfil}
              alt="Ludwing Valecillos"
              className="w-64 h-64 rounded-full duration-500 object-cover shadow-2xl bg-[#DBD3D3] border-4 border-black dark:border-white dark:bg-[#464646]"
              whileHover={{ scale: 1.05 }}
            />
            <div>
              <h2 className="text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                {language === 'en' ? 'About Me' : 'Sobre Mí'}
              </h2>
              <p className="text-lg leading-relaxed">
                {language === 'en' 
                  ? "I am a Full Stack Developer specialized in React, Tailwind CSS and Spring Boot, with experience in creating scalable and secure web applications. I have worked on projects such as QuantumBank and WaveCenter, where I have applied agile development practices and effective team communication. My focus is on user experience and implementing innovative technological solutions that solve real problems."
                  : "Soy un Desarrollador Full Stack especializado en React, Tailwind CSS y Spring Boot  , con experiencia en la creación de aplicaciones web escalables y seguras. He trabajado en proyectos como QuantumBank y WaveCenter, donde he aplicado prácticas de desarrollo ágil y comunicación efectiva en equipo. Mi enfoque se centra en la experiencia del usuario y en la implementación de soluciones tecnológicas innovadoras que resuelvan problemas reales.."}
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="projects" 
          ref={projectsRef} 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-semibold mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {language === 'en' ? 'Projects' : 'Proyectos'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="skills" 
          ref={skillsRef} 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {language === 'en' ? 'Skills' : 'Habilidades'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </motion.section>

      
        <motion.section
          id="contact"
          ref={contactRef}
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {language === 'en' ? 'Contact' : 'Contacto'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactLinks.map((item, index) => (
              <ContactItem key={index} item={item} />
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ludwing Valecillos. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
      </footer>
    </div>
  )
}

export default App