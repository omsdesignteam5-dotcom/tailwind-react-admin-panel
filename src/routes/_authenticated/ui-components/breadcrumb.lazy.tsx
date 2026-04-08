import { createLazyFileRoute } from '@tanstack/react-router'
import { BreadcrumbPage } from '@/pages/ui-components/breadcrumb'

export const Route = createLazyFileRoute('/_authenticated/ui-components/breadcrumb')({
  component: BreadcrumbPage,
})
