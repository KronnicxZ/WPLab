import { LandingHeader } from "@/components/landing-header"
import { LandingFooter } from "@/components/landing-footer"

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
        
        <section className="mb-6 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-left">1. Información que Recopilamos</h2>
          <p>En WPLab, la privacidad de nuestros usuarios es nuestra prioridad número uno. Cada dato que recopilamos está protegido con los más altos estándares de seguridad digital.</p>
        </section>
        
        <section className="mb-6 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-left">2. Uso de la Información</h2>
          <p>Transformamos cada fragmento de información en una herramienta para potenciar tu experiencia de aprendizaje. Nuestro objetivo es crear una journey de aprendizaje única y personalizada.</p>
        </section>
        
        <section className="mb-6 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-left">3. Protección de Datos</h2>
          <p>Nuestra infraestructura de seguridad es como un castillo digital: múltiples capas de protección, encriptación de última generación y monitoreo constante para garantizar la integridad de tus datos.</p>
        </section>
        
        <section className="mb-6 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-left">4. Tus Derechos</h2>
          <p>Tu información es tuya. En WPLab, te damos el control total: accede, modifica o elimina tus datos con total transparencia y facilidad.</p>
        </section>
        
        <p className="text-sm text-gray-600">Última actualización: Mayo 2025</p>
      </main>
      <LandingFooter />
    </div>
  )
}
