import { createLazyFileRoute } from '@tanstack/react-router'
import { SeparatorPage } from '@/pages/ui-components/separator'

export const Route = createLazyFileRoute('/_authenticated/ui-components/separator')({
  component: SeparatorPage,
})
