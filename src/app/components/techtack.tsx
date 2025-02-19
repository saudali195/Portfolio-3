"use client"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJs, FaPython, FaAws } from "react-icons/fa"
import { SiTypescript, SiNextdotjs } from "react-icons/si"

const techStack = [
  { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { icon: FaDatabase, name: "SQL", color: "#4479A1" },
  { icon: FaPython, name: "Python", color: "#3776AB" },
  { icon: FaAws, name: "AWS", color: "#FF9900" },
]

export default function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-10 text-center bg-gradient-to-b from-gray-900 to-cyan-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 relative inline-block">
          Tech Stack
          <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative group">
                <tech.icon
                  className="text-6xl sm:text-7xl transition-all duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <div className="absolute -inset-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <motion.p
                className="mt-2 text-sm text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {tech.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

