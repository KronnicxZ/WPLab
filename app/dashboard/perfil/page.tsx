import { UserProfileForm } from "@/components/user-profile-form"
import { UserStats } from "@/components/user-stats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { UserSecurity } from "@/components/user-security"
import { UserAchievements } from "@/components/user-achievements"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Perfil</h1>
        <p className="text-muted-foreground">Gestiona tu información personal y configura tus preferencias.</p>
      </div>
      <Separator />
      <Tabs defaultValue="perfil" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="estadisticas">Estadísticas</TabsTrigger>
          <TabsTrigger value="logros">Logros</TabsTrigger>
          <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
        </TabsList>
        <TabsContent value="perfil" className="mt-6">
          <UserProfileForm />
        </TabsContent>
        <TabsContent value="estadisticas" className="mt-6">
          <UserStats />
        </TabsContent>
        <TabsContent value="logros" className="mt-6">
          <UserAchievements />
        </TabsContent>
        <TabsContent value="seguridad" className="mt-6">
          <UserSecurity />
        </TabsContent>
      </Tabs>
    </div>
  )
}
