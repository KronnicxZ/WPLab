"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MultipleChoiceQuizProps {
  question: string
  options: string[]
  onAnswer: (answer: number) => void
}

export function MultipleChoiceQuiz({ question, options, onAnswer }: MultipleChoiceQuizProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption)
      setSelectedOption(null)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Selecciona la respuesta correcta</h3>
          <p>{question}</p>

          <div className="space-y-2">
            {options.map((option, index) => (
              <div
                key={index}
                className={`p-3 border rounded-lg cursor-pointer ${
                  selectedOption === index ? "border-primary bg-primary/10" : "hover:border-primary hover:bg-primary/5"
                }`}
                onClick={() => setSelectedOption(index)}
              >
                {option}
              </div>
            ))}
          </div>

          <Button onClick={handleSubmit} disabled={selectedOption === null} className="w-full">
            Comprobar Respuesta
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
