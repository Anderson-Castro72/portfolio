  import { useState } from "react";
  import { useTranslation } from "react-i18next";
  import "./i18n";
  import { 
    FaJava, FaNodeJs, FaReact, FaPhp, FaPython, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt, FaAngular
  } from "react-icons/fa";
  import { 
    SiPostgresql, SiMongodb, SiMysql, SiKotlin, SiIonic, SiLaravel, 
    SiExpress, SiNestjs, SiBootstrap, SiKubernetes, SiVite, 
    SiJira, SiTrello, SiAndroidstudio, SiTypescript, SiNextdotjs, SiTailwindcss, 
    SiFirebase, SiNginx, SiJest, SiCypress, SiMocha
  } from "react-icons/si";
  import Lightbox from "yet-another-react-lightbox";
  import "yet-another-react-lightbox/styles.css";


  export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [darkMode, setDarkMode] = useState(false);
    const [index, setIndex] = useState(-1);
    const [activeProject, setActiveProject] = useState(null);

    const { t, i18n } = useTranslation();
    const toggleLang = () => {
      i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
    };

    const techs = [
      // Languages
      { icon: <FaPython className=" w-10 h-10 text-yellow-500" />, name: "Python", category: "languages" },
      { icon: <FaJava className="w-10 h-10 text-red-600" />, name: "Java", category: "languages" },
      { icon: <FaPhp className="w-10 h-10 text-indigo-600" />, name: "PHP", category: "languages" },
      { icon: <img src="/JavaScript.svg" className="w-10 h-10" />, name: "JavaScript", category: "languages" },
      { icon: <img src="/C.svg" className="w-10 h-10" />, name: "C#", category: "languages" },


      // Frontend
      { icon: <FaHtml5 className="w-10 h-10 text-orange-600" />, name: "HTML5", category: "frontend" },
      { icon: <FaCss3Alt className="w-10 h-10 text-blue-600" />, name: "CSS3", category: "frontend" },
      { icon: <SiTailwindcss className="w-10 h-10 text-sky-400" />, name: "Tailwind CSS", category: "frontend" },
      { icon: <SiNextdotjs className="w-10 h-10 text-gray-900" />, name: "Next.js", category: "frontend" },
      { icon: <img src="/AngularJS.svg" className="w-10 h-10" />, name: "Angular.js", category: "frontend" },
      { icon: <SiTypescript className="w-10 h-10 text-blue-600" />, name: "TypeScript", category: "frontend" },
      { icon: <FaReact className="w-10 h-10 text-blue-500" />, name: "React", category: "frontend" },
      { icon: <img src="/Vite.svg" className="w-10 h-10" />, name: "Vite", category: "frontend" },
      { icon: <SiBootstrap className="w-10 h-10 text-purple-600" />, name: "Bootstrap", category: "frontend" },

      // Backend
      { icon: <FaNodeJs className="w-10 h-10 text-gray-700" />, name: "Node.js", category: "backend" },
      { icon: <SiExpress className="w-10 h-10 text-gray-700" />, name: "Express.js", category: "backend" },
      { icon: <SiNestjs className="w-10 h-10 text-red-600" />, name: "Nest.js", category: "backend" },
      { icon: <SiLaravel className="w-10 h-10 text-red-500" />, name: "Laravel", category: "backend" },
      { icon: <img src="/Yii.svg" className="w-10 h-10" />, name: "Yii2", category: "backend" },
      { icon: <img src="/Symfony.svg" className="w-10 h-10" />, name: "Symfony", category: "backend" },
      { icon: <img src="/twig.svg" className="w-10 h-10" />, name: "Twig", category: "backend" },
      { icon: <img src="/Composer.svg" className="w-10 h-10" />, name: "Composer", category: "backend" },
      { icon: <img src="/NET.svg" className="w-10 h-10" />, name: "ASP.NET", category: "backend" },
      { icon: <img src="/netcore.svg" className="w-10 h-10" />, name: "ASP.NET Core", category: "backend" },
      { icon: <FaDocker className="w-10 h-10 text-blue-500" />, name: "Docker", category: "backend" },
      { icon: <SiKubernetes className="w-10 h-10 text-blue-600" />, name: "Kubernetes", category: "backend" },

      // Databases
      { icon: <img src="/MySQL.svg" className="w-10 h-10" />, name: "MySQL", category: "databases" },
      { icon: <img src="/SQLServer.svg" className="w-10 h-10" />, name: "Microsoft SQL Server", category: "databases" },
      { icon: <SiPostgresql className="w-10 h-10 text-sky-700" />, name: "PostgreSQL", category: "databases" },
      { icon: <img src="/DBeaver.svg" className="w-10 h-10" />, name: "DBeaver", category: "databases" },
      { icon: <SiMongodb className="w-10 h-10 text-green-700" />, name: "MongoDB", category: "databases" },
      { icon: <img src="/Sequelize.svg" className="w-10 h-10" />, name: "Sequelize", category: "databases" },

      // Data Science
      { icon: <img src="/Pandas.svg" className="w-10 h-10" />, name: "Pandas", category: "dataScience" },
      { icon: <img src="/NumPy.svg" className="w-10 h-10" />, name: "NumPy", category: "dataScience" },

      // Mobile
      { icon: <SiKotlin className="w-10 h-10 text-purple-500" />, name: "Kotlin", category: "mobile" },
      { icon: <FaJava className="w-10 h-10 text-red-600" />, name: "Java", category: "mobile" },
      { icon: <SiIonic className="w-10 h-10 text-blue-500" />, name: "Ionic", category: "mobile" },
      { icon: <SiAndroidstudio className="w-10 h-10 text-green-600" />, name: "Android Studio", category: "mobile" },

      // Infrastructure / Cloud
      { icon: <SiNginx className="w-10 h-10 text-green-600" />, name: "NGINX", category: "infrastructure" },
      { icon: <SiFirebase className="w-10 h-10 text-yellow-400" />, name: "Firebase", category: "infrastructure" },
      { icon: <img src="/AWS.svg" className="w-10 h-10" />, name: "AWS", category: "infrastructure" },
      { icon: <img src="/Ubuntu.svg" className="w-10 h-10" />, name: "Ubuntu Server", category: "infrastructure" },


      // Testing
      { icon: <SiJest className="w-10 h-10 text-red-500" />, name: "Jest", category: "testing" },
      { icon: <SiMocha className="w-10 h-10 text-green-700" />, name: "Mocha", category: "testing" },
      { icon: <SiCypress className="w-10 h-10 text-teal-500" />, name: "Cypress", category: "testing" },
      { icon: <img src="/Postman.svg" className="w-10 h-10" />, name: "Postman", category: "testing" },


      // Tools
      { icon: <img src="/GitHub.svg" className="w-10 h-10" />, name: "Github", category: "tools" },
      { icon: <img src="/Swagger.svg" className="w-10 h-10" />, name: "Swagger", category: "tools" },
      { icon: <SiJira className="w-10 h-10 text-blue-400" />, name: "Jira", category: "tools" },
      { icon: <SiTrello className="w-10 h-10 text-sky-400" />, name: "Trello", category: "tools" },
      { icon: <img src="/Figma.svg" className="w-10 h-10" />, name: "Figma", category: "tools" },
      { icon: <img src="/VisualStudio.svg" className="w-10 h-10" />, name: "Visual Studio", category: "tools" },
      { icon: <img src="/code.svg" className="w-10 h-10" />, name: "VS Code", category: "tools" },
    ];

    const projects = [
      {
        key: "reverseAuction",
        technologies: [
          "Node.js", "Express.js", "Sequelize", "PostgreSQL","DBeaver",
          "Angular", "Ionic", "AWS", "Github", "Swagger","Trello","Postman","VS Code"
        ],
        images: [
          "/projects/13.png",
          "/projects/14.png",
          "/projects/15.png",
          "/projects/16.png",
          "/projects/17.png",
        ],
        link: "https://stirring-raindrop-a222c3.netlify.app/"
      },
      {
        key: "univSocialService",
        technologies: [
          "PHP", "Yii2","Composer", "HTML5","CSS3","Bootstrap", "JavaScript",
          "MySQL", "Github", "Ubuntu", "Code",
        ],
        images: [
          "/projects/0.png",
          "/projects/1.png",
          "/projects/2.png",
          "/projects/3.png",
          "/projects/4.png",
        ],
        link: "https://github.com/Anderson-Castro72/ServicioSocialUNIVO.git"
      },
      {
        key: "motorcycleWorkshop",
        technologies: [
          "React", "Vite", "Node.js", "Express.js",
          "MongoDB", "Postman","Code",
        ],
        images: [
          "/projects/5.png",
          "/projects/6.png",
          "/projects/7.png",
          "/projects/8.png",
          "/projects/9.png",
          "/projects/10.png",
          "/projects/11.png",
          "/projects/12.png",
        ],
        link: "https://visionary-jalebi-4dad95.netlify.app/"
      },
    ];

    const ideas = [
      { key: "ganaderia" },
      { key: "ecommerceFerreteria" },
      { key: "controlGastos" }
    ];

    
    const categories = ["All", ...new Set(techs.map(t => t.category))];
    
      return (
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

          <div className="fixed top-4 right-4 flex gap-3">
            {/* Botón idioma */}
            <button
              onClick={toggleLang}
              className="bg-white dark:bg-gray-700 px-3 py-1 rounded shadow text-sm"
            >
              {i18n.language === "en" ? "EN 🌐" : "ES 🌐"}
            </button>

            {/* Botón modo oscuro */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded shadow text-sm"
            >
              {darkMode ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>


          {/* Hero */}
          <section className="flex flex-col items-center justify-center py-24 text-center 
                   bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 
                   dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 text-white">
            <img
              src="/logo.png"
              alt="Ander Logo"
              className="w-40 h-40 mx-auto mb-6 rounded-full shadow-xl"
            />

            <h1 className="font-mono text-5xl font-bold mb-4 drop-shadow-lg">
              Anderson Castro| Full Stack Developer
            </h1>
            <p className="text-white-700 dark:text-white-300 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <br />
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 bg-blue-600 text-blue dark:bg-blue-500 dark:text-white hover:bg-blue-500 dark:hover:bg-blue-400"

            >
              {t("hero.contact")}
            </a>
            
          </section>

          {/* About */}
          <section className="max-w-3xl mx-auto py-20 px-4">
            <h2 className="text-3xl font-mono font-bold mb-6 border-b-2 border-blue-600 inline-block pb-2">
              {t("about.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("about.description")}
            </p>
          </section>

          {/* Tecnologías */}
          <section className="max-w-6xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-semibold text-center mb-10">
              {t("skills.title")}
              </h2>

            {/* Botones de categorías */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white dark:bg-blue-500 dark:text-white"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"

                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "All" ? t("techCategories.all") : t(`techCategories.${cat}`)}
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
                      className="flex flex-col items-center p-4 bg-white rounded-2xl shadow transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl min-w-[100px] dark:bg-gray-800 dark:text-gray-100"
                    >
                      <div className="text-5xl animate-spin-slow hover:animate-none">{t.icon}</div>
                      <p className="text-sm text-gray-700 dark:text-gray-200 text-center">{t.name}</p>
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
                      className="flex flex-col items-center p-4 bg-white rounded-2xl shadow transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl dark:bg-gray-800 dark:text-gray-100"
                    >
                      <div className="text-5xl animate-spin-slow hover:animate-none">{t.icon}</div>
                      <p className="text-sm text-gray-700 dark:text-gray-200 text-center">{t.name}</p>
                    </div>
                  ))}
              </div>
            )}


          </section>

          {/* Projects */}
          <section className="max-w-6xl mx-auto py-20 px-4">
            <h2 className="text-3xl font-semibold text-left mb-10 dark:text-gray-100">
              {t("project.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-gray-700/50 
                            hover:scale-105 transition transform"
                >
                  {/* Imagen principal */}
                  <div className="flex flex-col gap-2 mb-4">
                    <img
                      src={project.images[0]}
                      alt={t(`projects.${project.key}.name`)}
                      className="rounded-lg mb-4 cursor-pointer"
                      onClick={() => {
                        setActiveProject(project);
                        setIndex(0);
                      }}
                    />
                  </div>

                  {/* Textos traducibles */}
                  <h3 className="text-xl font-bold mb-1 dark:text-gray-100">
                    {t(`projects.${project.key}.name`)}
                  </h3>
                  <p className="text-gray-800 dark:text-gray-200 font-medium mb-4">
                    {t(`projects.${project.key}.period`)}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {t(`projects.${project.key}.description`)}
                  </p>

                  <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc ml-5 mb-2">
                    {t(`projects.${project.key}.role`, { returnObjects: true }).map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>

                  <p className="text-gray-800 dark:text-gray-200 font-medium mb-4">
                    {t(`projects.${project.key}.impact`)}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4 text-gray-900 dark:text-gray-100">
                    {project.technologies.map((tech, j) => {
                      const techObj = techs.find(t => t.name.includes(tech));
                      return techObj ? <div key={j} className="text-2xl">{techObj.icon}</div> : null;
                    })}
                  </div>

                  {/* Link al proyecto */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 font-semibold hover:underline"
                  >
                    {i18n.language === "en" ? "View Project →" : "Ver Proyecto →"}
                  </a>
                </div>
              ))}
            </div>

            {/* Lightbox */}
            {activeProject && (
              <Lightbox
                slides={activeProject.images.map((img) => ({ src: img }))}
                open={index >= 0}
                index={index}
                close={() => {
                  setIndex(-1);
                  setActiveProject(null);
                }}
              />
            )}
          </section>

<section id="ideas" className="max-w-6xl mx-auto py-20 px-4">
  <h2 className="text-3xl font-semibold text-left mb-10 dark:text-gray-100">
    {t("ideas.title")}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Object.entries(t("ideas.items", { returnObjects: true })).map(([key, idea]) => (
      <div
        key={key}
        className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-gray-700/50 hover:scale-105 transition transform"
      >
        <h3 className="text-xl font-bold mb-2 dark:text-gray-100">{idea.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3">{idea.description}</p>
        <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
          {t("ideas.status")}: {idea.status}
        </p>
        <p className="text-sm text-gray-800 dark:text-gray-200 mb-4">
          {t("ideas.impact")}: {idea.impact}
        </p>

        {/* Botón de mostrar interés */}
          <a
            href={`mailto:andersteven.castro@gmail.com?subject=${encodeURIComponent(
              t("ideas.emailSubject", { idea: idea.title })
            )}&body=${encodeURIComponent(
              t("ideas.emailBody", { idea: idea.title })
            )}`}
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
          >
            {t("ideas.interestButton")}
          </a>

      </div>
    ))}
  </div>
</section>


          {/* Contact */}
          <section id="contact" className="max-w-3xl mx-auto py-20 px-4 text-center">
            <h2 className="text-3xl font-mono font-bold mb-12 border-b-2 border-purple-400 inline-block pb-2">
              {t("contact.title")}
            </h2>

            <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">

              {t("contact.subtitle")}
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
      </div>
    );
  }
