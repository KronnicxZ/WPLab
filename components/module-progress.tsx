import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Clock, Flame, Zap } from "lucide-react"

interface ModuleProgressProps {
  module: {
    id: number
    title: string
    progress: number
    totalLessons: number
    completedLessons: number
  }
}

export function ModuleProgress({ module }: ModuleProgressProps) {
  // Datos de ejemplo
  const estimatedTime = module.totalLessons * 12 // Promedio de 12 minutos por lección
  const remainingTime = (module.totalLessons - module.completedLessons) * 12

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Estadísticas del Módulo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Tiempo estimado</div>
                <div className="text-lg font-bold">{estimatedTime} minutos</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Tiempo restante</div>
                <div className="text-lg font-bold">{remainingTime} minutos</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Zap className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm font-medium">XP por completar</div>
                <div className="text-lg font-bold">{(module.totalLessons - module.completedLessons) * 50} XP</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Logros del Módulo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Award className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm font-medium">Maestro del Módulo</div>
                <div className="text-xs text-muted-foreground">Completa todas las lecciones</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Flame className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm font-medium">Aprendizaje Rápido</div>
                <div className="text-xs text-muted-foreground">Completa el módulo en menos de 2 días</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
