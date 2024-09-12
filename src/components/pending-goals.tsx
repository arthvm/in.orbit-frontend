import { useQuery } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { getPendingGoals } from '../http/get-pending-goals'
import { OutlineButton } from './ui/outline-button'

export function PendingGoals() {
  const { data } = useQuery({
    queryKey: ['pendingGoals'],
    queryFn: getPendingGoals,
  })

  if (!data) {
    return null
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {data.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
