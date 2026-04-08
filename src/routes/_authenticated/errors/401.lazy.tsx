import { createLazyFileRoute } from '@tanstack/react-router'
import { UnauthorizedPage } from '@/pages/errors/unauthorized'

export const Route = createLazyFileRoute('/_authenticated/errors/401')({
  component: UnauthorizedPage,
})
