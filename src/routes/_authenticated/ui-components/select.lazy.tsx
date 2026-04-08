import { createLazyFileRoute } from '@tanstack/react-router'
import { SelectPage } from '@/pages/ui-components/select'

export const Route = createLazyFileRoute('/_authenticated/ui-components/select')({
  component: SelectPage,
})
