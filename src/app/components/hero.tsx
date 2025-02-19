"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

const GlowingOrb = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    </div>
  )
}

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "AI Enthusiast", "Athlete"],
    loop: 0,
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <GlowingOrb />

      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900 opacity-50"></div>

      <div className="relative z-10 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Image
            src="/1.png"
            alt="Saud Muhammad Ali"
            width={200}
            height={200}
            className="rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-500/50 mx-auto mb-8"
          />

          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Saud Muhammad Ali</h1>

          <p className="text-xl sm:text-2xl text-cyan-300 mb-8">
            <span>{text}</span>
            <Cursor cursorColor="#22d3ee" />
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/my-cv.pdf" className="glow-button">
              Download CV
            </Link>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/saud-muhammad-ali-6b4a222b6" className="social-icon-link">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://github.com/saudali195" className="social-icon-link">
                <FaGithub size={24} />
              </Link>
              <Link href="mailto:saud.al.faisal927@gmail.com" className="social-icon-link">
                <FaEnvelope size={24} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-cyan-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

