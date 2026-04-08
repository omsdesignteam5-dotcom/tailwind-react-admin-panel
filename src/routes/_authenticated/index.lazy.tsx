import { createLazyFileRoute } from '@tanstack/react-router'
import { DashboardPage } from '@/pages/dashboard/dashboard'

export const Route = createLazyFileRoute('/_authenticated/')({
  component: DashboardPage,
})
