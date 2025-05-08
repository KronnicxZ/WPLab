"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/hooks/use-auth"
import { createClientComponentClient } from "@/lib/supabase"
import type { UserProgress } from "@/lib/supabase"

export function useUserProgress() {
  const { user } = useAuth()
  const [progress, setProgress] = useState<UserProgress[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const fetchProgress = async () => {
      if (!user) {
        setProgress([])
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      const { data, error } = await supabase
        .from("user_progress")
        .select("*")
        .eq("user_id", user.id)
        .order("module_id", { ascending: true })
        .order("lesson_id", { ascending: true })

      if (error) {
        console.error("Error fetching user progress:", error)
        setProgress([])
      } else {
        setProgress(data || [])
      }

      setIsLoading(false)
    }

    fetchProgress()
  }, [user, supabase])

  const markLessonComplete = async (moduleId: number, lessonId: number, score = 100) => {
    if (!user) return null

    const existingProgress = progress.find((p) => p.module_id === moduleId && p.lesson_id === lessonId)

    const progressData = {
      user_id: user.id,
      module_id: moduleId,
      lesson_id: lessonId,
      completed: true,
      score,
      updated_at: new Date().toISOString(),
    }

    let result

    if (existingProgress) {
      // Actualizar progreso existente
      const { data, error } = await supabase
        .from("user_progress")
        .update(progressData)
        .eq("id", existingProgress.id)
        .select()
        .single()

      if (error) {
        console.error("Error updating user progress:", error)
        return null
      }

      result = data
    } else {
      // Crear nuevo progreso
      const { data, error } = await supabase.from("user_progress").insert(progressData).select().single()

      if (error) {
        console.error("Error creating user progress:", error)
        return null
      }

      result = data
    }

    if (result) {
      setProgress((prev) => {
        const newProgress = [...prev]
        const index = newProgress.findIndex((p) => p.module_id === moduleId && p.lesson_id === lessonId)

        if (index >= 0) {
          newProgress[index] = result
        } else {
          newProgress.push(result)
        }

        return newProgress
      })
    }

    return result
  }

  const isLessonCompleted = (moduleId: number, lessonId: number) => {
    return progress.some((p) => p.module_id === moduleId && p.lesson_id === lessonId && p.completed)
  }

  const getModuleProgress = (moduleId: number, totalLessons: number) => {
    const completedLessons = progress.filter((p) => p.module_id === moduleId && p.completed).length
    return {
      completedLessons,
      percentage: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
    }
  }

  const getTotalProgress = () => {
    // Calcular el progreso total basado en todos los módulos
    const totalModules = 8 // Número total de módulos en la aplicación
    const completedModules = new Set(progress.filter((p) => p.completed).map((p) => p.module_id)).size

    return {
      completedModules,
      percentage: Math.round((completedModules / totalModules) * 100),
    }
  }

  return {
    progress,
    isLoading,
    markLessonComplete,
    isLessonCompleted,
    getModuleProgress,
    getTotalProgress,
  }
}
