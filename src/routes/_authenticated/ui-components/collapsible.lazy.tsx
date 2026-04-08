import { createLazyFileRoute } from '@tanstack/react-router'
import { CollapsiblePage } from '@/pages/ui-components/collapsible'

export const Route = createLazyFileRoute('/_authenticated/ui-components/collapsible')({
  component: CollapsiblePage,
})
