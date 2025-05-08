"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

interface TrueFalseQuizProps {
  question: string
  onAnswer: (answer: boolean) => void
}

export function TrueFalseQuiz({ question, onAnswer }: TrueFalseQuizProps) {
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null)

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
          <h3 className="text-lg font-semibold">Verdadero o Falso</h3>
          <p>{question}</p>

          <div className="grid grid-cols-2 gap-3">
            <div
              className={`flex items-center justify-center gap-2 p-4 border rounded-lg cursor-pointer ${
                selectedOption === true ? "border-primary bg-primary/10" : "hover:border-primary hover:bg-primary/5"
              }`}
              onClick={() => setSelectedOption(true)}
            >
              <Check className="h-5 w-5 text-green-500" />
              <span className="font-medium">Verdadero</span>
            </div>
            <div
              className={`flex items-center justify-center gap-2 p-4 border rounded-lg cursor-pointer ${
                selectedOption === false ? "border-primary bg-primary/10" : "hover:border-primary hover:bg-primary/5"
              }`}
              onClick={() => setSelectedOption(false)}
            >
              <X className="h-5 w-5 text-red-500" />
              <span className="font-medium">Falso</span>
            </div>
          </div>

          <Button onClick={handleSubmit} disabled={selectedOption === null} className="w-full">
            Comprobar Respuesta
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
