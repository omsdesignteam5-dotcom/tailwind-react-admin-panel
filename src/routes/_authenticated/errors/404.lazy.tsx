import { createLazyFileRoute } from '@tanstack/react-router'
import { NotFoundPage } from '@/pages/errors/not-found'

export const Route = createLazyFileRoute('/_authenticated/errors/404')({
  component: NotFoundPage,
})
