import { LandingHero } from "@/components/landing-hero"
import { LandingFeatures } from "@/components/landing-features"
import { LandingFooter } from "@/components/landing-footer"
import { LandingHeader } from "@/components/landing-header"
import { LandingModules } from "@/components/landing-modules"
import { LandingAbout } from "@/components/landing-about"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <main className="flex-1">
        <LandingHero />
        <LandingFeatures />
        <LandingModules />
        <LandingAbout />
      </main>
      <LandingFooter />
    </div>
  )
}
