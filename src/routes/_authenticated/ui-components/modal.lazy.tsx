import { createLazyFileRoute } from '@tanstack/react-router'
import { ModalPage } from '@/pages/ui-components/modal'

export const Route = createLazyFileRoute('/_authenticated/ui-components/modal')({
  component: ModalPage,
})
