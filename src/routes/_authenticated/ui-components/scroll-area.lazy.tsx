import { createLazyFileRoute } from '@tanstack/react-router'
import { ScrollAreaPage } from '@/pages/ui-components/scroll-area'

export const Route = createLazyFileRoute('/_authenticated/ui-components/scroll-area')({
  component: ScrollAreaPage,
})
