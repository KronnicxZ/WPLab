import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ModuleHeaderProps {
  module: {
    id: number
    title: string
    description: string
    progress: number
    totalLessons: number
    completedLessons: number
  }
}

export function ModuleHeader({ module }: ModuleHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/modulos">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">{module.title}</h1>
      </div>

      <p className="text-muted-foreground">{module.description}</p>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Progreso del módulo</span>
          <span>
            {module.completedLessons}/{module.totalLessons} lecciones
          </span>
        </div>
        <Progress value={module.progress} className="h-2" />
      </div>
    </div>
  )
}
