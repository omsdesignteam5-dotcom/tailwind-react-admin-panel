import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/context/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='system'>
      <TooltipProvider delayDuration={0}>
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
)
