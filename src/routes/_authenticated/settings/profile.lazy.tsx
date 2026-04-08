import { createLazyFileRoute } from '@tanstack/react-router'
import { ProfilePage } from '@/pages/settings/profile/profile-page'

export const Route = createLazyFileRoute('/_authenticated/settings/profile')({
  component: ProfilePage,
})
