import { createLazyFileRoute } from '@tanstack/react-router'
import { ForbiddenPage } from '@/pages/errors/forbidden'

export const Route = createLazyFileRoute('/_authenticated/errors/403')({
  component: ForbiddenPage,
})
