import { createLazyFileRoute } from '@tanstack/react-router'
import { NotificationsPage } from '@/pages/notifications/notifications'

export const Route = createLazyFileRoute('/_authenticated/notifications')({
  component: NotificationsPage,
})
