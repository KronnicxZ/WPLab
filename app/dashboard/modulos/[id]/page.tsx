import { ModuleHeader } from "@/components/module-header"
import { LessonsList } from "@/components/lessons-list"
import { ModuleProgress } from "@/components/module-progress"

export default function ModulePage({ params }: { params: { id: string } }) {
  // En una aplicación real, obtendríamos los datos del módulo desde una API o base de datos
  const moduleId = Number.parseInt(params.id)

  // Datos de ejemplo
  const module = {
    id: moduleId,
    title:
      moduleId === 1
        ? "Fundamentos de WordPress"
        : moduleId === 2
          ? "Gestión de Contenido"
          : moduleId === 3
            ? "Temas y Personalización"
            : "Módulo",
    description: "Aprende los conceptos fundamentales de WordPress y cómo configurar tu primer sitio.",
    progress: moduleId === 1 ? 80 : moduleId === 2 ? 40 : moduleId === 3 ? 10 : 0,
    totalLessons: moduleId === 1 ? 6 : moduleId === 2 ? 8 : moduleId === 3 ? 10 : 8,
    completedLessons: moduleId === 1 ? 5 : moduleId === 2 ? 3 : moduleId === 3 ? 1 : 0,
  }

  return (
    <div className="space-y-6">
      <ModuleHeader module={module} />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <LessonsList moduleId={moduleId} />
        </div>
        <div>
          <ModuleProgress module={module} />
        </div>
      </div>
    </div>
  )
}
