export default function Portfolio() {
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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-24 text-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-white">
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
