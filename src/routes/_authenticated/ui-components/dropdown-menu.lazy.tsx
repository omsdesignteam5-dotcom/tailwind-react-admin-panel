import { createLazyFileRoute } from '@tanstack/react-router'
import { DropdownMenuPage } from '@/pages/ui-components/dropdown-menu'

export const Route = createLazyFileRoute('/_authenticated/ui-components/dropdown-menu')({
  component: DropdownMenuPage,
})
