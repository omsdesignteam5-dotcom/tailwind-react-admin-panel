import { createLazyFileRoute } from '@tanstack/react-router'
import { DataTablePage } from '@/pages/ui-components/data-table-page'

export const Route = createLazyFileRoute('/_authenticated/ui-components/data-table')({
  component: DataTablePage,
})
