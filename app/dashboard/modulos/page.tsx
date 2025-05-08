import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ChevronRight, Lock } from "lucide-react"
import Image from "next/image"

// Datos de ejemplo para los módulos
const modules = [
  {
    id: 1,
    title: "Fundamentos de WordPress",
    description: "Conceptos básicos e instalación",
    progress: 80,
    lessons: 6,
    completedLessons: 5,
    unlocked: true,
    image: "/images/module-basics.svg",
  },
  {
    id: 2,
    title: "Gestión de Contenido",
    description: "Páginas, entradas y medios",
    progress: 40,
    lessons: 8,
    completedLessons: 3,
    unlocked: true,
    image: "/images/module-content.svg",
  },
  {
    id: 3,
    title: "Temas y Personalización",
    description: "Personaliza la apariencia de tu sitio",
    progress: 10,
    lessons: 10,
    completedLessons: 1,
    unlocked: true,
    image: "/images/module-themes.svg",
  },
  {
    id: 4,
    title: "Plugins Esenciales",
    description: "Amplía la funcionalidad de WordPress",
    progress: 0,
    lessons: 8,
    completedLessons: 0,
    unlocked: true,
    image: "/images/module-plugins.svg",
  },
  {
    id: 5,
    title: "Desarrollo Avanzado",
    description: "Crea tus propios temas y plugins",
    progress: 0,
    lessons: 12,
    completedLessons: 0,
    unlocked: false,
    image: "/images/module-development.png",
  },
  {
    id: 6,
    title: "SEO y Marketing",
    description: "Optimiza tu sitio para buscadores",
    progress: 0,
    lessons: 6,
    completedLessons: 0,
    unlocked: false,
    image: "/images/module-seo.png",
  },
  {
    id: 7,
    title: "WooCommerce",
    description: "Crea una tienda online con WordPress",
    progress: 0,
    lessons: 10,
    completedLessons: 0,
    unlocked: false,
    image: "/images/module-woocommerce.png",
  },
  {
    id: 8,
    title: "Seguridad y Mantenimiento",
    description: "Protege y mantén tu sitio WordPress",
    progress: 0,
    lessons: 7,
    completedLessons: 0,
    unlocked: false,
    image: "/images/module-security.png",
  },
]

export default function ModulesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Módulos de Aprendizaje</h1>
        <p className="text-muted-foreground">
          Explora nuestros módulos de aprendizaje para dominar WordPress desde lo básico hasta lo avanzado
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Card key={module.id} className={!module.unlocked ? "opacity-70" : ""}>
            <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
              <Image src={module.image || "/placeholder.svg"} alt={module.title} fill className="object-contain" />
              {!module.unlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                  <Lock className="h-10 w-10 text-muted-foreground" />
                </div>
              )}
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>{module.title}</CardTitle>
              </div>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progreso</span>
                    <span>
                      {module.completedLessons}/{module.lessons} lecciones
                    </span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>

                <Button
                  className="w-full"
                  variant={module.unlocked ? "default" : "outline"}
                  disabled={!module.unlocked}
                  asChild
                >
                  <Link href={`/dashboard/modulos/${module.id}`} className="flex items-center justify-between">
                    <span>{module.unlocked ? "Continuar" : "Bloqueado"}</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
