import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award } from "lucide-react"

export function AchievementsHeader() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Logros</h1>
        <p className="text-muted-foreground">Desbloquea logros a medida que avanzas en tu aprendizaje</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">5/20</div>
                <div className="text-sm text-muted-foreground">Logros desbloqueados</div>
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progreso total</span>
                <span>25%</span>
              </div>
              <Progress value={25} className="h-2" />
              <div className="text-xs text-muted-foreground">
                Próximo logro: "Maestro del Contenido" - Completa el módulo de Gestión de Contenido
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
