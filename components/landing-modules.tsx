"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Code, FileText, Layout, PuzzleIcon, Search, ShoppingCart, Shield } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const modules = [
  {
    id: 1,
    title: "Fundamentos de WordPress",
    description: "Fundamentos básicos y configuración inicial",
    icon: BookOpen,
    lessons: 6,
    level: "Principiante",
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "Gestión de Contenido",
    description: "Creación y organización de páginas y entradas",
    icon: FileText,
    lessons: 8,
    level: "Principiante",
    color: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500",
  },
  {
    id: 3,
    title: "Temas y Personalización",
    description: "Diseño y personalización visual del sitio",
    icon: Layout,
    lessons: 10,
    level: "Intermedio",
    color: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500",
  },
  {
    id: 4,
    title: "Plugins Esenciales",
    description: "Extensión de funcionalidades con plugins",
    icon: PuzzleIcon,
    lessons: 8,
    level: "Intermedio",
    color: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-500",
  },
  {
    id: 5,
    title: "SEO y Marketing",
    description: "Optimización para motores de búsqueda",
    icon: Search,
    lessons: 6,
    level: "Intermedio",
    color: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-500",
  },
  {
    id: 6,
    title: "WooCommerce",
    description: "Creación de tiendas online con WordPress",
    icon: ShoppingCart,
    lessons: 10,
    level: "Intermedio",
    color: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500",
  },
  {
    id: 7,
    title: "Seguridad y Mantenimiento",
    description: "Protección y optimización de tu sitio",
    icon: Shield,
    lessons: 7,
    level: "Intermedio",
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500",
  },
  {
    id: 8,
    title: "Desarrollo Avanzado",
    description: "Creación de temas y plugins personalizados",
    icon: Code,
    lessons: 12,
    level: "Avanzado",
    color: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-500",
  },
]

export function LandingModules() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section className="py-12 md:py-24 bg-wpingo-bg/30" id="modulos">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Módulos de Aprendizaje
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-wpingo-dark sm:text-5xl">
              Ruta de aprendizaje completa
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Desde los conceptos básicos hasta técnicas avanzadas, nuestra plataforma te guía paso a paso para
              convertirte en un experto en WordPress.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {modules.map((module) => (
            <motion.div key={module.id} variants={item}>
              <Card
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${module.color} border-none h-full flex flex-col`}
              >
                <CardHeader className="pb-2 flex-grow">
                  <div className="flex items-center justify-between">
                    <module.icon className={`h-8 w-8 ${module.iconColor}`} />
                    <Badge variant="outline" className="bg-white/80 dark:bg-black/30">
                      {module.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-2">{module.title}</CardTitle>
                  <CardDescription className="text-black/70 dark:text-white/70">{module.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-black/70 dark:text-white/70">{module.lessons} lecciones</div>
                    <Button variant="ghost" size="sm" className="gap-1 text-black/80 dark:text-white/80" asChild>
                      <Link href="/registro">
                        Ver módulo <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-8">
          <Button size="lg" asChild>
            <Link href="/registro">Comenzar Ahora</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
