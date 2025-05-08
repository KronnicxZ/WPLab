"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuizManager, type QuizQuestion } from "./quiz/quiz-manager"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

interface LessonContentProps {
  lesson: {
    id: number
    moduleId: number
    title: string
    content: string
    hasQuiz: boolean
  }
}

export function LessonContent({ lesson }: LessonContentProps) {
  const [showQuiz, setShowQuiz] = useState(false)
  const { toast } = useToast()

  // Ejemplos de preguntas para diferentes tipos de ejercicios
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      type: "multipleChoice",
      question: "¿Cuál es la diferencia principal entre WordPress.com y WordPress.org?",
      options: [
        "WordPress.com es la versión móvil y WordPress.org es la versión de escritorio",
        "WordPress.com es un servicio alojado y WordPress.org es el software que puedes instalar en tu propio servidor",
        "WordPress.com es gratuito y WordPress.org es de pago",
        "No hay diferencia, son lo mismo",
      ],
      correctAnswer: 1,
      explanation:
        "WordPress.com es un servicio alojado mientras que WordPress.org es el software que puedes instalar en tu propio servidor.",
    },
    {
      id: 2,
      type: "fillInTheBlank",
      question: "WordPress utiliza ________ como lenguaje principal para el desarrollo de temas y plugins.",
      correctAnswer: "php",
      explanation:
        "PHP es el lenguaje de programación principal utilizado en WordPress para el desarrollo de temas y plugins.",
    },
    {
      id: 3,
      type: "trueFalse",
      question: "WordPress es un sistema de gestión de contenidos (CMS) de código abierto.",
      correctAnswer: true,
      explanation:
        "WordPress es efectivamente un CMS de código abierto, lo que significa que su código fuente es accesible y modificable por cualquier persona.",
    },
    {
      id: 4,
      type: "reorder",
      question: "Ordena los siguientes pasos para instalar WordPress en orden correcto:",
      options: [
        "Descargar WordPress",
        "Crear una base de datos",
        "Configurar wp-config.php",
        "Subir archivos al servidor",
        "Ejecutar el instalador",
      ],
      correctAnswer: [0, 1, 2, 3, 4],
      explanation:
        "El orden correcto para instalar WordPress es: descargar, crear base de datos, configurar wp-config.php, subir archivos y ejecutar el instalador.",
    },
    {
      id: 5,
      type: "dragDrop",
      question: "Relaciona cada término de WordPress con su función:",
      options: [
        "Temas - Controlan la apariencia del sitio",
        "Plugins - Añaden funcionalidades adicionales",
        "Widgets - Elementos que se añaden a las barras laterales",
        "Páginas - Contenido estático del sitio",
        "Entradas - Contenido cronológico como un blog",
      ],
      correctAnswer: [0, 1, 2, 3, 4],
      explanation:
        "Cada elemento en WordPress tiene una función específica que contribuye a la estructura y funcionalidad del sitio.",
    },
  ]

  const handleQuizComplete = () => {
    toast({
      title: "¡Lección completada!",
      description: "Has ganado 50 puntos de experiencia.",
    })
    setShowQuiz(false)
  }

  // Seleccionar preguntas basadas en el módulo y lección actual
  const getQuestionsForLesson = () => {
    // En una aplicación real, esto vendría de una base de datos
    if (lesson.moduleId === 1 && lesson.id === 1) {
      return [quizQuestions[0], quizQuestions[2], quizQuestions[1]]
    } else if (lesson.moduleId === 1 && lesson.id === 2) {
      return [quizQuestions[3], quizQuestions[4]]
    } else if (lesson.moduleId === 2) {
      return [quizQuestions[2], quizQuestions[1], quizQuestions[0]]
    } else if (lesson.moduleId === 3) {
      return [quizQuestions[4], quizQuestions[0], quizQuestions[3]]
    }
    // Por defecto, devolver todas las preguntas
    return quizQuestions
  }

  const getLessonContent = () => {
    // Simplificamos el contenido para evitar problemas con cadenas multilínea
    return (
      <div className="prose max-w-none">
        <h2>{lesson.title}</h2>
        <div className="my-6 flex justify-center">
          <Image
            src={lesson.image || "/images/lesson-generic.png"}
            alt={lesson.title}
            width={700}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {!showQuiz ? (
        <>
          <Card>
            <CardContent className="p-6">{getLessonContent()}</CardContent>
          </Card>

          <div className="flex justify-center">
            <Button onClick={() => setShowQuiz(true)}>Realizar Quiz</Button>
          </div>
        </>
      ) : (
        <QuizManager
          questions={getQuestionsForLesson()}
          onComplete={handleQuizComplete}
          moduleId={lesson.moduleId}
          lessonId={lesson.id}
        />
      )}
    </div>
  )
}
