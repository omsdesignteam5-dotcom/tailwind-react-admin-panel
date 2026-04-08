import { createLazyFileRoute } from '@tanstack/react-router'
import { SwitchPage } from '@/pages/ui-components/switch'

export const Route = createLazyFileRoute('/_authenticated/ui-components/switch')({
  component: SwitchPage,
})
