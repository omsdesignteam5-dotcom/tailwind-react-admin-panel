import { createLazyFileRoute } from '@tanstack/react-router'
import { CheckboxPage } from '@/pages/ui-components/checkbox'

export const Route = createLazyFileRoute('/_authenticated/ui-components/checkbox')({
  component: CheckboxPage,
})
