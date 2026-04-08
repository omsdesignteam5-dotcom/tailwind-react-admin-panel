import { createLazyFileRoute } from '@tanstack/react-router'
import { CardPage } from '@/pages/ui-components/card'

export const Route = createLazyFileRoute('/_authenticated/ui-components/card')({
  component: CardPage,
})
