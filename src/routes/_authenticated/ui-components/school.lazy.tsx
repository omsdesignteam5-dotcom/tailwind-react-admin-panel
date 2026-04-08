import { createLazyFileRoute } from '@tanstack/react-router'
import { SchoolComponentsPage } from '@/pages/ui-components/school-components'

export const Route = createLazyFileRoute('/_authenticated/ui-components/school')({
  component: SchoolComponentsPage,
})
