import { createLazyFileRoute } from '@tanstack/react-router'
import { AlertDialogPage } from '@/pages/ui-components/alert-dialog'

export const Route = createLazyFileRoute('/_authenticated/ui-components/alert-dialog')({
  component: AlertDialogPage,
})
