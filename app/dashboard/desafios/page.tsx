import { ChallengesList } from "@/components/challenges-list"
import { ChallengesHeader } from "@/components/challenges-header"

export default function ChallengesPage() {
  return (
    <div className="space-y-6">
      <ChallengesHeader />
      <ChallengesList />
    </div>
  )
}
