"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GripVertical } from "lucide-react"

interface DragDropQuizProps {
  question: string
  items: string[]
  onAnswer: (answer: number[]) => void
}

export function DragDropQuiz({ question, items, onAnswer }: DragDropQuizProps) {
  // En un entorno real, usaríamos una biblioteca como react-dnd o dnd-kit
  // Para simplificar, usaremos una versión simplificada con reordenamiento manual
  const [orderedItems, setOrderedItems] = useState(() => {
    // Crear una copia desordenada de los elementos
    const shuffled = [...items]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  })
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)

  const handleDragStart = (index: number) => {
    setDraggedIndex(index)
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (draggedIndex === null || draggedIndex === index) return

    const newItems = [...orderedItems]
    const draggedItem = newItems[draggedIndex]
    newItems.splice(draggedIndex, 1)
    newItems.splice(index, 0, draggedItem)

    setOrderedItems(newItems)
    setDraggedIndex(index)
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
          <h3 className="text-lg font-semibold">Arrastra y ordena</h3>
          <p>{question}</p>

          <div className="space-y-2">
            {orderedItems.map((item, index) => (
              <div
                key={index}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                className="flex items-center p-3 border rounded-lg bg-background cursor-move"
              >
                <GripVertical className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="text-sm text-muted-foreground">Arrastra los elementos para ordenarlos correctamente.</div>

          <Button onClick={handleSubmit} className="w-full">
            Comprobar Respuesta
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
