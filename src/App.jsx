import { useState, useEffect } from "react";
import {
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import NavItem from "./components/NavItem";
import ProjectCard from "./components/ProjectCard";
import SkillItem from "./components/SkillItem";
import ContactItem from "./components/ContactItem";
import LanguageSwitch from "./components/LanguageSwitch";
import perfil from "./assets/perfil.png";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.5,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.5,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    if (aboutInView) setActiveSection("about");
    else if (projectsInView) setActiveSection("projects");
    else if (skillsInView) setActiveSection("skills");
    else if (contactInView) setActiveSection("contact");
  }, [aboutInView, projectsInView, skillsInView, contactInView]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const projects = [
    {
      title: language === "en" ? "NextCode" : "NextCode",
      description:
        language === "en"
          ? "Landing page offering my services as a web developer."
          : "Landing page ofreciendo mis servicios como desarrollador web.",
      image: "https://i.imgur.com/1K7dGaa.png",
      link: "https://nextcode.com.ar/",
      technologies: ["Tailwind CSS", "HTML", "CSS", "Vite", "React"],
      github: "https://github.com/LudwingValecillos/NextCodeLanding",
    },
    {
      title: language === "en" ? "Import Teknology" : "Import Teknology",
      description:
        language === "en"
          ? "Landing page for a company specialized in the sale of cell phone accessories."
          : "Landing page para una empresa especializada en la venta de accesorios para celulares.",
      image: "https://i.imgur.com/yilyvWa.png",
      link: "https://symphonious-sunburst-afc60e.netlify.app/",
      technologies: ["Tailwind CSS", "TypeScript", "HTML", "CSS", "Vite", "React"],
      github: "https://github.com/LudwingValecillos/mobile-premium-vista",
    },
    {
      title: language === "en" ? "M-Store" : "M-Store",
      description:
        language === "en"
          ? "Landing page for a company specialized in the installation of security cameras."
          : "Landing page para una empresa especializada en la instalación de cámaras de seguridad.",
      image: "https://i.imgur.com/oeqnQZp.png",
      link: "https://tiendamstore.com.ar/----------------------",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "HTML", "CSS"],
      github: "https://github.com/LudwingValecillos/landingsecurity1",
    },
    {
      title: language === "en" ? "Mis Rutinas Online" : "Mis Rutinas Online",
      description:
        language === "en"
          ? "Web platform for fitness professionals and health, with a customer management system, training routines and progress tracking."
          : "Plataforma web para profesionales fitness y de salud, con un sistema de gestión de clientes, rutinas de entrenamiento y seguimiento de progresos.",
      image: "https://i.imgur.com/BRLMfoX.png",
      link: "https://misrutinasonline.com/",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "JWT",
        "Supabase",
      ],
      github: null,
    },
    {
      title:
        language === "en" ? "Lo de nacho carniceria" : "Lo de nacho carniceria",
      description:
        language === "en"
          ? "Web platform for a butcher shop, with a customer management system, sales and progress tracking."
          : "Plataforma web para una carniceria, con un sistema de gestión de productos, ventas y seguimiento de progresos.",
      image: "https://i.imgur.com/4NxmcOb.png",
      link: null,
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      github: null,
    },
    {
      title: language === "en" ? "Cultural center" : "Centro cultural",
      description:
        language === "en"
          ? "Platform that allows users to purchase tickets for events with numbered seats, access conventions and reserve stands for entrepreneurs."
          : "Plataforma que permite a los usuarios comprar tickets para eventos con asientos numerados, acceder a convenciones y reservar stands para emprendedores.",
      image: "https://i.imgur.com/yt6yiEH.png",
      link: "https://passwave.onrender.com/",
      technologies: [
        "React",
        "Tailwind CSS",
        "Redux",
        "Java",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "JWT",
      ],
      github: "https://github.com/LudwingValecillos/PassWave",
    },
    {
      title: language === "en" ? "HomeBanking" : "HomeBankig",
      description:
        language === "en"
          ? "A secure platform to manage bank accounts, make transfers, request loans, manage cards and make payments with it."
          : "Una plataforma segura para gestionar cuentas bancarias, realizar transferencias, pedir prestamos administrar tarjetas y relaizar pagos con ella.",
      image: "https://i.imgur.com/AXxErHB.png",
      link: "https://homebankig-frontend.onrender.com/",
      technologies: [
        "React",
        "Tailwind CSS",
        "Redux",
        "Java",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "JWT",
      ],
      github: "https://github.com/LudwingValecillos/HomeBankig-FrontEnd",
    },
    {
      title: language === "en" ? "Supermarket" : "Supermercado",
      description:
        language === "en"
          ? "I built an e-commerce platform for a supermarket with an API of 200+ products, detailed product pages, a cart system, and an integrated payment gateway."
          : "Creé una plataforma de comercio electrónico para un supermercado con una API de más de 200 productos, páginas de detalles de productos, un sistema de carrito y una pasarela de pago integrada.",
      image: "https://i.imgur.com/YaipjNn.png",
      link: "https://ludwingvalecillos.github.io/E-comerceMarketShop/",
      technologies: ["HTML", "CSS", "javaScript"],
      github: "https://github.com/LudwingValecillos/E-comerceMarketShop",
    },
  ];

  const skills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Java",
    "Spring",
    "PostgreSQL",
    "JWT",
    "Git",
    "GitHub",
    "Vite",
    "Redux",
    "Postman",
    "TypeScript",
    "HTML",
    "CSS",
    "Supabase",
    "Next.js",
    "Node.js",
    "Express",
  ];

  const contactLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/LudwingValecillos",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/ludwingvalecillos/",
      label: "LinkedIn",
    },
    {
      icon: FaFileAlt,
      link: "https://docs.google.com/document/d/1COw4oAb1VjQqoijz9av0ShO6oKR9Wp2t4s8SM4KI2uQ/edit?usp=sharing",
      label: language === "en" ? "CV" : "Currículum",
    },
    {
      icon: FaEnvelope,
      link: "mailto:ludwingvaldev@gmail.com",
      label: language === "en" ? "Email" : "Correo",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 shadow-lg p-4 z-10 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/30"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ludwing Valecillos
          </motion.h1>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 justify-center">
            {["about", "projects", "skills", "contact"].map((section) => (
              <NavItem
                key={section}
                id={section}
                title={
                  language === "en"
                    ? section.charAt(0).toUpperCase() + section.slice(1)
                    : {
                        about: "Sobre mí",
                        projects: "Proyectos",
                        skills: "Habilidades",
                        contact: "Contacto",
                      }[section]
                }
                activeSection={activeSection}
              />
            ))}
            <LanguageSwitch
              language={language}
              toggleLanguage={toggleLanguage}
            />
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200/20 dark:border-gray-700/30 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-4"
          >
            {["about", "projects", "skills", "contact"].map((section) => (
              <NavItem
                key={section}
                id={section}
                title={
                  language === "en"
                    ? section.charAt(0).toUpperCase() + section.slice(1)
                    : {
                        about: "Sobre mí",
                        projects: "Proyectos",
                        skills: "Habilidades",
                        contact: "Contacto",
                      }[section]
                }
                activeSection={activeSection}
                className="block w-full text-center py-2"
              />
            ))}
            <div className="flex justify-center space-x-4">
              <LanguageSwitch
                language={language}
                toggleLanguage={toggleLanguage}
              />
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200/20 dark:border-gray-700/30 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {darkMode ? (
                  <FaSun className="text-yellow-400" />
                ) : (
                  <FaMoon className="text-gray-700" />
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <main className="max-w-6xl mx-auto mt-24 px-4">
        <motion.section
          id="about"
          ref={aboutRef}
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <img
                src={perfil}
                alt="Ludwing Valecillos"
                className="relative w-full h-full rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
              />
            </motion.div>
            <motion.div
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                {language === "en" ? "About Me" : "Sobre Mí"}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {language === "en"
                  ? "I am a Full Stack Developer specialized in React, Tailwind CSS and Spring Boot, with experience in creating scalable and secure web applications. I have worked on projects such as QuantumBank and WaveCenter, where I have applied agile development practices and effective team communication. My focus is on user experience and implementing innovative technological solutions that solve real problems."
                  : "Soy un Desarrollador Full Stack especializado en React, Tailwind CSS y Spring Boot, con experiencia en la creación de aplicaciones web escalables y seguras. He trabajado en proyectos como QuantumBank y WaveCenter, donde he aplicado prácticas de desarrollo ágil y comunicación efectiva en equipo. Mi enfoque se centra en la experiencia del usuario y en la implementación de soluciones tecnológicas innovadoras que resuelvan problemas reales."}
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          ref={projectsRef}
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {language === "en" ? "Projects" : "Proyectos"}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          ref={skillsRef}
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {language === "en" ? "Skills" : "Habilidades"}
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SkillItem skill={skill} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          ref={contactRef}
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {language === "en" ? "Contact" : "Contacto"}
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
            {contactLinks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ContactItem item={item} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <motion.footer
        className="py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200/20 dark:border-gray-700/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p>
          &copy; {new Date().getFullYear()} Ludwing Valecillos.{" "}
          {language === "en"
            ? "All rights reserved."
            : "Todos los derechos reservados."}
        </p>
      </motion.footer>
    </div>
  );
}

export default App;
