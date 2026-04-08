import { createLazyFileRoute } from '@tanstack/react-router'
import { InternalServerErrorPage } from '@/pages/errors/internal-server-error'

export const Route = createLazyFileRoute('/_authenticated/errors/500')({
  component: InternalServerErrorPage,
})
