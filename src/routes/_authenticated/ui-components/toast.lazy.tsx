import { createLazyFileRoute } from '@tanstack/react-router'
import { ToastPage } from '@/pages/ui-components/toast'

export const Route = createLazyFileRoute('/_authenticated/ui-components/toast')({
  component: ToastPage,
})
