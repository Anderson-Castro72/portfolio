import { useState } from "react";
import { 
  FaJava, FaNodeJs, FaReact, FaPhp, FaPython, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt, FaAngular
} from "react-icons/fa";
import { 
  SiPostgresql, SiMongodb, SiMysql, SiKotlin, SiIonic, SiLaravel, 
  SiExpress, SiNestjs, SiBootstrap, SiKubernetes, SiVite, 
  SiJira, SiTrello, SiAndroidstudio, SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiFirebase, SiNginx, SiJest, SiCypress, SiMocha
} from "react-icons/si";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Bus Tracking App",
      description: "Real-time public transport tracking system.",
      demo: "#",
      repo: "#"
    },
    {
      title: "E-commerce Backend",
      description: "Scalable backend for online store with payment integration.",
      demo: "#",
      repo: "#"
    }
    
  ];

const techs = [
  // Languages
  { icon: <FaPython className="text-yellow-500" />, name: "Python", category: "Languages" },
  { icon: <FaJava className="text-red-600" />, name: "Java", category: "Languages" },
  { icon: <FaPhp className="text-indigo-600" />, name: "PHP / Yii2", category: "Languages" },
  { icon: <FaNodeJs className="text-green-600" />, name: "JavaScript", category: "Languages" },

  // Frontend
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5", category: "Frontend" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3", category: "Frontend" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS", category: "Frontend" },
  { icon: <SiNextdotjs className="text-gray-900" />, name: "Next.js", category: "Frontend" },
  { icon: <img src="/AngularJS.svg" className="w-10 h-10" />, name: "Angular.js", category: "Frontend" },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript", category: "Frontend" },
  { icon: <FaReact className="text-blue-500" />, name: "React", category: "Frontend" },
  { icon: <SiVite className="text-yellow-500" />, name: "Vite", category: "Frontend" },
  { icon: <SiBootstrap className="text-purple-600" />, name: "Bootstrap", category: "Frontend" },

  // Backend
  { icon: <SiExpress className="text-gray-700" />, name: "Express.js", category: "Backend" },
  { icon: <SiNestjs className="text-red-600" />, name: "Nest.js", category: "Backend" },
  { icon: <SiLaravel className="text-red-500" />, name: "Laravel", category: "Backend" },
  { icon: <FaDocker className="text-blue-500" />, name: "Docker", category: "Backend" },
  { icon: <SiKubernetes className="text-blue-600" />, name: "Kubernetes", category: "Backend" },

  // Databases
  { icon: <SiMysql className="text-orange-600" />, name: "MySQL", category: "Databases" },
  { icon: <SiPostgresql className="text-sky-700" />, name: "PostgreSQL", category: "Databases" },
  { icon: <SiMongodb className="text-green-700" />, name: "MongoDB", category: "Databases" },

  // Data Science
  { icon: <img src="/Pandas.svg" className="w-10 h-10" />, name: "Pandas", category: "Data Science" },
  { icon: <img src="/NumPy.svg" className="w-10 h-10" />, name: "NumPy", category: "Data Science" },

  // Mobile
  { icon: <SiKotlin className="text-purple-500" />, name: "Kotlin", category: "Mobile" },
  { icon: <SiIonic className="text-blue-500" />, name: "Ionic", category: "Mobile" },
  { icon: <SiAndroidstudio className="text-green-600" />, name: "Android Studio", category: "Mobile" },

  // Infrastructure / Cloud
  { icon: <SiNginx className="text-green-600" />, name: "NGINX", category: "Infrastructure" },
  { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase", category: "Infrastructure" },
  { icon: <img src="/AWS.svg" className="w-10 h-10" />, name: "AWS", category: "Infrastructure" },

  // Testing
  { icon: <SiJest className="text-red-500" />, name: "Jest", category: "Testing" },
  { icon: <SiMocha className="text-green-700" />, name: "Mocha", category: "Testing" },
  { icon: <SiCypress className="text-teal-500" />, name: "Cypress", category: "Testing" },

  // Tools
  { icon: <FaGitAlt className="text-orange-600" />, name: "Git", category: "Tools" },
  { icon: <SiJira className="text-blue-400" />, name: "Jira", category: "Tools" },
  { icon: <SiTrello className="text-sky-400" />, name: "Trello", category: "Tools" },
  { icon: <img src="/Postman.svg" className="w-10 h-10" />, name: "Postman", category: "Tools" },
  { icon: <img src="/VisualStudio.svg" className="w-10 h-10" />, name: "Visual Studio", category: "Tools" },
  { icon: <img src="/code.svg" className="w-10 h-10" />, name: "VS Code", category: "Tools" },
];


    const categories = ["All", ...new Set(techs.map(t => t.category))];


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-24 text-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-white">
        <img
          src="/logo.png"
          alt="Ander Logo"
          className="w-40 h-40 mx-auto mb-6 rounded-full shadow-xl"
        />

        <h1 className="font-mono text-5xl font-bold mb-4 drop-shadow-lg">
          Anderson Castro| Full Stack Developer
        </h1>
        <p className="text-lg mb-6 drop-shadow-md">
          Building scalable apps and optimized solutions for clients
        </p>
        <a
          href="#contact"
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Contact Me
        </a>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-mono font-bold mb-6 border-b-2 border-blue-600 inline-block pb-2">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Passionate about backend development and full stack projects. Experienced in Java, Node.js,
          React, and database design. I love building solutions that balance performance and usability.
        </p>
      </section>

      {/* Tecnologías */}
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">Tech Skills</h2>

      {/* Botones de categorías */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-xl font-medium transition-colors ${
              selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
{selectedCategory === "All" ? (
  <div className="relative overflow-hidden w-full py-4">
    <div className="animate-marquee-once">
      {techs.map((t, i) => (
        <div
          key={i}
          className="flex flex-col items-center p-4 bg-white rounded-2xl shadow transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl min-w-[100px]"
        >
          <div className="text-5xl animate-spin-slow hover:animate-none">{t.icon}</div>
          <p className="text-sm text-gray-700 text-center">{t.name}</p>
        </div>
      ))}
    </div>
  </div>
) : (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    {techs
      .filter(t => t.category === selectedCategory)
      .map((t, i) => (
        <div
          key={i}
          className="flex flex-col items-center p-4 bg-white rounded-2xl shadow transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl"
        >
          <div className="text-5xl animate-spin-slow hover:animate-none">{t.icon}</div>
          <p className="text-sm text-gray-700 text-center">{t.name}</p>
        </div>
      ))}
  </div>
)}

        </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-mono font-bold mb-12 text-center border-b-2 border-indigo-400 inline-block pb-2">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-mono font-bold mb-3 text-indigo-600">{p.title}</h3>
              <p className="text-gray-700 mb-4">{p.description}</p>
              <div className="flex gap-6">
                <a
                  href={p.demo}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Demo
                </a>
                <a
                  href={p.repo}
                  className="text-gray-600 font-medium hover:underline"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-mono font-bold mb-12 border-b-2 border-purple-400 inline-block pb-2">
          Get in Touch
        </h2>

        <p className="mb-8 text-gray-700">
          Choose how you want to contact me:
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:andersteven.castro@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-500 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m0 0l4 4M12 16V8" />
            </svg>
            Email
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/50377343434?text=Hola%20Ander%2C%20vi%20tu%20portafolio%20y%20me%20parecen%20interesantes%20tus%20proyectos.%20Soy..."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-400 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.7 14.7c-.3-.1-1.8-.9-2-.9s-.3 0-.5.3c-.2.3-.8.9-.9 1.1s-.2.3-.4.1-.7-.9-1-1.1-.5-.2-.7-.1c-.2.1-.4.1-.7.3-.3.2-1 .6-1.1 1-.1.3-.1.5.2.9s1.1 1.7 2.4 2.7c1.3 1 2.1 1.2 2.4 1.2.3 0 .5 0 .8-.1s1-.4 1.1-.8.1-.7.1-.8c0-.1 0-.2-.1-.3-.1-.1-.3-.3-.5-.5z"/>
            </svg>
            WhatsApp
          </a>

          {/* LinkedIn */}
          <a
            href="www.linkedin.com/in/anderson-castro72/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-500 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.7 0-5 2.3-5 5v14c0 2.7 2.3 5 5 5h14c2.7 0 5-2.3 5-5v-14c0-2.7-2.3-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.9 0-1.5-.7-1.5-1.5 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .8-.7 1.5-1.5 1.5zm13.5 10.3h-3v-4.8c0-1.1-.4-1.8-1.4-1.8-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.8v4.8h-3v-9h3v1.3c.4-.7 1.2-1.8 3-1.8 2.2 0 3.8 1.4 3.8 4.3v5.2z"/>
            </svg>
            LinkedIn
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/Ander_Castro72"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-lg hover:bg-cyan-400 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.5 16.5l.3 3.7c.4 0 .6-.2.8-.4l2-1.9 4.2 3c.8.4 1.4.2 1.6-.8l3.1-14.4c.3-1-.3-1.5-1-1.3l-17 6.5c-1 .3-.9 1.1-.2 1.4l4.7 1.5 10.9-6.9c.5-.3.9-.1.5.2l-8.5 8z"/>
            </svg>
            Telegram
          </a>
        </div>
      </section>

    </div>
  );
}
