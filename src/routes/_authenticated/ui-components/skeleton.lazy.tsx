import { createLazyFileRoute } from '@tanstack/react-router'
import { SkeletonPage } from '@/pages/ui-components/skeleton'

export const Route = createLazyFileRoute('/_authenticated/ui-components/skeleton')({
  component: SkeletonPage,
})
