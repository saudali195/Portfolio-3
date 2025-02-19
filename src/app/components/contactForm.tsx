"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from "react-icons/fa"
import Image from "next/image"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulating an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Form submitted:", { name, email, message })
      setSubmitStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contactForm" className="py-20 px-4 sm:px-10 text-center bg-gradient-to-b from-gray-900 to-cyan-900">
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-lg p-8 max-w-md w-full shadow-2xl relative z-10"
      >
        <h1 className="text-3xl font-bold mb-6 text-white text-center">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-gray-700 bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
              required
              placeholder="Your Name"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-gray-700 bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
              required
              placeholder="Your Email"
            />
          </div>
          <div className="relative">
            <FaCommentAlt className="absolute left-3 top-3 text-cyan-400" />
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-gray-700 bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 h-32 resize-none text-white placeholder-gray-400"
              required
              placeholder="Your Message"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-cyan-500 text-white font-semibold py-2 rounded-md hover:bg-cyan-400 transition-colors duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            <FaPaperPlane />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </motion.button>
        </form>
        {submitStatus === "success" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-green-400 text-center">
            Message sent successfully!
          </motion.p>
        )}
        {submitStatus === "error" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-red-400 text-center">
            An error occurred. Please try again.
          </motion.p>
        )}
      </motion.div>
    </div>
    </section >
  )
}

