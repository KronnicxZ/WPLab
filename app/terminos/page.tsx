import { LandingHeader } from "@/components/landing-header"
import { LandingFooter } from "@/components/landing-footer"

export default function TerminosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
        
        <section className="mb-6 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-left">1. Aceptación de Términos</h2>
          <p>Al unirte a WPLab, estás entrando a una comunidad de aprendizaje revolucionaria. Estos términos no son solo reglas, son nuestro compromiso mutuo de crear una experiencia educativa única y transformadora.</p>
        </section>
        
        <section className="mb-6 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-left">2. Uso de la Plataforma</h2>
          <p>WPLab es más que una plataforma: somos un ecosistema de crecimiento profesional. Cada acción que realizas aquí debe reflejar integridad, respeto y pasión por el aprendizaje.</p>
        </section>
        
        <section className="mb-6 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-left">3. Propiedad Intelectual</h2>
          <p>Cada recurso en WPLab es una obra maestra educativa. Nuestro contenido está protegido por derechos de autor para preservar la creatividad y el valor de nuestros creadores de contenido.</p>
        </section>
        
        <section className="mb-6 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-left">4. Limitación de Responsabilidad</h2>
          <p>En WPLab, nuestra misión es tu éxito. Aunque no podemos garantizar resultados específicos, nos comprometemos a brindarte las mejores herramientas y recursos para tu desarrollo profesional.</p>
        </section>
        
        <p className="text-sm text-gray-600">Última actualización: Mayo 2025</p>
      </main>
      <LandingFooter />
    </div>
  )
}
