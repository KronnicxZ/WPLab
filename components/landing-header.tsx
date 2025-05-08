"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { AnimatedLogo } from "@/components/animated-logo"
import { ThemeToggle } from "@/components/theme-toggle"

export function LandingHeader() {
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <AnimatedLogo />
        <nav className="hidden md:flex gap-6">
          <Link href="#caracteristicas" className="text-muted-foreground hover:text-foreground transition-colors">
            Características
          </Link>
          <Link href="#modulos" className="text-muted-foreground hover:text-foreground transition-colors">
            Módulos
          </Link>
          <Link href="#sobre-nosotros" className="text-muted-foreground hover:text-foreground transition-colors">
            Sobre Nosotros
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {user ? (
            <Button asChild>
              <Link href="/dashboard">Continuar Aprendiendo</Link>
            </Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
              <Button asChild>
                <Link href="/registro">Registrarse</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
