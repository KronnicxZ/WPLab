"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/hooks/use-auth"
import { useUserProgress } from "@/hooks/use-user-progress"
import { Flame } from "lucide-react"

export function DashboardOverview() {
  const { user } = useAuth()
  const { getTotalProgress, isLoading } = useUserProgress()

  const { percentage } = !isLoading ? getTotalProgress() : { percentage: 0 }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Progreso General</CardTitle>
        <CardDescription>Continúa aprendiendo para completar tu formación en WordPress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Progreso total</div>
              <div className="text-sm text-muted-foreground">{percentage}%</div>
            </div>
            <Progress value={percentage} className="h-2" />
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-muted">
              <Flame className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-lg font-semibold">7 días</div>
              <div className="text-sm text-muted-foreground">Racha actual</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">Módulos</div>
              <div className="text-2xl font-bold">
                {!isLoading ? `${getTotalProgress().completedModules}/8` : "0/8"}
              </div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">Lecciones</div>
              <div className="text-2xl font-bold">
                {!isLoading ? `${getTotalProgress().completedLessons || 0}/48` : "0/48"}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
