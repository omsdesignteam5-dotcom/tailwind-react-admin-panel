import { createLazyFileRoute } from '@tanstack/react-router'
import { RadioGroupPage } from '@/pages/ui-components/radio-group'

export const Route = createLazyFileRoute('/_authenticated/ui-components/radio-group')({
  component: RadioGroupPage,
})
