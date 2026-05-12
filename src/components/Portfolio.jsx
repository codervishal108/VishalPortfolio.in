import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
          Vishal Gupta
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
          AI Enthusiast • Tech Innovator • Social Leader • Management Expert
        </p>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <a
            href="https://github.com/codervishal108"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition flex items-center gap-2"
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/vishalgupta108"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition flex items-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 leading-8 text-lg">
              I am a passionate AI learner, technology explorer, developer, and social enthusiast from India.
              I specialize in Artificial Intelligence, Data Analytics, Android Development, and innovative digital solutions.
              Along with technical expertise, I have strong leadership and management abilities gained through organizing events,
              managing communities, and leading collaborative projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-gray-400 mt-2">Projects Built</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
              <h3 className="text-3xl font-bold">AI</h3>
              <p className="text-gray-400 mt-2">Focused Developer</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
              <h3 className="text-3xl font-bold">Leadership</h3>
              <p className="text-gray-400 mt-2">Management Skills</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
              <h3 className="text-3xl font-bold">Social</h3>
              <p className="text-gray-400 mt-2">Community Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 md:px-20 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Artificial Intelligence',
              'Machine Learning',
              'Python Development',
              'Android App Development',
              'Data Analytics',
              'Prompt Engineering',
              'Leadership & Management',
              'Social Media Strategy',
              'Problem Solving'
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-2xl p-6 hover:border-white transition cursor-pointer hover:shadow-lg"
              >
                <p className="text-lg font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition">
              <h3 className="text-2xl font-bold mb-4">AI Multifunction Calculator</h3>
              <p className="text-gray-300 leading-7 mb-4">
                Developed an advanced Android calculator app with features like BMI calculator,
                GST tools, investment calculations, and currency conversion using API integration.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Android</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">API</span>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition">
              <h3 className="text-2xl font-bold mb-4">Smart PDF Editor</h3>
              <p className="text-gray-300 leading-7 mb-4">
                Built an interactive Streamlit-based PDF editor with photo upload, signature placement,
                cropping, and export functionality.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Streamlit</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">PDF</span>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition">
              <h3 className="text-2xl font-bold mb-4">NLP & Data Analytics</h3>
              <p className="text-gray-300 leading-7 mb-4">
                Applied machine learning preprocessing, tokenization, visualization, and analytics techniques
                on real-world datasets.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">ML</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">NLP</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition">
              <h3 className="text-2xl font-bold mb-4">Event Management & Leadership</h3>
              <p className="text-gray-300 leading-7 mb-4">
                Organized sports and social activities while managing teams, schedules,
                communication, and operational coordination.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Leadership</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Team Management</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Organization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 md:px-20 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Connect With Me</h2>
          <p className="text-gray-400 text-lg mb-10">
            Open for collaborations, AI projects, tech communities, and innovative opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:vishalgupta.ai@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition flex items-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>

            <a
              href="https://github.com/codervishal108"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition flex items-center gap-2"
            >
              <ExternalLink size={20} />
              Open Source Projects
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        © 2026 Vishal Gupta | AI • Technology • Leadership • Innovation
      </footer>
    </div>
  );
}
