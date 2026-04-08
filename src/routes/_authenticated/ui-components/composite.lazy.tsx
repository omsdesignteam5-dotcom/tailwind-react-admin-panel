import { createLazyFileRoute } from '@tanstack/react-router'
import { CompositePage } from '@/pages/ui-components/composite'

export const Route = createLazyFileRoute('/_authenticated/ui-components/composite')({
  component: CompositePage,
})
