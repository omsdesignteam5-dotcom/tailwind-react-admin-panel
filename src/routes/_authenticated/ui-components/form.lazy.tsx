import { createLazyFileRoute } from '@tanstack/react-router'
import { FormPage } from '@/pages/ui-components/form'

export const Route = createLazyFileRoute('/_authenticated/ui-components/form')({
  component: FormPage,
})
