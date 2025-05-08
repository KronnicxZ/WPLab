"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Heart, Lightbulb, Target, Users } from "lucide-react"
import Image from "next/image"

export function LandingAbout() {
  return (
    <section className="py-12 md:py-24 bg-background" id="sobre-nosotros">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Sobre Nosotros
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-wpingo-dark sm:text-5xl">
              Nuestra misión es tu aprendizaje
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En WPLab, nos apasiona ayudar a las personas a dominar WordPress de manera efectiva y divertida.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-wpingo-dark">Quiénes Somos</h3>
              <p className="text-muted-foreground">
                Somos un equipo de desarrolladores y educadores apasionados por WordPress y el aprendizaje en línea.
                Combinamos nuestra experiencia técnica con metodologías pedagógicas innovadoras para crear una
                plataforma de aprendizaje única.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-wpingo-dark">Nuestra Filosofía</h3>
              <p className="text-muted-foreground">
                Creemos que el aprendizaje debe ser accesible, divertido y efectivo. Por eso, hemos diseñado WPLab con
                elementos de gamificación que mantienen la motivación y hacen que el proceso de aprendizaje sea más
                agradable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <Lightbulb className="h-8 w-8 text-wpingo" />
                <h4 className="text-center font-medium">Innovación</h4>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <Heart className="h-8 w-8 text-wpingo" />
                <h4 className="text-center font-medium">Pasión</h4>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <Target className="h-8 w-8 text-wpingo" />
                <h4 className="text-center font-medium">Excelencia</h4>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <Users className="h-8 w-8 text-wpingo" />
                <h4 className="text-center font-medium">Comunidad</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/images/team.jpg"
              alt="Equipo de WPLab"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Nuestro Equipo</h3>
              <p className="text-white/90">
                Un grupo diverso de profesionales unidos por la pasión de enseñar y compartir conocimiento.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="rounded-lg border p-6">
            <BookOpen className="h-10 w-10 text-wpingo mb-4" />
            <h3 className="text-xl font-bold mb-2">Contenido de Calidad</h3>
            <p className="text-muted-foreground">
              Nuestros cursos son desarrollados por expertos en WordPress y actualizados regularmente para reflejar las
              últimas tendencias y mejores prácticas.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <Award className="h-10 w-10 text-wpingo mb-4" />
            <h3 className="text-xl font-bold mb-2">Metodología Probada</h3>
            <p className="text-muted-foreground">
              Nuestra metodología de enseñanza combina teoría, práctica y gamificación para maximizar la retención y
              aplicación del conocimiento.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <Users className="h-10 w-10 text-wpingo mb-4" />
            <h3 className="text-xl font-bold mb-2">Comunidad Activa</h3>
            <p className="text-muted-foreground">
              Forma parte de una comunidad vibrante de estudiantes y profesionales que comparten conocimientos,
              experiencias y oportunidades.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
