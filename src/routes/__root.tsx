import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { NetworkStatus } from '@/components/network-status'
import { Toaster } from '@/components/ui/toaster'
import { NotFoundPage } from '@/pages/errors/not-found'
import { SplashScreen } from '@/components/splash-screen'

function RootComponent() {
  return (
    <>
      <SplashScreen />
      <NetworkStatus />
      <Outlet />
      {import.meta.env.MODE === 'development' && (
        <TanStackRouterDevtools position='bottom-right' />
      )}
      <Toaster />
    </>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundPage,
})

