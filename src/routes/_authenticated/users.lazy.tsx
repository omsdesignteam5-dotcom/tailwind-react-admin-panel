import { createLazyFileRoute } from '@tanstack/react-router'
import { UsersPage } from '@/pages/users/users-page'

export const Route = createLazyFileRoute('/_authenticated/users')({
  component: UsersPage,
})
