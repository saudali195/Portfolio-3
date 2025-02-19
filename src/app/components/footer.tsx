import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-cyan-900 text-white py-12 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Saud Muhammad Ali</h2>
            <p className="text-gray-300">Full-Stack Developer | AI Enthusiast | Athlete</p>
          </div>
          <div className="flex space-x-6">
            <Link href="https://www.linkedin.com/in/saud-muhammad-ali-6b4a222b6" passHref>
              <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 transform hover:scale-110">
                <FaLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </span>
            </Link>
            <Link href="https://github.com/saudali195" passHref>
              <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 transform hover:scale-110">
                <FaGithub size={24} />
                <span className="sr-only">GitHub</span>
              </span>
            </Link>
            <Link href="mailto:saud.al.faisal927@gmail.com" passHref>
              <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 transform hover:scale-110">
                <FaEnvelope size={24} />
                <span className="sr-only">Email</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 mb-4">
            © {currentYear} Saud Muhammad Ali | Built with <span className="text-cyan-400">Next.js</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
          <p className="text-sm text-gray-400 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> in Saudi Arabia
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
    </footer>
  )
}

