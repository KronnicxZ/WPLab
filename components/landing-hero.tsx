import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedWpingo } from "@/components/animated-wpingo"

export function LandingHero() {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-36 bg-wpingo-bg">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-wpingo-dark sm:text-4xl md:text-5xl lg:text-6xl">
                Aprende WordPress de forma profesional y efectiva
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Domina WordPress con WPLab: lecciones interactivas, desafíos prácticos y un sistema de aprendizaje que
                te convertirá en un experto.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/registro">Comenzar Gratis</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#modulos">Ver Módulos</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <AnimatedWpingo width={720} height={576} />
          </div>
        </div>
      </div>
    </section>
  )
}
