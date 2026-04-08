import { createLazyFileRoute } from '@tanstack/react-router'
import { AvatarPage } from '@/pages/ui-components/avatar'

export const Route = createLazyFileRoute('/_authenticated/ui-components/avatar')({
  component: AvatarPage,
})
