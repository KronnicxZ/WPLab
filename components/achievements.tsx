"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Flame, Star, Trophy } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Primeros Pasos",
    description: "Completa tu primera lección",
    icon: Star,
    unlocked: true,
  },
  {
    id: 2,
    title: "Racha de 7 días",
    description: "Mantén una racha de aprendizaje de 7 días",
    icon: Flame,
    unlocked: true,
  },
  {
    id: 3,
    title: "Maestro del Contenido",
    description: "Completa el módulo de Gestión de Contenido",
    icon: Trophy,
    unlocked: false,
  },
  {
    id: 4,
    title: "Estudiante Dedicado",
    description: "Estudia durante 10 horas en total",
    icon: Clock,
    unlocked: false,
  },
]

export function Achievements() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Logros</h2>

      <div className="grid gap-4 md:grid-cols-4">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className={!achievement.unlocked ? "opacity-70 grayscale" : ""}>
            <CardHeader className="pb-2 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <achievement.icon
                  className={`h-6 w-6 ${achievement.unlocked ? "text-primary" : "text-muted-foreground"}`}
                />
              </div>
              <CardTitle className="text-center text-base mt-2">{achievement.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-4">
              <CardDescription className="text-xs">{achievement.description}</CardDescription>
              {achievement.unlocked && (
                <Badge variant="outline" className="mt-2 bg-primary/10">
                  Desbloqueado
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
