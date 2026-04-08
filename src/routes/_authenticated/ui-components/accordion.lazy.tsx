import { createLazyFileRoute } from '@tanstack/react-router'
import { AccordionPage } from '@/pages/ui-components/accordion'

export const Route = createLazyFileRoute('/_authenticated/ui-components/accordion')({
  component: AccordionPage,
})
