import { createLazyFileRoute } from '@tanstack/react-router'
import { BadgePage } from '@/pages/ui-components/badge'

export const Route = createLazyFileRoute('/_authenticated/ui-components/badge')({
  component: BadgePage,
})
