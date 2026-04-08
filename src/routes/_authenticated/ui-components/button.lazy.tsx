import { createLazyFileRoute } from '@tanstack/react-router'
import { ButtonPage } from '@/pages/ui-components/button'

export const Route = createLazyFileRoute('/_authenticated/ui-components/button')({
  component: ButtonPage,
})
