import { createLazyFileRoute } from '@tanstack/react-router'
import { BlankPage } from '@/pages/starter/blank-page'

export const Route = createLazyFileRoute('/_authenticated/blank-page')({
  component: BlankPage,
})
