"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Link href="/" className="flex items-center space-x-2">
      <motion.div
        className="relative h-10 w-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{
          scale: isVisible ? 1 : 0,
          rotate: isVisible ? 0 : -180,
          y: isHovered ? -5 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.9 }}
      >
        <Image src="/images/wpingo.png" alt="WPLab Logo" width={40} height={40} className="object-contain" />
      </motion.div>
      <motion.span
        className="font-bold text-xl text-foreground"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : -20,
        }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        WPLab
      </motion.span>
    </Link>
  )
}
