import { LessonContent } from "@/components/lesson-content"
import { LessonNavigation } from "@/components/lesson-navigation"
import { LessonHeader } from "@/components/lesson-header"

export default function LessonPage({
  params,
}: {
  params: { id: string; lessonId: string }
}) {
  const moduleId = Number.parseInt(params.id)
  const lessonId = Number.parseInt(params.lessonId)

  // En una aplicación real, obtendríamos los datos de la lección desde una API o base de datos
  // Datos de ejemplo
  const lesson = {
    id: lessonId,
    moduleId,
    title:
      moduleId === 1 && lessonId === 1
        ? "Introducción a WordPress"
        : moduleId === 1 && lessonId === 2
          ? "Instalación de WordPress"
          : "Lección " + lessonId,
    content: "Contenido de la lección sobre WordPress...",
    hasQuiz: true,
    nextLessonId: lessonId + 1,
    prevLessonId: lessonId > 1 ? lessonId - 1 : null,
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <LessonHeader
        moduleId={moduleId}
        moduleTitle={
          moduleId === 1
            ? "Fundamentos de WordPress"
            : moduleId === 2
              ? "Gestión de Contenido"
              : moduleId === 3
                ? "Temas y Personalización"
                : "Módulo"
        }
        lessonTitle={lesson.title}
      />

      <LessonContent lesson={lesson} />

      <LessonNavigation
        moduleId={moduleId}
        currentLessonId={lessonId}
        prevLessonId={lesson.prevLessonId}
        nextLessonId={lesson.nextLessonId}
        hasQuiz={lesson.hasQuiz}
      />
    </div>
  )
}
