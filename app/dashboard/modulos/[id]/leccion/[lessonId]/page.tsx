import { LessonContent } from "@/components/lesson-content"
import { LessonNavigation } from "@/components/lesson-navigation"
import { LessonHeader } from "@/components/lesson-header"
import { moduleData } from "@/lib/module-data"
import { getNextLesson, getPreviousLesson } from "@/lib/module-data"

// Definir tipos para módulos y lecciones
type Lesson = {
  id: number
  moduleId: number
  title: string
  content: string
  image?: string
  quiz?: any[]
  hasQuiz: boolean
  nextLessonId: number | null
  prevLessonId: number | null
}

type Module = {
  id: number
  title: string
  lessons: Lesson[]
}

export default function LessonPage({
  params,
}: {
  params: { id: string; lessonId: string }
}) {
  const moduleId = Number.parseInt(params.id)
  const lessonId = Number.parseInt(params.lessonId)

  // Obtener el módulo y la lección específicos
  const module = moduleData[moduleId] as Module
  const lesson = module?.lessons.find((l: Lesson) => l.id === lessonId)

  if (!lesson) {
    return <div>Lección no encontrada</div>
  }

  // Obtener lecciones siguiente y anterior
  const nextLesson = getNextLesson(moduleId, lessonId) as Lesson | null
  const prevLesson = getPreviousLesson(moduleId, lessonId) as Lesson | null

  // Preparar datos de la lección para el componente
  const lessonData: Lesson = {
    id: lesson.id,
    moduleId,
    title: lesson.title,
    content: lesson.content,
    hasQuiz: lesson.quiz && lesson.quiz.length > 0 ? true : false,
    nextLessonId: nextLesson ? nextLesson.id : null,
    prevLessonId: prevLesson ? prevLesson.id : null,
    quiz: lesson.quiz || [],
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <LessonHeader
        moduleId={moduleId}
        moduleTitle={module.title}
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
