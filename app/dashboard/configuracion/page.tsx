import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function ConfiguracionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Configuración</h1>
        <p className="text-muted-foreground">
          Personaliza tu experiencia de aprendizaje y ajusta las notificaciones
        </p>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Preferencias de Aprendizaje</CardTitle>
            <CardDescription>
              Configura cómo quieres que se comporte la plataforma durante tu aprendizaje
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Mostrar pistas en ejercicios</Label>
                <p className="text-sm text-muted-foreground">
                  Recibe sugerencias cuando te quedes atascado
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Modo práctica intensiva</Label>
                <p className="text-sm text-muted-foreground">
                  Aumenta la dificultad de los ejercicios
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notificaciones</CardTitle>
            <CardDescription>
              Administra cómo y cuándo quieres recibir notificaciones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Recordatorios diarios</Label>
                <p className="text-sm text-muted-foreground">
                  Recibe recordatorios para mantener tu racha de aprendizaje
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Actualizaciones del curso</Label>
                <p className="text-sm text-muted-foreground">
                  Notificaciones sobre nuevo contenido y mejoras
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Datos y Privacidad</CardTitle>
            <CardDescription>
              Gestiona tus datos y preferencias de privacidad
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Compartir progreso</Label>
                <p className="text-sm text-muted-foreground">
                  Permite que otros usuarios vean tu progreso
                </p>
              </div>
              <Switch />
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Exportar datos de aprendizaje
              </Button>
              <Button variant="outline" className="w-full text-destructive">
                Eliminar cuenta
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}