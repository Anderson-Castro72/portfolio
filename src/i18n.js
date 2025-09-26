import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    
  en: {
    translation: {
      hero: {
        subtitle: "Custom software: scalable, efficient, and tailored to your needs",
        contact: "Contact Me",
      },
      about: {
        title: "About Me",
        description: "Hi, I’m Ander 👋 a Software Engineer graduated in 2025 and a passionate Full Stack Developer. \n From my first “Hello World” to building complete applications, curiosity and the drive to solve problems have always guided me. \n  I specialize in backend development with Node, Yii2 and .NET, but I also enjoy working with React, Figma, Composer, and Ubuntu Server to deliver end-to-end solutions.\n For me, coding isn’t just about writing functions—it’s about turning ideas into experiences that actually make life easier.",
      },
      skills: {
        title: "Skills",
      },
      project: {
        title: "Key Projects",
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Choose how you want to contact me:",
      },
        techCategories: {
            "all": "All",
            "languages": "Languages",
            "frontend": "Frontend",
            "backend": "Backend",
            "databases": "Databases",
            "dataScience": "Data Science",
            "mobile": "Mobile",
            "infrastructure": "Infrastructure",
            "testing": "Testing",
            "tools": "Tools"
        },      
        projects: {
        reverseAuction: {
            name: "Reverse Auction Platform",
            period: "Feb – Aug 2025",
            description: "Platform connecting companies with developers through reverse auctions. Features rating system and transparent, immutable bids.",
            role: [
            "Testing lead: manual cases & Postman for REST API",
            "Backend support: PostgreSQL design + Node.js (Sequelize)",
            "Integration & deployment on AWS (EC2, S3, Route 53)",
            "Agile teamwork using Trello (Kanban)"
            ],
            impact: "Delivered a secure and scalable auction mechanism with bid transparency and AWS-based deployment."
        },
        univSocialService: {
            name: "Social Service System",
            period: "Apr – Jul 2024",
            description: "Integral platform to manage students, projects and institutions for social service, automating manual processes.",
            role: [
            "Full Stack development (analysis to deployment)",
            "Database design & management with MySQL",
            "Backend with PHP (Yii2) + REST API",
            "Responsive frontend with Bootstrap",
            "PDF & Excel reporting integrations"
            ],
            impact: "Launched July 2024, managing 1,000+ students & 500+ projects annually, optimizing administration."
        },
        motorcycleWorkshop: {
            name: "Motorcycle Workshop System - Freelancer",
            period: "Oct 2024 – Jan 2025",
            description: "Freelance system for client, inventory, sales and purchase management with barcode integration.",
            role: [
            "Full Stack freelance (end-to-end development)",
            "Frontend in React (Vite) + Axios",
            "Backend Node.js + Express.js",
            "Database with MongoDB Atlas",
            "Testing endpoints with Postman"
            ],
            impact: "Automated workflows, reduced inventory errors, and improved customer service for the business."
        }
        }
        
    },
  },
  es: {
    translation: {
      hero: {
          subtitle: "Software personalizado: escalable, eficiente y hecho para tus necesidades",
        contact: "Contáctame",
      },
      about: {
        title: "Sobre mí",
        description: "Hola, soy Ander 👋 Ingeniero de Software graduado en 2025 y un apasionado Desarrollador Full Stack. \n  Desde mi primer “Hola Mundo” hasta crear aplicaciones completas, la curiosidad y las ganas de resolver problemas siempre me han impulsado. \n Me especializo en desarrollo backend con Node, Yii2 y .NET, pero también disfruto trabajar con React, Figma, Composer y Ubuntu Server para entregar soluciones completas.\n Para mí, programar no es solo escribir funciones, es convertir ideas en experiencias que realmente facilitan la vida.",
      },
      skills: {
        title: "Habilidades",
      },
      project: {
        title: "Proyectos Destacados",
      },
      contact: {
        title: "Contáctame",
        subtitle: "Elige cómo quieres comunicarte conmigo:",
      },
        techCategories: {
            "all": "Todo",
            "languages": "Lenguajes",
            "frontend": "Frontend",
            "backend": "Backend",
            "databases": "Bases de Datos",
            "dataScience": "Ciencia de Datos",
            "mobile": "Móvil",
            "infrastructure": "Infraestructura",
            "testing": "Pruebas",
            "tools": "Herramientas"
        },
        projects: {
        reverseAuction: {
            name: "Plataforma de Subastas Inversas",
            period: "Febrero – Agosto 2025",
            description: "Plataforma que conecta empresas con desarrolladores mediante subastas inversas. Incluye sistema de calificaciones y ofertas transparentes e inmutables.",
            role: [
            "Líder de testing: casos manuales y Postman para API REST",
            "Soporte backend: diseño de PostgreSQL + Node.js (Sequelize)",
            "Integración y despliegue en AWS (EC2, S3, Route 53)",
            "Trabajo ágil en equipo usando Trello (Kanban)"
            ],
            impact: "Entrega de un mecanismo de subastas seguro y escalable con transparencia de ofertas y despliegue en AWS."
        },
        univSocialService: {
            name: "Sistema de Servicio Social",
            period: "Abril – Julio 2024",
            description: "Plataforma integral para gestionar estudiantes, proyectos e instituciones para servicio social, automatizando procesos manuales.",
            role: [
            "Desarrollo Full Stack (de análisis a despliegue)",
            "Diseño y gestión de base de datos con MySQL",
            "Backend con PHP (Yii2) + API REST",
            "Frontend responsive con Bootstrap",
            "Integraciones de reportes PDF & Excel"
            ],
            impact: "Lanzado en julio 2024, gestionando más de 1,000 estudiantes y 500 proyectos anualmente, optimizando la administración."
        },
        motorcycleWorkshop: {
            name: "Sistema para MotoTaller - Frelancer",
            period: "Octubre 2024 – Enero 2025",
            description: "Sistema freelance para cliente, gestión de inventario, ventas y compras con integración de códigos de barras.",
            role: [
            "Freelance Full Stack (desarrollo completo)",
            "Frontend en React (Vite) + Axios",
            "Backend Node.js + Express.js",
            "Base de datos con MongoDB Atlas",
            "Pruebas de endpoints con Postman"
            ],
            impact: "Automatizó flujos de trabajo, redujo errores de inventario y mejoró el servicio al cliente."
        }
        }
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;

