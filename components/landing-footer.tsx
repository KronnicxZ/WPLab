import Link from "next/link"
import { Logo } from "@/components/logo"

export function LandingFooter() {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <Logo />
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} WPLab. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="/terminos" className="text-sm text-muted-foreground hover:underline">
            Términos
          </Link>
          <Link href="/privacidad" className="text-sm text-muted-foreground hover:underline">
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
