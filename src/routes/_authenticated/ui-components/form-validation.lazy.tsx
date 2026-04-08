import { createLazyFileRoute } from '@tanstack/react-router'
import { FormValidationPage } from '@/pages/ui-components/form-validation'

export const Route = createLazyFileRoute('/_authenticated/ui-components/form-validation')({
  component: FormValidationPage,
})
