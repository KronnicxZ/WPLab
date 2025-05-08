"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Code, FileText, Layout, Zap, ImageIcon } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

// Datos de ejemplo para los desafíos
const challenges = [
  {
    id: 1,
    title: "Crear una página personalizada",
    description: "Crea una página personalizada en WordPress utilizando el editor de bloques Gutenberg.",
    icon: Layout,
    difficulty: "Media",
    xp: 50,
    completed: false,
    isToday: true,
  },
  {
    id: 2,
    title: "Instalar y configurar un plugin",
    description: "Instala y configura un plugin de SEO en tu sitio WordPress.",
    icon: Code,
    difficulty: "Fácil",
    xp: 30,
    completed: false,
    isToday: false,
  },
  {
    id: 3,
    title: "Optimizar imágenes",
    description: "Optimiza 5 imágenes en tu biblioteca de medios para mejorar el rendimiento.",
    icon: ImageIcon,
    difficulty: "Fácil",
    xp: 20,
    completed: false,
    isToday: false,
  },
  {
    id: 4,
    title: "Crear una entrada con categorías y etiquetas",
    description: "Publica una entrada y organízala con categorías y etiquetas adecuadas.",
    icon: FileText,
    difficulty: "Fácil",
    xp: 25,
    completed: true,
    isToday: false,
  },
]

export function ChallengesList() {
  const [challengesList, setChallengesList] = useState(challenges)
  const { toast } = useToast()

  const handleCompleteChallenge = (id: number) => {
    setChallengesList(
      challengesList.map((challenge) => (challenge.id === id ? { ...challenge, completed: true } : challenge)),
    )

    const challenge = challengesList.find((c) => c.id === id)

    toast({
      title: "¡Desafío completado!",
      description: `Has ganado ${challenge?.xp} puntos de experiencia.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Tus Desafíos</h2>
        <Button variant="outline">Ver Historial</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {challengesList.map((challenge) => (
          <Card key={challenge.id} className={challenge.completed ? "opacity-70" : ""}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {challenge.isToday && (
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      Hoy
                    </Badge>
                  )}
                  {challenge.completed && (
                    <Badge variant="outline" className="bg-green-500/10 text-green-600">
                      Completado
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>10 min</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <challenge.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{challenge.title}</CardTitle>
              </div>
              <CardDescription>{challenge.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-2 text-center">
                  <div className="text-xs text-muted-foreground">Dificultad</div>
                  <div className="font-medium">{challenge.difficulty}</div>
                </div>
                <div className="rounded-lg border p-2 text-center">
                  <div className="text-xs text-muted-foreground">Recompensa</div>
                  <div className="font-medium flex items-center justify-center gap-1">
                    <Zap className="h-4 w-4 text-primary" />
                    {challenge.xp} XP
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={challenge.completed ? "outline" : "default"}
                disabled={challenge.completed}
                onClick={() => handleCompleteChallenge(challenge.id)}
              >
                {challenge.completed ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Completado
                  </span>
                ) : (
                  "Completar Desafío"
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
