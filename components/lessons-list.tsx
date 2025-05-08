import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Circle, Lock, PlayCircle } from "lucide-react"
import { getModuleById } from "@/lib/module-data"

interface LessonsListProps {
  moduleId: number
}

export function LessonsList({ moduleId }: LessonsListProps) {
  // Obtener el módulo y sus lecciones
  const module = getModuleById(moduleId)

  // Si no hay módulo o lecciones, mostrar mensaje
  if (!module || !module.lessons || module.lessons.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Lecciones</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No hay lecciones disponibles para este módulo.</p>
        </CardContent>
      </Card>
    )
  }

  // En una app real, obtendríamos el progreso del usuario desde la base de datos
  // Para este ejemplo, asumimos que la primera lección está completada
  const completedLessons = [1]
  const currentLesson = 2

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lecciones</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {module.lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id)
            const isCurrent = lesson.id === currentLesson
            const isLocked = !isCompleted && !isCurrent && index > currentLesson - 1

            return (
              <Link
                key={lesson.id}
                href={isLocked ? "#" : `/dashboard/modulos/${moduleId}/leccion/${lesson.id}`}
                className={`flex items-start gap-3 rounded-lg border p-3 transition-colors ${
                  isLocked ? "cursor-not-allowed opacity-60" : "hover:bg-accent"
                }`}
              >
                <div className="mt-0.5">
                  {isCompleted ? (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  ) : isCurrent ? (
                    <PlayCircle className="h-5 w-5 text-primary" />
                  ) : isLocked ? (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <div className="font-medium">{lesson.title}</div>
                  <div className="text-sm text-muted-foreground">{lesson.description}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{lesson.duration}</div>
                </div>
              </Link>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
