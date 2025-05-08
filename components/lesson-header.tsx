import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface LessonHeaderProps {
  moduleId: number
  moduleTitle: string
  lessonTitle: string
}

export function LessonHeader({ moduleId, moduleTitle, lessonTitle }: LessonHeaderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/dashboard/modulos/${moduleId}`}>
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver al módulo</span>
          </Link>
        </Button>
        <div className="text-sm text-muted-foreground">{moduleTitle}</div>
      </div>

      <h1 className="text-2xl font-bold">{lessonTitle}</h1>
    </div>
  )
}
