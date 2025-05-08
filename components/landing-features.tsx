import { CheckCircle, Layout, Code, PuzzleIcon, Trophy, Zap } from "lucide-react"

export function LandingFeatures() {
  return (
    <section className="py-12 md:py-24 bg-background" id="caracteristicas">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Características
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-wpingo-dark sm:text-5xl">
              Aprende WordPress como un profesional
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra plataforma combina el aprendizaje estructurado con elementos de gamificación para hacer que
              dominar WordPress sea divertido y efectivo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Layout className="h-12 w-12 text-wpingo" />
            <h3 className="text-xl font-bold">Fundamentos de WordPress</h3>
            <p className="text-center text-muted-foreground">
              Aprende los conceptos básicos de WordPress, desde la instalación hasta la publicación de contenido.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <PuzzleIcon className="h-12 w-12 text-wpingo" />
            <h3 className="text-xl font-bold">Temas y Plugins</h3>
            <p className="text-center text-muted-foreground">
              Domina la personalización con temas y amplía la funcionalidad con plugins esenciales.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Code className="h-12 w-12 text-wpingo" />
            <h3 className="text-xl font-bold">Desarrollo Avanzado</h3>
            <p className="text-center text-muted-foreground">
              Aprende a programar tus propios temas y plugins con PHP, HTML, CSS y JavaScript.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Zap className="h-12 w-12 text-wpingo" />
            <h3 className="text-xl font-bold">Desafíos Diarios</h3>
            <p className="text-center text-muted-foreground">
              Mantén tu racha de aprendizaje con desafíos diarios que ponen a prueba tus conocimientos.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Trophy className="h-12 w-12 text-wpingo" />
            <h3 className="text-xl font-bold">Logros y Medallas</h3>
            <p className="text-center text-muted-foreground">
              Gana medallas y desbloquea logros a medida que avanzas en tu viaje de aprendizaje.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <CheckCircle className="h-12 w-12 text-wpingo" />
            <h3 className="text-xl font-bold">Seguimiento de Progreso</h3>
            <p className="text-center text-muted-foreground">
              Visualiza tu progreso y retoma desde donde lo dejaste en cualquier dispositivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
