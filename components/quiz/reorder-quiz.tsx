"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown } from "lucide-react"

interface ReorderQuizProps {
  question: string
  items: string[]
  onAnswer: (answer: number[]) => void
}

export function ReorderQuiz({ question, items, onAnswer }: ReorderQuizProps) {
  const [orderedItems, setOrderedItems] = useState(() => {
    // Crear una copia desordenada de los elementos
    const shuffled = [...items]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  })

  const moveItem = (index: number, direction: "up" | "down") => {
    if ((direction === "up" && index === 0) || (direction === "down" && index === orderedItems.length - 1)) {
      return
    }

    const newItems = [...orderedItems]
    const targetIndex = direction === "up" ? index - 1 : index + 1
    ;[newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]]
    setOrderedItems(newItems)
  }

  const handleSubmit = () => {
    // Convertir los elementos ordenados a índices basados en el array original
    const answer = orderedItems.map((item) => items.indexOf(item))
    onAnswer(answer)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Ordena correctamente</h3>
          <p>{question}</p>

          <div className="space-y-2">
            {orderedItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-background">
                <span>{item}</span>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" disabled={index === 0} onClick={() => moveItem(index, "up")}>
                    <ArrowUp className="h-4 w-4" />
                    <span className="sr-only">Mover arriba</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={index === orderedItems.length - 1}
                    onClick={() => moveItem(index, "down")}
                  >
                    <ArrowDown className="h-4 w-4" />
                    <span className="sr-only">Mover abajo</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={handleSubmit} className="w-full">
            Comprobar Respuesta
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
