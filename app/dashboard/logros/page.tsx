import { AchievementsGrid } from "@/components/achievements-grid"
import { AchievementsHeader } from "@/components/achievements-header"

export default function AchievementsPage() {
  return (
    <div className="space-y-6">
      <AchievementsHeader />
      <AchievementsGrid />
    </div>
  )
}
