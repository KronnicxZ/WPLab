"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FillInTheBlankQuizProps {
  question: string
  onAnswer: (answer: string) => void
}

export function FillInTheBlankQuiz({ question, onAnswer }: FillInTheBlankQuizProps) {
  const [answer, setAnswer] = useState("")

  const handleSubmit = () => {
    if (answer.trim()) {
      onAnswer(answer.trim())
      setAnswer("")
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Completa el espacio en blanco</h3>
          <p>{question}</p>

          <div className="space-y-2">
            <Label htmlFor="answer">Tu respuesta:</Label>
            <Input
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Escribe tu respuesta aquí"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit()
                }
              }}
            />
          </div>

          <Button onClick={handleSubmit} disabled={!answer.trim()} className="w-full">
            Comprobar Respuesta
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
