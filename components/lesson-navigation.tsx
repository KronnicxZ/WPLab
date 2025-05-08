import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

interface LessonNavigationProps {
  moduleId: number
  currentLessonId: number
  prevLessonId: number | null
  nextLessonId: number
  hasQuiz: boolean
}

export function LessonNavigation({
  moduleId,
  currentLessonId,
  prevLessonId,
  nextLessonId,
  hasQuiz,
}: LessonNavigationProps) {
  return (
    <div className="flex items-center justify-between border-t pt-6">
      {prevLessonId ? (
        <Button variant="outline" asChild>
          <Link href={`/dashboard/modulos/${moduleId}/leccion/${prevLessonId}`} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Lección Anterior
          </Link>
        </Button>
      ) : (
        <Button variant="outline" asChild>
          <Link href={`/dashboard/modulos/${moduleId}`} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al Módulo
          </Link>
        </Button>
      )}

      <Button asChild>
        <Link href={`/dashboard/modulos/${moduleId}/leccion/${nextLessonId}`} className="flex items-center gap-2">
          Siguiente Lección
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
