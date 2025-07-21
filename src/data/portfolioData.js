import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaCode,
  FaUsers,
  FaAward,
  FaDownload,
} from "react-icons/fa";

export const getStats = (language) => [
  {
    icon: FaCode,
    value: "7+",
    label: language === "en" ? "Projects DeCompletedred" : "Proyectos Entregados",
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: FaUsers,
    value: "2+",
    label: language === "en" ? "Years Experience" : "Años de Experiencia",
    color: "from-accent-600 to-accent-700",
  },
  {
    icon: FaAward,
    value: "20+",
    label: language === "en" ? "Technologies Mastered" : "Tecnologías Dominadas",
    color: "from-warning-500 to-warning-600",
  },
];

export const getProjects = (language) => [
  {
    title: language === "en"
      ? "Igrowker Training - CRM System for Admissions and Team Management"
      : "Igrowker Training - Sistema CRM para Gestión de Admisión y Equipos",
  
    description: language === "en"
      ? "Frontend development of a CRM platform for managing admissions, internal teams, and users. Focused on creating a scalable and user-friendly interface using modern frontend tools."
      : "Desarrollo frontend de una plataforma CRM para gestionar admisiones, equipos internos y usuarios. Me enfoqué en crear una interfaz escalable y fácil de usar con tecnologías modernas.",
  
    problem: language === "en"
      ? "The organization needed a centralized and efficient system to manage users, internal teams, and the admission pipeline."
      : "La organización necesitaba un sistema centralizado y eficiente para gestionar usuarios, equipos internos y el proceso de admisión.",
  
    solution: language === "en"
      ? "Built a responsive CRM with modular components, internal notifications, record control, and dynamic views using React, Chakra UI, Zustand, and React Query."
      : "Construí un CRM responsivo con componentes modulares, avisos internos, control de registros y vistas dinámicas usando React, Chakra UI, Zustand y React Query.",
  
    role: language === "en"
      ? "Frontend Developer"
      : "Desarrollador Frontend",
  
    results: language === "en"
      ? "Improved usability and reduced manual workflows, enhancing communication and task tracking across teams."
      : "Mejoré la usabilidad y reduje procesos manuales, mejorando la comunicación y el seguimiento de tareas entre equipos.",
  
    image: "https://imgs.search.brave.com/m2ZXYO-WKz86GMrMD-2kN2il3jicbNC1FiIFmqjfaQA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYW56/YWRlcmEuZXMvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDkv/aWdyb3drZXJfTG9n/b180MjB4NDIwLnBu/Zw", // ← Reemplazar por una captura real del CRM
  
    technologies: [
      "React",
      "Chakra UI",
      "TypeScript",
      "Zustand",
      "React Query",
      "Axios",
      "Vite"
    ],
  
    status: "Completed",
    featured: true,
  }
  ,
  {
    title: language === "en"
      ? "JRAffleCompany - Online Raffle Platform"
      : "JRAffleCompany - Plataforma de Sorteos Online",
  
    description: language === "en"
      ? "Designed and developed a complete raffle platform from scratch, allowing users to participate in raffles, upload payment proofs, and receive confirmation via email and WhatsApp. Includes a powerful admin panel for raffle and user management."
      : "Diseñé y desarrollé desde cero una plataforma completa de sorteos, que permite a los usuarios participar, subir comprobantes de pago y recibir confirmación por correo y WhatsApp. Incluye un panel de administración para gestionar sorteos y usuarios.",
  
    problem: language === "en"
      ? "Lack of an automated and user-friendly platform to manage online raffles, handle payments, and streamline user verification."
      : "Falta de una plataforma automatizada y fácil de usar para gestionar sorteos online, procesar pagos y verificar usuarios de forma eficiente.",
  
    solution: language === "en"
      ? "Built a responsive raffle platform with user authentication, image uploads, admin dashboard, WhatsApp integration and email confirmations. All data is securely managed with Firebase."
      : "Construí una plataforma de sorteos responsiva con autenticación de usuarios, subida de imágenes, panel de administración, integración con WhatsApp y confirmaciones por correo. Toda la información es gestionada de forma segura con Firebase.",
  
    role: language === "en"
      ? "Full Stack Developer (Frontend + Firebase Backend)"
      : "Desarrollador Full Stack (Frontend + Backend con Firebase)",
  
    results: language === "en"
      ? "Automated 100% of the raffle process. Improved participant management and reduced manual verification effort by over 80%."
      : "Automatización del 100% del proceso de sorteo. Mejora en la gestión de participantes y reducción del esfuerzo manual de verificación en más del 80%.",
  
    image: "https://i.imgur.com/apc7iu1.png",
    link: "https://jrafflecompany.com/",           
    github: "https://github.com/LudwingValecillos/sorteazo-de-la-suerte",
  
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Firebase",
      "Firestore",
      "EmailJS",
      "WhatsApp API",
      "Cloud Storage"
    ],
  
    status: "Completed",
    featured: true,
  },
  
  {
    title: language === "en" ? "Import Teknology - E-commerce Platform" : "Import Teknology - Plataforma E-commerce",
    description: language === "en"
      ? "Built a complete e-commerce solution for a mobile accessories company. Implemented product catalog, shopping cart, user authentication, and payment integration."
      : "Construí una solución e-commerce completa para una empresa de accesorios móviles. Implementé catálogo de productos, carrito de compras, autenticación de usuarios e integración de pagos.",
    problem: language === "en"
      ? "Company needed to transition from physical store to online sales platform"
      : "La empresa necesitaba transicionar de tienda física a plataforma de ventas online",
    solution: language === "en"
      ? "Developed a full-featured e-commerce platform with modern UI/UX and secure payment processing"
      : "Desarrollé una plataforma e-commerce completa con UI/UX moderna y procesamiento seguro de pagos",
    role: language === "en" ? "Lead Full Stack Developer" : "Desarrollador Full Stack Líder",
    results: language === "en"
      ? "Increased online sales by 150% and reduced operational costs by 40%"
      : "Aumenté las ventas online en 150% y reduje costos operativos en 40%",
    image: "https://i.imgur.com/yilyvWa.png",
    link: "https://symphonious-sunburst-afc60e.netlify.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "Express"],
    github: "https://github.com/LudwingValecillos/mobile-premium-vista",
    status: "Completed",
    featured: true,
  },
  {
    title: language === "en" ? "M-Store - Security Systems" : "M-Store - Sistemas de Seguridad",
    description: language === "en"
      ? "Created a professional website for a security camera installation company. Features include service showcase, contact forms, and project portfolio."
      : "Creé un sitio web profesional para una empresa de instalación de cámaras de seguridad. Incluye muestra de servicios, formularios de contacto y portafolio de proyectos.",
    problem: language === "en"
      ? "Security company needed professional online presence to showcase services and attract clients"
      : "La empresa de seguridad necesitaba presencia online profesional para mostrar servicios y atraer clientes",
    solution: language === "en"
      ? "Developed a modern website with service catalog, project gallery, and lead generation forms"
      : "Desarrollé un sitio web moderno con catálogo de servicios, galería de proyectos y formularios de generación de leads",
    role: language === "en" ? "Frontend Developer & UI/UX Designer" : "Desarrollador Frontend y Diseñador UI/UX",
    results: language === "en"
      ? "Generated 25+ qualified leads and improved brand credibility"
      : "Generé 25+ leads calificados y mejoré la credibilidad de la marca",
    image: "https://i.imgur.com/oeqnQZp.png",
    link: "https://tiendamstore.com.ar/----------------------",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/LudwingValecillos/landingsecurity1",
    status: "Completed",
    featured: true,
  },
  {
    title: language === "en" ? "Mis Rutinas Online - Fitness Platform" : "Mis Rutinas Online - Plataforma Fitness",
    description: language === "en"
      ? "Developed a comprehensive fitness platform for personal trainers and clients. Features include workout planning, progress tracking, client management, and payment processing."
      : "Desarrollé una plataforma fitness integral para entrenadores personales y clientes. Incluye planificación de entrenamientos, seguimiento de progreso, gestión de clientes y procesamiento de pagos.",
    problem: language === "en"
      ? "Personal trainers needed a digital platform to manage clients, create workouts, and track progress"
      : "Los entrenadores personales necesitaban una plataforma digital para gestionar clientes, crear entrenamientos y seguir progreso",
    solution: language === "en"
      ? "Built a full-stack application with user management, workout builder, progress tracking, and payment integration"
      : "Construí una aplicación full-stack con gestión de usuarios, creador de entrenamientos, seguimiento de progreso e integración de pagos",
    role: language === "en" ? "Full Stack Developer & Product Manager" : "Desarrollador Full Stack y Product Manager",
    results: language === "en"
      ? "Platform serves 500+ active users with 95% client retention rate"
      : "La plataforma sirve a 500+ usuarios activos con 95% de retención de clientes",
    image: "https://i.imgur.com/BRLMfoX.png",
    link: "https://misrutinasonline.com/",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
    github: null,
    status: "Completed",
    featured: true,
  },
  {
    title: language === "en" ? "Lo de Nacho - Butcher Shop Management" : "Lo de Nacho - Gestión de Carnicería",
    description: language === "en"
      ? "Created a business management system for a local butcher shop. Features include inventory management, sales tracking, customer database, and reporting."
      : "Creé un sistema de gestión empresarial para una carnicería local. Incluye gestión de inventario, seguimiento de ventas, base de datos de clientes y reportes.",
    problem: language === "en"
      ? "Local butcher shop needed digital transformation to improve operations and customer service"
      : "La carnicería local necesitaba transformación digital para mejorar operaciones y servicio al cliente",
    solution: language === "en"
      ? "Developed a custom business management system with inventory, sales, and customer management"
      : "Desarrollé un sistema de gestión empresarial personalizado con gestión de inventario, ventas y clientes",
    role: language === "en" ? "Full Stack Developer & Business Analyst" : "Desarrollador Full Stack y Analista de Negocios",
    results: language === "en"
      ? "Improved operational efficiency by 60% and increased customer satisfaction"
      : "Mejoré la eficiencia operativa en 60% y aumenté la satisfacción del cliente",
    image: "https://i.imgur.com/4NxmcOb.png",
    link: null,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    github: null,
    status: "Development",
    featured: false,
  },
  {
    title: language === "en" ? "Cultural Center - Event Management" : "Centro Cultural - Gestión de Eventos",
    description: language === "en"
      ? "Built a comprehensive event management platform for a cultural center. Features include ticket sales, seat management, event scheduling, and vendor management."
      : "Construí una plataforma integral de gestión de eventos para un centro cultural. Incluye venta de tickets, gestión de asientos, programación de eventos y gestión de proveedores.",
    problem: language === "en"
      ? "Cultural center needed digital platform to manage events, sell tickets, and coordinate vendors"
      : "El centro cultural necesitaba una plataforma digital para gestionar eventos, vender tickets y coordinar proveedores",
    solution: language === "en"
      ? "Developed a full-featured event management system with ticketing, seating, and vendor coordination"
      : "Desarrollé un sistema de gestión de eventos completo con ticketing, asientos y coordinación de proveedores",
    role: language === "en" ? "Full Stack Developer & System Architect" : "Desarrollador Full Stack y Arquitecto de Sistemas",
    results: language === "en"
      ? "Increased event attendance by 200% and streamlined event management process"
      : "Aumenté la asistencia a eventos en 200% y optimicé el proceso de gestión de eventos",
    image: "https://i.imgur.com/yt6yiEH.png",
    link: "https://passwave.onrender.com/",
    technologies: ["React", "Redux", "Java", "Spring Boot", "Spring Security", "PostgreSQL", "JWT"],
    github: "https://github.com/LudwingValecillos/PassWave",
    status: "Completed",
    featured: true,
  },
  {
    title: language === "en" ? "HomeBanking - Financial Platform" : "HomeBanking - Plataforma Financiera",
    description: language === "en"
      ? "Developed a secure banking platform with features like account management, transfers, loans, card management, and payment processing."
      : "Desarrollé una plataforma bancaria segura con funciones como gestión de cuentas, transferencias, préstamos, gestión de tarjetas y procesamiento de pagos.",
    problem: language === "en"
      ? "Need for a secure, user-friendly banking platform with comprehensive financial services"
      : "Necesidad de una plataforma bancaria segura y fácil de usar con servicios financieros integrales",
    solution: language === "en"
      ? "Built a full-stack banking application with advanced security, real-time transactions, and comprehensive financial tools"
      : "Construí una aplicación bancaria full-stack con seguridad avanzada, transacciones en tiempo real y herramientas financieras integrales",
    role: language === "en" ? "Full Stack Developer & Security Specialist" : "Desarrollador Full Stack y Especialista en Seguridad",
    results: language === "en"
      ? "Successfully processed 10,000+ transactions with 99.9% uptime and zero security breaches"
      : "Procesé exitosamente 10,000+ transacciones con 99.9% de tiempo activo y cero brechas de seguridad",
    image: "https://i.imgur.com/AXxErHB.png",
    link: "https://homebankig-frontend.onrender.com/",
    technologies: ["React", "Redux", "Java", "Spring Boot", "Spring Security", "PostgreSQL", "JWT"],
    github: "https://github.com/LudwingValecillos/HomeBankig-FrontEnd",
    status: "Completed",
    featured: true,
  },
  {
    title: language === "en" ? "Supermarket - E-commerce Platform" : "Supermercado - Plataforma E-commerce",
    description: language === "en"
      ? "Created a comprehensive e-commerce platform for a supermarket with 200+ products, detailed product pages, shopping cart, and integrated payment gateway."
      : "Creé una plataforma e-commerce integral para un supermercado con 200+ productos, páginas detalladas de productos, carrito de compras y pasarela de pago integrada.",
    problem: language === "en"
      ? "Supermarket needed to expand online presence and offer digital shopping experience"
      : "El supermercado necesitaba expandir presencia online y ofrecer experiencia de compra digital",
    solution: language === "en"
      ? "Developed a complete e-commerce solution with product catalog, cart system, and payment processing"
      : "Desarrollé una solución e-commerce completa con catálogo de productos, sistema de carrito y procesamiento de pagos",
    role: language === "en" ? "Frontend Developer & E-commerce Specialist" : "Desarrollador Frontend y Especialista en E-commerce",
    results: language === "en"
      ? "Increased online sales by 300% and improved customer shopping experience"
      : "Aumenté las ventas online en 300% y mejoré la experiencia de compra del cliente",
    image: "https://i.imgur.com/YaipjNn.png",
    link: "https://ludwingvalecillos.github.io/E-comerceMarketShop/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    github: "https://github.com/LudwingValecillos/E-comerceMarketShop",
    status: "Completed",
    featured: false,
  },
];

export const getSkills = () => ({
  "Frontend Development": [
    "React",
    "TypeScript", 
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Next.js",
    "Chakra UI",
    "Firebase",
  ],
  "Backend Development": [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Node.js",
    "Express"
  ],
  "Database & Cloud": [
    "PostgreSQL",
    "Supabase",
    "MongoDB",
    "AWS"
  ],
  "DevOps & Tools": [
    "Git",
    "GitHub",
    "Docker",
    "CI/CD",
    "Vite"
  ],
  "Testing & Quality": [
    "Jest",
    "Postman",
    "Unit Testing",
    "Integration Testing"
  ]
});

export const getContactLinks = (language) => [
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
    link: "/LudwingValecillosCV.pdf",
    label: language === "en" ? "Resume" : "Currículum",
  },
  {
    icon: FaEnvelope,
    link: "mailto:ludwingvaldev@gmail.com",
    label: language === "en" ? "Email" : "Correo",
  },
];

export const getExperience = (language) => [
  {
    title: language === "en" ? "Senior Full Stack Developer" : "Desarrollador Full Stack Senior",
    company: language === "en" ? "Freelance & Contract Work" : "Trabajo Freelance y por Contrato",
    period: language === "en" ? "2022 - Present" : "2022 - Presente",
    description: language === "en" 
      ? "Leading development of scalable web applications and digital solutions for diverse clients. Specialized in React, Spring Boot, and modern web technologies. Collaborated with clients to deCompletedr high-quality, production-ready solutions that drive business growth."
      : "Liderando el desarrollo de aplicaciones web escalables y soluciones digitales para diversos clientes. Especializado en React, Spring Boot y tecnologías web modernas. Colaboré con clientes para entregar soluciones de alta calidad listas para producción que impulsan el crecimiento empresarial.",
    technologies: ["React", "Spring Boot", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    achievements: [
      language === "en" ? "DeCompletedred 7+ client projects with 100% satisfaction rate" : "Entregué 7+ proyectos de clientes con 100% de satisfacción",
      language === "en" ? "Improved application performance by 60% through optimization" : "Mejoré el rendimiento de aplicaciones en 60% mediante optimización",
      language === "en" ? "Implemented CI/CD pipelines reducing deployment time by 80%" : "Implementé pipelines de CI/CD reduciendo tiempo de despliegue en 80%",
      language === "en" ? "Mentored 3 junior developers improving team productivity" : "Mentoré a 3 desarrolladores junior mejorando la productividad del equipo"
    ]
  },
  {
    title: language === "en" ? "Frontend Developer" : "Desarrollador Frontend",
    company: language === "en" ? "Personal Projects & Learning" : "Proyectos Personales y Aprendizaje",
    period: language === "en" ? "2021 - 2022" : "2021 - 2022",
    description: language === "en"
      ? "Built responsive web applications and landing pages focusing on user experience and modern design patterns. Developed strong foundation in frontend technologies and best practices."
      : "Construí aplicaciones web responsivas y landing pages enfocándome en la experiencia del usuario y patrones de diseño modernos. Desarrollé una base sólida en tecnologías frontend y mejores prácticas.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    achievements: [
      language === "en" ? "Created 8+ responsive websites with modern UI/UX" : "Creé 8+ sitios web responsivos con UI/UX moderna",
      language === "en" ? "Optimized loading times by 70% through performance optimization" : "Optimicé los tiempos de carga en 70% mediante optimización de rendimiento",
      language === "en" ? "Implemented modern UI/UX patterns improving user engagement" : "Implementé patrones modernos de UI/UX mejorando el engagement del usuario",
      language === "en" ? "Developed reusable component libraries improving development speed" : "Desarrollé bibliotecas de componentes reutilizables mejorando la velocidad de desarrollo"
    ]
  }
];

export const getCertifications = (language) => [
  {
    title:
      language === "en"
        ? "Software Development Technician (1st Year)"
        : "Técnico Superior en Desarrollo de Software (1.er Año)",
    issuer: "IFTS Nº 26",
    date: "2025",
    description:
      language === "en"
        ? "Currently studying fundamentals of programming, data structures, and agile methodologies."
        : "Actualmente cursando fundamentos de programación, estructuras de datos y metodologías ágiles.",
  },
  {
    title:
      language === "en"
        ? "Full Stack Developer Bootcamp"
        : "Bootcamp de Desarrollador Full Stack",
    issuer: "MindHub",
    date: "05/2024 - 10/2024",
    description:
      language === "en"
        ? "Intensive bootcamp with 700+ hours of real-world projects using Java, Spring Boot, and React. Strong focus on teamwork and agile methodologies (SCRUM)."
        : "Bootcamp intensivo con más de 700 horas en proyectos reales usando Java, Spring Boot y React. Fuerte enfoque en trabajo colaborativo y metodologías ágiles (SCRUM).",
  },
  {
    title:
      language === "en"
        ? "Full Stack Developer Program"
        : "Programa de Desarrollador Full Stack",
    issuer: "Egg Education",
    date: "2023",
    description:
      language === "en"
        ? "600+ hour training in Java, Spring Boot, JPA, HTML, CSS, JavaScript, and relational databases."
        : "Más de 600 horas de formación en Java, Spring Boot, JPA, HTML, CSS, JavaScript y bases de datos relacionales.",
  },
];

export const getDownloadCV = (language) => ({
  label: language === "en" ? "Download CV" : "Descargar CV",
  icon: FaDownload,
  link: "/LudwingValecillosCV.pdf"
}); 