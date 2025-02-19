"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "E-Commerce Website",
    description: "A fully dynamic e-commerce platform with filtering, cart system, and order management.",
    image: "/2.png?height=300&width=400",
    githubLink: "https://github.com/saudali195/Hackathon",
    liveLink: "https://eweb-ochre.vercel.app/",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Food Blog Website",
    description: "A static food blog built using Next.js with a modern UI and CMS integration.",
    image: "/3.png?height=300&width=400",
    githubLink: "https://github.com/saudali195/mile3blog",
    liveLink: "https://blog-saudalis-projects.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Contentful"],
  },
  {
    title: "Portfolio Website",
    description: "A visually stunning Next.js portfolio with smooth transitions and stylish effects.",
    image: "/5.png?height=300&width=400",
    githubLink: "https://github.com/saudali195/Portfolio1",
    liveLink: "https://portfolio1-seven-ecru.vercel.app/",
    tags: ["Next.js", "Framer Motion", "Three.js"],
  },
  {
    title: "Dynamic-Interactive Resume Builder",
    description: "A Resume Builder That Build up your CV, Within Seconds.",
    image: "/4.png?height=300&width=400",
    githubLink: "https://github.com/saudali195/milestone2resumebySaud",
    liveLink: "https://milestone2resumeby-saud.vercel.app/",
    tags: ["HTML", "CSS", "TypeScript" , "JavaScript"],
  },
]

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-10 bg-gradient-to-b from-gray-900 to-cyan-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center relative inline-block">
          Projects
          <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-cyan-500/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-cyan-500 text-xs text-white px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors duration-300 flex items-center"
                  >
                    View Live <FaExternalLinkAlt size={12} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

