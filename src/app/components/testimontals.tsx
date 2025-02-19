"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const testimonials = [
  {
    name: "John Doe",
    feedback: "An outstanding developer! Highly recommended.",
    image: "/8.jpg?height=80&width=80",
    role: "CEO, Tech Innovators",
  },
  {
    name: "Jane Smith",
    feedback: "Delivered exceptional work on our project!",
    image: "/6.jpg?height=80&width=80",
    role: "Project Manager, Digital Solutions",
  },
  {
    name: "Emily Johnson",
    feedback: "Great problem-solving skills and dedication.",
    image: "/7.jpg?height=80&width=80",
    role: "Lead Developer, AI Startups",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    if (isAutoPlay) {
      startAutoPlay()
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlay]) // Removed startAutoPlay from dependencies

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-10 text-center bg-gradient-to-b from-gray-900 to-cyan-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 relative inline-block">
          Testimonials
          <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h2>
        <div className="relative bg-gray-800 p-8 rounded-lg shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-cyan-500 opacity-5"></div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <FaQuoteLeft className="text-cyan-400 text-4xl mb-4 mx-auto" />
              <p className="text-gray-300 italic text-lg mb-6">&quot;{testimonials[currentTestimonial].feedback}&quot;</p>
              <FaQuoteRight className="text-cyan-400 text-4xl mb-4 mx-auto" />
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-cyan-400"
                />
                <div className="ml-4 text-left">
                  <h3 className="text-cyan-400 font-semibold text-xl">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              isAutoPlay ? "bg-cyan-500 text-white" : "bg-gray-700 text-cyan-400"
            }`}
          >
            {isAutoPlay ? "Pause" : "Auto Play"}
          </button>
        </div>
      </div>
    </section>
  )
}

