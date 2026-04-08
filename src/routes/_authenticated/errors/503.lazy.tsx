import { createLazyFileRoute } from '@tanstack/react-router'
import { MaintenanceErrorPage } from '@/pages/errors/maintenance-error'

export const Route = createLazyFileRoute('/_authenticated/errors/503')({
  component: MaintenanceErrorPage,
})
