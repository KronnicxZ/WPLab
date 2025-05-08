import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Flame } from "lucide-react"

export function ChallengesHeader() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Desafíos Diarios</h1>
        <p className="text-muted-foreground">Completa desafíos para mantener tu racha y ganar recompensas</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Flame className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">7 días</div>
                <div className="text-sm text-muted-foreground">Racha actual</div>
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progreso hacia 10 días</span>
                <span>7/10 días</span>
              </div>
              <Progress value={70} className="h-2" />
              <div className="text-xs text-muted-foreground">
                Completa 3 días más para desbloquear la medalla "Racha de 10 días"
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
