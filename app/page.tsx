import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";export default function ShivamPortfolio() {
  const skills = {
    Languages: ["Python", "SQL", "Shell Scripting"],
    Backend: ["FastAPI", "REST APIs", "Django"],
    Databases: ["MongoDB", "PostgreSQL"],
    DevOps: ["Git", "GitLab CI/CD", "Linux", "Cron Jobs"],
    AI: ["LLM Integration", "Prompt Engineering", "Ollama"],
    Cloud: ["Google Cloud Platform"]
  };

  const projects = [
    {
      title: "iPhone Data Analysis",
      stack: "Python • Pandas • Data Visualization",
      desc: "Built a data analysis application to evaluate iPhone models based on specifications and pricing with intelligent filtering and data cleaning workflows."
    },
    {
      title: "My eVillage Portal",
      stack: "Python • Django • HTML • CSS • JavaScript",
      desc: "Developed a community-driven portal connecting rural users through a centralized digital platform with scalable backend modules."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#1e3a8a,transparent_35%),radial-gradient(circle_at_bottom_left,#7c3aed,transparent_35%)] opacity-40" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Shivam Kharat</h1>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-blue-400 mb-4 tracking-widest uppercase text-sm">
            Software & AI Engineer
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Building AI Powered Backend Systems
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-2xl">
            Software and AI Engineer with 1.8+ years of experience building scalable backend systems,
            automation workflows, REST APIs, and enterprise AI integrations using Python, FastAPI,
            MongoDB, PostgreSQL, and LLM technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/Shivam_Kharat_Resume.pdf"
              download
              className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="text-4xl font-bold">1.8+</h3>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="text-4xl font-bold">AI</h3>
                <p className="text-gray-400 mt-2">LLM Integrations</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="text-4xl font-bold">FastAPI</h3>
                <p className="text-gray-400 mt-2">Backend APIs</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <h3 className="text-4xl font-bold">Cloud</h3>
                <p className="text-gray-400 mt-2">DevOps & GCP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I specialize in building scalable backend systems, automation workflows, and AI-powered
            enterprise applications. My expertise includes FastAPI development, database architecture,
            Linux automation, and integrating LLM technologies into real-world systems.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-14">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-6">{category}</h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/10 text-sm border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-14">Experience</h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-3xl font-bold">Software Developer</h3>
              <p className="text-blue-400 text-lg mt-2">Demos Foundation</p>
            </div>

            <p className="text-gray-400">Aug 2024 – Present</p>
          </div>

          <ul className="space-y-4 text-gray-300 leading-relaxed">
            <li>• Developed Python backend services and enterprise automation workflows.</li>
            <li>• Built Linux cron-based scheduling systems for automated operations.</li>
            <li>• Integrated LLM APIs and Ollama services for intelligent text analysis.</li>
            <li>• Automated MongoDB backup & restoration systems with disaster recovery workflows.</li>
            <li>• Improved development lifecycle using GitLab CI/CD and deployment automation.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-14">Projects</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-blue-400 mt-3">{project.stack}</p>
              <p className="text-gray-300 mt-6 leading-relaxed">{project.desc}</p>

              <div className="mt-8 flex gap-4">
                <button className="px-5 py-3 rounded-xl bg-white text-black font-medium">
                  GitHub
                </button>

                <button className="px-5 py-3 rounded-xl border border-white/20">
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-14">Education</h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="text-2xl font-bold">
            B.Tech – Artificial Intelligence
          </h3>

          <p className="text-blue-400 mt-2">
            G. H. Raisoni College of Engineering & Management, Pune
          </p>

          <p className="text-gray-300 mt-6">
            CGPA: 8.75 / 10
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-12 backdrop-blur-xl text-center">
          <h2 className="text-5xl font-black">Let’s Build Something Amazing</h2>

          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Open to backend engineering, AI integration, automation engineering,
            and scalable software development opportunities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shivamkharat21@gmail.com"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-semibold"
            >
              <MdEmail size={20} />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-kharat/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/shikhar7077"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20"
            >
              <FaGithub size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Shivam Kharat • AI & Backend Engineer
      </footer>
    </main>
  );
}
