import { createLazyFileRoute } from '@tanstack/react-router'
import { DatePickerPage } from '@/pages/ui-components/date-picker-page'

export const Route = createLazyFileRoute('/_authenticated/ui-components/date-picker')({
  component: DatePickerPage,
})
