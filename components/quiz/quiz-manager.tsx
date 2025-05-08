"use client"

import { useState } from "react"
import { MultipleChoiceQuiz } from "./multiple-choice-quiz"
import { FillInTheBlankQuiz } from "./fill-in-the-blank-quiz"
import { ReorderQuiz } from "./reorder-quiz"
import { TrueFalseQuiz } from "./true-false-quiz"
import { DragDropQuiz } from "./drag-drop-quiz"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useUserProgress } from "@/hooks/use-user-progress"

export type QuizType = "multipleChoice" | "fillInTheBlank" | "reorder" | "trueFalse" | "dragDrop"

export interface QuizQuestion {
  id: number
  type: QuizType
  question: string
  options?: string[]
  correctAnswer: any
  explanation: string
}

interface QuizManagerProps {
  questions: QuizQuestion[]
  onComplete: () => void
  moduleId: number
  lessonId: number
}

export function QuizManager({ questions, onComplete, moduleId, lessonId }: QuizManagerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [answers, setAnswers] = useState<any[]>(Array(questions.length).fill(null))
  const { toast } = useToast()
  const { markLessonComplete } = useUserProgress()

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleAnswer = (answer: any) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = answer
    setAnswers(newAnswers)

    const isCorrect = checkAnswer(currentQuestion, answer)
    if (isCorrect) {
      setScore(score + 1)
      toast({
        title: "¡Respuesta correcta!",
        description: "Has ganado 10 puntos de experiencia.",
      })
    } else {
      toast({
        title: "Respuesta incorrecta",
        description: currentQuestion.explanation,
        variant: "destructive",
      })
    }

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      }, 1500)
    } else {
      setShowResults(true)
      // Guardar progreso en Supabase
      const finalScore = Math.round(((score + (isCorrect ? 1 : 0)) / questions.length) * 100)
      markLessonComplete(moduleId, lessonId, finalScore)
    }
  }

  const checkAnswer = (question: QuizQuestion, answer: any): boolean => {
    switch (question.type) {
      case "multipleChoice":
        return answer === question.correctAnswer
      case "fillInTheBlank":
        return answer.toLowerCase() === question.correctAnswer.toLowerCase()
      case "reorder":
        return JSON.stringify(answer) === JSON.stringify(question.correctAnswer)
      case "trueFalse":
        return answer === question.correctAnswer
      case "dragDrop":
        return JSON.stringify(answer) === JSON.stringify(question.correctAnswer)
      default:
        return false
    }
  }

  const renderQuiz = () => {
    switch (currentQuestion.type) {
      case "multipleChoice":
        return (
          <MultipleChoiceQuiz
            question={currentQuestion.question}
            options={currentQuestion.options || []}
            onAnswer={handleAnswer}
          />
        )
      case "fillInTheBlank":
        return <FillInTheBlankQuiz question={currentQuestion.question} onAnswer={handleAnswer} />
      case "reorder":
        return (
          <ReorderQuiz
            question={currentQuestion.question}
            items={currentQuestion.options || []}
            onAnswer={handleAnswer}
          />
        )
      case "trueFalse":
        return <TrueFalseQuiz question={currentQuestion.question} onAnswer={handleAnswer} />
      case "dragDrop":
        return (
          <DragDropQuiz
            question={currentQuestion.question}
            items={currentQuestion.options || []}
            onAnswer={handleAnswer}
          />
        )
      default:
        return null
    }
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <Card className="w-full">
        <CardContent className="p-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Trophy className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">¡Quiz completado!</h3>
            <p className="text-muted-foreground">
              Has respondido correctamente {score} de {questions.length} preguntas ({percentage}%)
            </p>
            <Progress value={percentage} className="h-2 w-full max-w-md" />
            <Button onClick={onComplete} className="mt-4">
              Continuar
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Pregunta {currentQuestionIndex + 1} de {questions.length}
        </span>
        <span className="text-sm font-medium">{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
      {renderQuiz()}
    </div>
  )
}
