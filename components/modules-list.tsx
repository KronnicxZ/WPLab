"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useUserProgress } from "@/hooks/use-user-progress"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedProgress } from "@/components/animated-progress"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedText } from "@/components/animated-text"
import { motion } from "framer-motion"

// Datos completos de los módulos
const modules = [
  {
    id: 1,
    title: "Fundamentos de WordPress",
    description: "Conceptos básicos e instalación",
    lessons: 6,
    unlocked: true,
    image: "/images/module-basics.png",
    content: "Aprende los conceptos fundamentales de WordPress, desde su instalación hasta la configuración inicial.",
  },
  {
    id: 2,
    title: "Gestión de Contenido",
    description: "Páginas, entradas y medios",
    lessons: 8,
    unlocked: true,
    image: "/images/module-content.png",
    content: "Domina la creación y organización de contenido en WordPress con páginas, entradas, categorías y medios.",
  },
  {
    id: 3,
    title: "Temas y Personalización",
    description: "Personaliza la apariencia de tu sitio",
    lessons: 10,
    unlocked: true,
    image: "/images/module-themes.png",
    content: "Aprende a personalizar la apariencia de tu sitio WordPress con temas, widgets y el personalizador.",
  },
  {
    id: 4,
    title: "Plugins Esenciales",
    description: "Amplía la funcionalidad de WordPress",
    lessons: 8,
    unlocked: true,
    image: "/images/module-plugins.png",
    content: "Descubre los plugins más importantes para mejorar tu sitio WordPress con nuevas funcionalidades.",
  },
  {
    id: 5,
    title: "Desarrollo Avanzado",
    description: "Crea tus propios temas y plugins",
    lessons: 12,
    unlocked: false,
    image: "/images/module-development.png",
    content: "Aprende a desarrollar tus propios temas y plugins personalizados para WordPress.",
  },
  {
    id: 6,
    title: "SEO y Marketing",
    description: "Optimiza tu sitio para buscadores",
    lessons: 6,
    unlocked: false,
    image: "/images/module-seo.png",
    content: "Mejora el posicionamiento de tu sitio en buscadores y aprende estrategias de marketing digital.",
  },
  {
    id: 7,
    title: "WooCommerce",
    description: "Crea una tienda online con WordPress",
    lessons: 10,
    unlocked: false,
    image: "/images/module-woocommerce.png",
    content: "Aprende a crear y gestionar una tienda online completa con WooCommerce y WordPress.",
  },
  {
    id: 8,
    title: "Seguridad y Mantenimiento",
    description: "Protege y mantén tu sitio WordPress",
    lessons: 7,
    unlocked: false,
    image: "/images/module-security.png",
    content: "Descubre las mejores prácticas para mantener tu sitio WordPress seguro, actualizado y optimizado.",
  },
]

export function ModulesList() {
  const { getModuleProgress, isLoading } = useUserProgress()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <AnimatedText text="Módulos de Aprendizaje" className="text-2xl font-bold" />
        <AnimatedButton variant="outline" asChild delay={2}>
          <Link href="/dashboard/modulos">Ver todos</Link>
        </AnimatedButton>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {modules.map((module, index) => {
          const { completedLessons, percentage } = !isLoading
            ? getModuleProgress(module.id, module.lessons)
            : { completedLessons: 0, percentage: 0 }

          return (
            <AnimatedCard key={module.id} delay={index} className={!module.unlocked ? "opacity-70" : ""}>
              <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
                <Image src={module.image || "/placeholder.svg"} alt={module.title} fill className="object-cover" />
                {!module.unlocked && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-background/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.5,
                      }}
                    >
                      <Lock className="h-10 w-10 text-muted-foreground" />
                    </motion.div>
                  </motion.div>
                )}
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{module.title}</CardTitle>
                </div>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progreso</span>
                      <span>
                        {completedLessons}/{module.lessons} lecciones
                      </span>
                    </div>
                    <AnimatedProgress value={percentage} delay={index + 3} className="h-2" />
                  </div>

                  <AnimatedButton
                    className="w-full"
                    variant={module.unlocked ? "default" : "outline"}
                    disabled={!module.unlocked}
                    asChild
                    delay={index + 5}
                  >
                    <Link href={`/dashboard/modulos/${module.id}`} className="flex items-center justify-between">
                      <span>{module.unlocked ? "Continuar" : "Bloqueado"}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                </div>
              </CardContent>
            </AnimatedCard>
          )
        })}
      </div>
    </div>
  )
}
