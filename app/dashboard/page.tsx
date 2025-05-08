import { DashboardOverview } from "@/components/dashboard-overview"
import { ModulesList } from "@/components/modules-list"
import { DailyChallenge } from "@/components/daily-challenge"
import { Achievements } from "@/components/achievements"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <DashboardOverview />
        <DailyChallenge />
      </div>
      <ModulesList />
      <Achievements />
    </div>
  )
}
