"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

interface AnimatedProgressProps {
  value: number
  className?: string
  delay?: number
}

export function AnimatedProgress({ value, className, delay = 0 }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value)
    }, delay * 100)

    return () => clearTimeout(timer)
  }, [value, delay])

  return (
    <div className="relative">
      <Progress value={progress} className={className} />
      {progress > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: delay * 0.1 + 0.3 }}
          className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground"
        >
          {Math.round(progress)}%
        </motion.div>
      )}
    </div>
  )
}
