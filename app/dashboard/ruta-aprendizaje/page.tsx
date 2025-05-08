import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ArrowRight, CheckCircle, Circle, Lock } from "lucide-react"

export default function LearningPathPage() {
  // Datos de ejemplo para la ruta de aprendizaje
  const learningPath = [
    {
      id: 1,
      moduleId: 1,
      title: "Fundamentos de WordPress",
      description: "Aprende los conceptos básicos de WordPress",
      progress: 80,
      completed: false,
      unlocked: true,
    },
    {
      id: 2,
      moduleId: 2,
      title: "Gestión de Contenido",
      description: "Domina la creación y organización de contenido",
      progress: 40,
      completed: false,
      unlocked: true,
    },
    {
      id: 3,
      moduleId: 3,
      title: "Temas y Personalización",
      description: "Personaliza la apariencia de tu sitio",
      progress: 10,
      completed: false,
      unlocked: true,
    },
    {
      id: 4,
      moduleId: 4,
      title: "Plugins Esenciales",
      description: "Amplía la funcionalidad de WordPress",
      progress: 0,
      completed: false,
      unlocked: true,
    },
    {
      id: 5,
      moduleId: 5,
      title: "Desarrollo Avanzado",
      description: "Crea tus propios temas y plugins",
      progress: 0,
      completed: false,
      unlocked: false,
    },
    {
      id: 6,
      moduleId: 6,
      title: "SEO y Marketing",
      description: "Optimiza tu sitio para buscadores",
      progress: 0,
      completed: false,
      unlocked: false,
    },
    {
      id: 7,
      moduleId: 7,
      title: "WooCommerce",
      description: "Crea una tienda online con WordPress",
      progress: 0,
      completed: false,
      unlocked: false,
    },
    {
      id: 8,
      moduleId: 8,
      title: "Certificación Final",
      description: "Demuestra tus conocimientos y obtén tu certificado",
      progress: 0,
      completed: false,
      unlocked: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tu Ruta de Aprendizaje</h1>
        <p className="text-muted-foreground">
          Sigue esta ruta para convertirte en un experto en WordPress de manera estructurada
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progreso total</span>
              <span>23%</span>
            </div>
            <Progress value={23} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <div className="relative">
        {learningPath.map((step, index) => (
          <div key={step.id} className="relative">
            {index < learningPath.length - 1 && (
              <div className="absolute left-6 top-12 h-full w-0.5 bg-border" aria-hidden="true" />
            )}
            <div className="relative flex gap-4 pb-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-background">
                {step.completed ? (
                  <CheckCircle className="h-6 w-6 text-primary" />
                ) : step.unlocked ? (
                  <Circle className="h-6 w-6 text-muted-foreground" />
                ) : (
                  <Lock className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1">
                <Card className={!step.unlocked ? "opacity-70" : ""}>
                  <CardHeader className="pb-2">
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Progress value={step.progress} className="h-2" />
                      </div>
                      <Button
                        className="w-full"
                        variant={step.unlocked ? "default" : "outline"}
                        disabled={!step.unlocked}
                        asChild
                      >
                        <Link
                          href={`/dashboard/modulos/${step.moduleId}`}
                          className="flex items-center justify-between"
                        >
                          <span>{step.unlocked ? "Continuar" : "Bloqueado"}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
