"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useUserProgress } from "@/hooks/use-user-progress"
import { Award, BookOpen, Calendar, Clock, Flame, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function UserStats() {
  const { getTotalProgress, isLoading } = useUserProgress()
  const { percentage, completedModules } = !isLoading ? getTotalProgress() : { percentage: 0, completedModules: 0 }

  // Datos de ejemplo para las estadísticas
  const stats = {
    streak: 7,
    totalXP: 1250,
    timeSpent: 8.5, // horas
    lessonsCompleted: 15,
    quizzesCompleted: 12,
    averageScore: 85,
    lastActive: "Hoy",
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
      <motion.div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" variants={container}>
        <motion.div variants={item}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Racha Actual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-wpingo" />
                <div className="text-2xl font-bold">{stats.streak} días</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">XP Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-wpingo" />
                <div className="text-2xl font-bold">{stats.totalXP} XP</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Tiempo de Estudio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-wpingo" />
                <div className="text-2xl font-bold">{stats.timeSpent} horas</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Última Actividad</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-wpingo" />
                <div className="text-2xl font-bold">{stats.lastActive}</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>Progreso del Curso</CardTitle>
            <CardDescription>Tu avance general en el curso de WordPress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Progreso total</div>
                  <div className="text-sm text-muted-foreground">{percentage}%</div>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Módulos Completados</div>
                    <div className="text-xl font-bold">{completedModules}/8</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Logros Desbloqueados</div>
                    <div className="text-xl font-bold">5/20</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Estadísticas de Aprendizaje</div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-3">
                    <div className="text-sm text-muted-foreground">Lecciones Completadas</div>
                    <div className="text-xl font-bold">{stats.lessonsCompleted}</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm text-muted-foreground">Quizzes Completados</div>
                    <div className="text-xl font-bold">{stats.quizzesCompleted}</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm text-muted-foreground">Puntuación Media</div>
                    <div className="text-xl font-bold">{stats.averageScore}%</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
