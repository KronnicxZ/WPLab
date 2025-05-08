import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Clock, Code, Flame, Layout, PuzzleIcon, Star, Trophy, Zap } from "lucide-react"

// Datos de ejemplo para los logros
const achievements = [
  {
    id: 1,
    title: "Primeros Pasos",
    description: "Completa tu primera lección",
    icon: Star,
    unlocked: true,
    date: "12/04/2023",
  },
  {
    id: 2,
    title: "Racha de 7 días",
    description: "Mantén una racha de aprendizaje de 7 días",
    icon: Flame,
    unlocked: true,
    date: "18/04/2023",
  },
  {
    id: 3,
    title: "Explorador",
    description: "Visita todas las secciones de la plataforma",
    icon: Zap,
    unlocked: true,
    date: "20/04/2023",
  },
  {
    id: 4,
    title: "Estudiante Dedicado",
    description: "Estudia durante 10 horas en total",
    icon: Clock,
    unlocked: true,
    date: "25/04/2023",
  },
  {
    id: 5,
    title: "Maestro de WordPress",
    description: "Completa el módulo de Fundamentos de WordPress",
    icon: Trophy,
    unlocked: true,
    date: "02/05/2023",
  },
  {
    id: 6,
    title: "Maestro del Contenido",
    description: "Completa el módulo de Gestión de Contenido",
    icon: BookOpen,
    unlocked: false,
  },
  {
    id: 7,
    title: "Diseñador Web",
    description: "Completa el módulo de Temas y Personalización",
    icon: Layout,
    unlocked: false,
  },
  {
    id: 8,
    title: "Desarrollador de Plugins",
    description: "Completa el módulo de Plugins Esenciales",
    icon: PuzzleIcon,
    unlocked: false,
  },
  {
    id: 9,
    title: "Programador WordPress",
    description: "Completa el módulo de Desarrollo Avanzado",
    icon: Code,
    unlocked: false,
  },
  {
    id: 10,
    title: "Racha de 30 días",
    description: "Mantén una racha de aprendizaje de 30 días",
    icon: Flame,
    unlocked: false,
  },
  {
    id: 11,
    title: "Experto en WordPress",
    description: "Completa todos los módulos del curso",
    icon: Award,
    unlocked: false,
  },
  {
    id: 12,
    title: "Maestro de Desafíos",
    description: "Completa 50 desafíos diarios",
    icon: Trophy,
    unlocked: false,
  },
]

export function AchievementsGrid() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
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
              {achievement.unlocked ? (
                <Badge variant="outline" className="mt-2 bg-primary/10">
                  Desbloqueado {achievement.date}
                </Badge>
              ) : (
                <Badge variant="outline" className="mt-2">
                  Bloqueado
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
