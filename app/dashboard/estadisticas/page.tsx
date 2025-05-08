import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function EstadisticasPage() {
  // Datos de ejemplo para las estadísticas
  const stats = {
    totalProgress: 45,
    modulesCompleted: 2,
    totalModules: 8,
    hoursStudied: 24,
    daysStreak: 7,
    exercisesCompleted: 48,
    accuracyRate: 85,
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Estadísticas de Aprendizaje</h1>
        <p className="text-muted-foreground">
          Monitorea tu progreso y rendimiento en la plataforma
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Progreso General</CardTitle>
            <CardDescription>Tu avance en todo el curso</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progreso total</span>
                  <span>{stats.totalProgress}%</span>
                </div>
                <Progress value={stats.totalProgress} className="h-2" />
              </div>
              <div className="text-sm text-muted-foreground">
                {stats.modulesCompleted} de {stats.totalModules} módulos completados
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tiempo de Estudio</CardTitle>
            <CardDescription>Horas dedicadas al aprendizaje</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-3xl font-bold">{stats.hoursStudied}h</div>
              <div className="text-sm text-muted-foreground">
                Racha actual: {stats.daysStreak} días consecutivos
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ejercicios</CardTitle>
            <CardDescription>Tu rendimiento en los ejercicios</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-3xl font-bold">{stats.exercisesCompleted}</div>
              <div className="text-sm text-muted-foreground">
                Ejercicios completados
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Tasa de precisión</span>
                  <span>{stats.accuracyRate}%</span>
                </div>
                <Progress value={stats.accuracyRate} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Logros Desbloqueados</CardTitle>
            <CardDescription>Tus insignias y reconocimientos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm text-muted-foreground">
                4 logros pendientes de desbloquear
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actividad Semanal</CardTitle>
            <CardDescription>Horas de estudio por día</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[80px] items-end gap-2 pt-4">
              {[2, 4, 3, 5, 3, 4, 2].map((hours, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-md bg-primary"
                  style={{ height: `${hours * 15}px` }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>L</span>
              <span>M</span>
              <span>M</span>
              <span>J</span>
              <span>V</span>
              <span>S</span>
              <span>D</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximos Objetivos</CardTitle>
            <CardDescription>Metas por alcanzar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Completar módulo actual</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Siguiente certificación</span>
                  <span>40%</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}