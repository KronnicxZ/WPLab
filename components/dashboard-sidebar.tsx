"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, BookOpen, Award, BarChart, Settings, HelpCircle, Zap, Map, User } from "lucide-react"

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Módulos",
    href: "/dashboard/modulos",
    icon: BookOpen,
  },
  {
    name: "Ruta de Aprendizaje",
    href: "/dashboard/ruta-aprendizaje",
    icon: Map,
  },
  {
    name: "Desafíos",
    href: "/dashboard/desafios",
    icon: Zap,
  },
  {
    name: "Logros",
    href: "/dashboard/logros",
    icon: Award,
  },
  {
    name: "Estadísticas",
    href: "/dashboard/estadisticas",
    icon: BarChart,
  },
  {
    name: "Perfil",
    href: "/dashboard/perfil",
    icon: User,
  },
  {
    name: "Configuración",
    href: "/dashboard/configuracion",
    icon: Settings,
  },
  {
    name: "Ayuda",
    href: "/dashboard/ayuda",
    icon: HelpCircle,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar sticky top-16 hidden border-r bg-muted/40 md:block md:w-64 md:border-r h-[calc(100vh-4rem)] p-4 md:p-6 bg-white dark:bg-wpingo-dark/20 overflow-y-auto">
      <nav className="space-y-2">
        {sidebarLinks.map((link) => (
          <Button
            key={link.href}
            variant={pathname === link.href ? "default" : "ghost"}
            className={cn(
              "inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full justify-start",
              pathname === link.href ? "sidebar-item-active" : "",
              pathname === link.href
                ? "bg-wpingo text-primary-foreground hover:bg-wpingo/90 hover:text-primary-foreground"
                : "hover:bg-muted",
            )}
            asChild
          >
            <Link href={link.href}>
              <link.icon className="mr-2 h-5 w-5" />
              {link.name}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  )
}
