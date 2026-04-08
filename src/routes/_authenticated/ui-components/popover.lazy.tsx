import { createLazyFileRoute } from '@tanstack/react-router'
import { PopoverPage } from '@/pages/ui-components/popover'

export const Route = createLazyFileRoute('/_authenticated/ui-components/popover')({
  component: PopoverPage,
})
