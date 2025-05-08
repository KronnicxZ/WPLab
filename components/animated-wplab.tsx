"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function AnimatedWPLab({ width = 500, height = 400 }) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Iniciar animación periódica
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 2000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-[600px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 50,
          rotate: isAnimating ? [0, -5, 5, -5, 0] : 0,
          scale: isAnimating ? [1, 1.05, 1] : 1,
        }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 0.8 },
          rotate: { duration: 1.5, ease: "easeInOut" },
          scale: { duration: 1.5, ease: "easeInOut" },
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        <Image
          src="/images/landing.png"
          alt="WPLab - Aprende WordPress"
          width={width}
          height={height}
          className="rounded-lg"
          priority
        />
      </motion.div>
    </div>
  )
}
