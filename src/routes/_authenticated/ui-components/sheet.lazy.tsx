import { createLazyFileRoute } from '@tanstack/react-router'
import { SheetPage } from '@/pages/ui-components/sheet'

export const Route = createLazyFileRoute('/_authenticated/ui-components/sheet')({
  component: SheetPage,
})
