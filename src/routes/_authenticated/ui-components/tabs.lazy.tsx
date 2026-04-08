import { createLazyFileRoute } from '@tanstack/react-router'
import { TabsPage } from '@/pages/ui-components/tabs'

export const Route = createLazyFileRoute('/_authenticated/ui-components/tabs')({
  component: TabsPage,
})
