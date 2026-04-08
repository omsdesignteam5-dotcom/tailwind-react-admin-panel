import { createLazyFileRoute } from '@tanstack/react-router'
import { ProgressPage } from '@/pages/ui-components/progress'

export const Route = createLazyFileRoute('/_authenticated/ui-components/progress')({
  component: ProgressPage,
})
