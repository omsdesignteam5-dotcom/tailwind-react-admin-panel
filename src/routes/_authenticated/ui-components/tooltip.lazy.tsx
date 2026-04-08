import { createLazyFileRoute } from '@tanstack/react-router'
import { TooltipPage } from '@/pages/ui-components/tooltip'

export const Route = createLazyFileRoute('/_authenticated/ui-components/tooltip')({
  component: TooltipPage,
})
