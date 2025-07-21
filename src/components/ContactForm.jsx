import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import PropTypes from "prop-types";

const ContactForm = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    serviceId: 'service_d4v5nm8',
    templateId: 'template_3kp0zoi',
    publicKey: 'mVaC0TQuWfv56hc05'
  };

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Ludwing Valecillos',
        to_email: 'ludwingvaldev@gmail.com'
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      console.log("Email sent successfully:", response);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <motion.div
      className="card-hover p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h3 className="heading-3 text-gray-900 dark:text-white mb-6">
        {language === "en" ? "Send Me a Message" : "Envíame un Mensaje"}
      </h3>

      {submitStatus === "success" && (
        <motion.div
          className="mb-6 p-4 bg-success-50 dark:bg-success-900/30 border border-success-200 dark:border-success-800 rounded-lg flex items-center space-x-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <FaCheck className="text-success-600 dark:text-success-400" />
          <span className="text-success-700 dark:text-success-300">
            {language === "en" 
              ? "Message sent successfully! I'll get back to you soon." 
              : "¡Mensaje enviado exitosamente! Te responderé pronto."}
          </span>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          className="mb-6 p-4 bg-error-50 dark:bg-error-900/30 border border-error-200 dark:border-error-800 rounded-lg flex items-center space-x-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <FaExclamationTriangle className="text-error-600 dark:text-error-400" />
          <span className="text-error-700 dark:text-error-300">
            {language === "en" 
              ? "There was an error sending your message. Please try again." 
              : "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo."}
          </span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="form-label">
              {language === "en" ? "Name" : "Nombre"}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder={language === "en" ? "Your name" : "Tu nombre"}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              {language === "en" ? "Email" : "Correo"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder={language === "en" ? "your@email.com" : "tu@correo.com"}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="form-label">
            {language === "en" ? "Subject" : "Asunto"}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            placeholder={language === "en" ? "What's this about?" : "¿De qué se trata?"}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            {language === "en" ? "Message" : "Mensaje"}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="6"
            placeholder={language === "en" ? "Tell me about your project or inquiry..." : "Cuéntame sobre tu proyecto o consulta..."}
            required
          />
        </div>

        <motion.button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full btn-primary flex items-center justify-center space-x-2 ${
            !isFormValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          whileHover={isFormValid && !isSubmitting ? { scale: 1.02 } : {}}
          whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>{language === "en" ? "Sending..." : "Enviando..."}</span>
            </>
          ) : (
            <>
              <FaPaperPlane className="w-5 h-5" />
              <span>{language === "en" ? "Send Message" : "Enviar Mensaje"}</span>
            </>
          )}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {language === "en" 
            ? "I typically respond within 24 hours during business days."
            : "Normalmente respondo dentro de 24 horas en días laborables."}
        </p>
      </div>
    </motion.div>
  );
};

ContactForm.propTypes = {
  language: PropTypes.string.isRequired,
};

export default ContactForm; 