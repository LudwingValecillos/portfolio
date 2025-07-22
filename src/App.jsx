import { useState, useEffect } from "react";
import {
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import NavItem from "./components/NavItem";
import LanguageSwitch from "./components/LanguageSwitch";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import CertificationsSection from "./components/CertificationsSection";
import Footer from "./components/Footer";
import { 
  getStats, 
  getProjects, 
  getSkills, 
  getContactLinks, 
  getCertifications,
  getDownloadCV 
} from "./data/portfolioData";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("es");
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

  // Get data based on current language
  const stats = getStats(language);
  const projects = getProjects(language);
  const skills = getSkills();
  const contactLinks = getContactLinks(language);
  const certifications = getCertifications(language);
  const downloadCV = getDownloadCV(language);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 ">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 shadow-lg p-4 z-50 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/40"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-600 dark:text-primary-400">Ludwing</span> Valecillos
          </motion.h1>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200/30 dark:border-gray-700/40 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
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
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200/30 dark:border-gray-700/40 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
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

      <main className="pt-24">
        <HeroSection language={language} stats={stats} />
        <AboutSection language={language} aboutRef={aboutRef} />
        <ProjectsSection language={language} projects={projects} projectsRef={projectsRef} />
        <SkillsSection language={language} skills={skills} skillsRef={skillsRef} />
        <CertificationsSection language={language} certifications={certifications} downloadCV={downloadCV} />
        <ContactSection language={language} contactLinks={contactLinks} contactRef={contactRef} />
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;
