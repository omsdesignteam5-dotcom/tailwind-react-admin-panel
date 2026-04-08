import { createLazyFileRoute } from '@tanstack/react-router'
import { AppearancePage } from '@/pages/settings/appearance'

export const Route = createLazyFileRoute('/_authenticated/settings/appearance')({
  component: AppearancePage,
})
