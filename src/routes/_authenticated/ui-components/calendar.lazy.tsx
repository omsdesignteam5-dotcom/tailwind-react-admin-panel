import { createLazyFileRoute } from '@tanstack/react-router'
import { CalendarPage } from '@/pages/ui-components/calendar-page'

export const Route = createLazyFileRoute('/_authenticated/ui-components/calendar')({
  component: CalendarPage,
})
