import { Outlet } from '@tanstack/react-router'
import { SidebarProvider } from '@/context/sidebar-provider'
import { Sidebar } from './sidebar'
import { Header } from './header'

export function AuthenticatedLayout() {
  return (
    <SidebarProvider>
      <div className='flex min-h-svh w-full'>
        <Sidebar />
        <div className='flex flex-1 flex-col min-w-0'>
          <Header />
          <main className='flex-1 p-4'>
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
