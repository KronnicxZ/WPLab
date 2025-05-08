"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function DailyChallenge() {
  const [completed, setCompleted] = useState(false)
  const { toast } = useToast()

  const handleComplete = () => {
    setCompleted(true)
    toast({
      title: "¡Desafío completado!",
      description: "Has ganado 50 puntos de experiencia.",
    })
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Desafío Diario</CardTitle>
          <Zap className="h-5 w-5 text-primary" />
        </div>
        <CardDescription>Completa este desafío para mantener tu racha</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-lg bg-muted p-4">
            <h3 className="font-semibold">Crear una página personalizada</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Crea una página personalizada en WordPress utilizando el editor de bloques Gutenberg.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">Dificultad</div>
              <div className="text-lg font-bold">Media</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium">Recompensa</div>
              <div className="text-lg font-bold">50 XP</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleComplete} disabled={completed}>
          {completed ? "Completado" : "Completar Desafío"}
        </Button>
      </CardFooter>
    </Card>
  )
}
