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
        description: "Hi, I’m Ander 👋 a Software Engineer specializing in transforming complex ideas into robust, scalable, and efficient Full Stack software.\n\nAs a Software Engineer, I focus on backend development (Node, .NET, Yii2) to build solid foundations and ensure business logic solves real-world problems.\nFor me, coding isn’t just about writing functions—it’s about turning ideas into experiences that actually make life easier.",
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
        geminiChatApp: {
          name: "AI Chat Platform with Gemini 2.5 Flash",
          period: "Oct 2025",
          description: "A full-stack web application that enables real-time chat with Google's Gemini model, featuring user authentication, conversation history, and an intuitive UI built with a modern tech stack.",
          role: [
            "Developed a full-stack application using Next.js 15, React 19, and TypeScript.",
            "Built a serverless backend with Next.js API Routes to handle chat logic, user sessions, and database operations.",
            "Integrated the Google Generative AI API (Gemini 2.5 Flash) to generate intelligent and contextual responses.",
            "Designed the database schema and managed data persistence with Prisma ORM and SQLite.",
            "Implemented secure user registration and login functionality using NextAuth.js and bcrypt for password hashing.",
            "Created a responsive and clean user interface with Tailwind CSS for a modern user experience."
          ],
          impact: "Developed as a technical assessment to demonstrate proficiency in modern full-stack development, including third-party API integration, database management, secure authentication, and building interactive frontends."
        },
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
          impact: "Launched July 2024, managing 1,000+ students & 500+ projects annually, reducing document processing time by 90%."
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
          impact: "Automated workflows, improved customer service, and minimized inventory errors to 0% within the first month of use."
        }
      },
      ideas: {
        title: "Ideas in Development",
        status: "Status",
        impact: "Impact",
        interestButton: "Show Interest",
        emailSubject: "Interest in {{idea}}",
        emailBody: "Hello,\n\nI am interested in the idea \"{{idea}}\" and would like to stay updated on the first releases.\n\nThanks!",
        items: {
          saasDoctors: {
            title: "SaaS for Independent Doctors",
            description: "A cloud-based platform designed for doctors working across multiple clinics, enabling them to manage patient records, appointments, and medical histories in one place.",
            status: "Exploring",
            problem: "Many independent doctors still manage patient records on paper. This leads to information loss, difficulty staying organized when working in several clinics, and limited access to medical histories on the go.",
            solution: "A cloud solution accessible from any device that allows doctors to create and consult digital medical records organized by clinic, manage appointments, and keep a complete patient history.",
            impact: "Helps independent doctors streamline their workflow, prevent errors and data loss, improve patient care, and reduce dependence on paper-based records.",
            businessModel: "Monthly subscription: $15 for the first clinic + $10 for each additional clinic. Scalable according to the number of clinics or activated features.",
            differentiator: "Unlike other medical software, this SaaS focuses specifically on independent doctors working across multiple clinics, providing flexibility, simplicity, and a fair pay-as-you-grow model.",
            nextSteps: "Validate the proposal with doctors through surveys, define core features, and build an MVP (minimum viable product) for initial testing."
          },
            saasBarbershops: {
            title: "SaaS for Barbershops: Profit & Inventory Control",
            description: "A simple system for barbers to track net profit per service, control product inventory, and manage appointments.",
            status: "Exploring",
            problem: "Barbershop owners often operate 'blindly', focusing only on total cash sales. They can't track their *real* net profit per service (after product costs) and have no control over product waste (inventory loss), which directly eats into their earnings.",
            solution: "A streamlined platform that links every service (ticket) to the specific products used (inventory). It automatically calculates net profit per cut, provides alerts on low inventory, and (optionally) offers a simple booking link for clients.",
            impact: "Gives owners clear visibility into their daily net profit, not just revenue. It stops the 'invisible' money loss from product waste and helps barbers save time by automating commission tracking and appointments.",
            businessModel: "Monthly subscription: $10 (Lite/Solo Barber) / $20 (Pro/Multi-Barber). First 30 days free.",
            differentiator: "Most POS systems are too complex. This is built *only* for barbers. Its main feature isn't just selling, but tracking *profit per cut* and *product cost*—their biggest blind spot.",
            nextSteps: "Validate the core profit-tracking concept with 5-10 local barbers. Build an MVP focused *only* on inventory depletion per service and the daily net profit report."
          }
          
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
        description: "Hola, soy Ander 👋. Me especializo en transformar ideas complejas en software Full Stack robusto, escalable y eficiente.\n\nComo Ingeniero de Software, me enfoco en el backend (Node, .NET, Yii2) para construir bases sólidas y asegurar que la lógica de negocio resuelva problemas reales.\nPara mí, programar no es solo escribir funciones, es convertir ideas en experiencias que realmente facilitan la vida.",
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
        geminiChatApp: {
          name: "Plataforma de Chat con IA, Gemini 2.5 Flash",
          period: "Octubre 2025",
          description: "Aplicación web full-stack que permite chatear en tiempo real con el modelo Gemini de Google, incluyendo autenticación de usuarios, historial de conversaciones y una interfaz intuitiva construida con tecnologías modernas.",
          role: [
            "Desarrollo de una aplicación full-stack con Next.js 15, React 19 y TypeScript.",
            "Construcción de un backend serverless con Next.js API Routes para gestionar la lógica del chat, sesiones y base de datos.",
            "Integración con la API de Google Generative AI (Gemini 2.5 Flash) para generar respuestas inteligentes y contextuales.",
            "Diseño del esquema y gestión de la persistencia de datos con Prisma ORM y SQLite.",
            "Implementación de registro e inicio de sesión seguros para usuarios utilizando NextAuth.js y bcrypt para el hasheo de contraseñas.",
            "Creación de una interfaz de usuario responsive y limpia con Tailwind CSS para una experiencia moderna."
          ],
          impact: "Desarrollado como una prueba técnica para demostrar competencia en el desarrollo full-stack moderno, incluyendo la integración de APIs de terceros, gestión de bases de datos, autenticación segura y la construcción de interfaces interactivas."
        },
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
          impact: "Lanzado en julio 2024, gestionando más de 1,000 estudiantes y 500 proyectos anualmente, redujo el tiempo de procesamiento de documentos en un 90%."
        },
        motorcycleWorkshop: {
          name: "Sistema para MotoTaller - Freelancer",
          period: "Octubre 2024 – Enero 2025",
          description: "Sistema freelance para cliente, gestión de inventario, ventas y compras con integración de códigos de barras.",
          role: [
            "Freelance Full Stack (desarrollo completo)",
            "Frontend en React (Vite) + Axios",
            "Backend Node.js + Express.js",
            "Base de datos con MongoDB Atlas",
            "Pruebas de endpoints con Postman"
          ],
          impact: "Automatizó flujos de trabajo, mejoró el servicio al cliente y minimizó los errores de inventario a 0% en el primer mes de uso."
        }
      },
      ideas: {
        title: "Ideas en Desarrollo",
        status: "Estado",
        impact: "Impacto",
        interestButton: "Mostrar Interés",
        emailSubject: "Interés en {{idea}}",
        emailBody: "Hola,\n\nEstoy interesado en la idea \"{{idea}}\" y me gustaría estar al tanto de las primeras versiones.\n\nGracias!",
        items: {
          saasDoctors: {
            title: "SaaS para Médicos Independientes",
            description: "Plataforma digital diseñada para médicos que ofrecen sus servicios en varias clínicas, permitiéndoles gestionar de forma centralizada expedientes clínicos, citas y pacientes.",
            status: "Explorando",
            problem: "Muchos médicos independientes aún manejan el historial de sus pacientes en papel. Esto genera pérdida de información, dificultad para organizarse cuando atienden en múltiples clínicas y falta de acceso rápido a los expedientes.",
            solution: "Un sistema en la nube accesible desde cualquier dispositivo, que permite crear y consultar expedientes digitales separados por clínica, organizar citas y mantener un registro histórico de cada paciente.",
            impact: "Optimiza el trabajo de los médicos independientes, evita errores y pérdidas de información, mejora la atención al paciente y reduce la dependencia del papel.",
            businessModel: "Suscripción mensual: $15 por la primera clínica + $10 por cada clínica adicional. Escalable según el número de clínicas o la cantidad de funciones activadas.",
            differentiator: "A diferencia de otros softwares médicos, este SaaS se enfoca en médicos independientes con múltiples clínicas, ofreciendo flexibilidad, simplicidad de uso y un esquema de pago justo basado en el uso real.",
            nextSteps: "Validar la propuesta con médicos mediante encuestas, definir las funciones prioritarias y construir un MVP (mínimo producto viable) para pruebas iniciales."
          },
          saasBarbershops: {
          title: "SaaS para Barberías: Ganancia Real y Control de Inventario",
          description: "Un sistema simple para que los barberos midan su ganancia neta por servicio, controlen el inventario de productos y gestionen citas.",
          status: "Explorando",
          problem: "Los dueños de barberías a menudo operan 'a ciegas', enfocándose solo en el total de ventas. No pueden medir su ganancia neta *real* por servicio (tras el costo de productos) y no tienen control sobre el desperdicio de producto (pérdida de inventario), lo que se 'come' directamente sus ganancias.",
          solution: "Una plataforma ágil que conecta cada servicio (ticket) con los productos específicos que se usaron (inventario). Calcula automáticamente la ganancia neta por corte, envía alertas de inventario bajo y (opcionalmente) ofrece un enlace simple de citas para clientes.",
          impact: "Brinda a los dueños visibilidad clara de su ganancia neta diaria, no solo de los ingresos brutos. Detiene la pérdida 'invisible' de dinero por desperdicio y ahorra tiempo al automatizar el cálculo de comisiones y la gestión de citas.",
          businessModel: "Suscripción mensual: $10 (Lite/Un Barbero) / $20 (Pro/Multi-Barbero). Primeros 30 días gratis.",
          differentiator: "La mayoría de sistemas POS son demasiado complejos. Este está creado *solo* para barberos. Su función principal no es solo vender, sino medir la *ganancia real por corte* y el *costo de producto*—su mayor punto ciego.",
          nextSteps: "Validar el concepto de 'ganancia por corte' con 5-10 barberos locales. Construir un MVP enfocado *únicamente* en el consumo de inventario por servicio y en el reporte de ganancia neta diaria."
        }

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