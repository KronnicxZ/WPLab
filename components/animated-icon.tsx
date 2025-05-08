"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedIconProps {
  icon: React.ElementType
  className?: string
  size?: number
  color?: string
  hoverColor?: string
  delay?: number
}

export function AnimatedIcon({
  icon: Icon,
  className,
  size = 24,
  color = "currentColor",
  hoverColor,
  delay = 0,
}: AnimatedIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay * 0.1,
      }}
      whileHover={{
        rotate: [0, -10, 10, -10, 0],
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn("flex items-center justify-center", className)}
    >
      <Icon
        style={{
          width: size,
          height: size,
          color: isHovered && hoverColor ? hoverColor : color,
          transition: "color 0.3s ease",
        }}
      />
    </motion.div>
  )
}
