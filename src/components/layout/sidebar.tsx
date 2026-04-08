import { Command } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidebar, type SidebarTheme } from '@/context/sidebar-provider'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet'
import { SidebarNav } from './sidebar-nav'
import { sidebarData } from './sidebar-data'

export const SIDEBAR_THEME_CLASSES: Record<SidebarTheme, string> = {
  default: 'bg-sidebar',
  green: 'sidebar-colored dark bg-emerald-600 border-emerald-600',
  cyan: 'sidebar-colored dark bg-cyan-700 border-cyan-600',
  violet: 'sidebar-colored dark bg-violet-800 border-violet-600',
  amber: 'sidebar-colored dark bg-amber-700 border-amber-600',
  frost: 'sidebar-colored dark bg-slate-800 border-slate-600',
}

export function Sidebar() {
  const { layout, isOpen, isMobile, setOpen, sidebarTheme } = useSidebar()

  // Mobile or "Full" mode: render as sheet overlay
  if (isMobile || layout === 'full') {
    return (
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent side='left' className={cn('w-[280px] p-0', SIDEBAR_THEME_CLASSES[sidebarTheme])}>
          <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
          <div className='flex h-full flex-col'>
            <SidebarHeader expanded />
            <ScrollArea className='flex-1'>
              <SidebarNav groups={sidebarData.navGroups} />
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  // Desktop: collapsible sidebar
  return (
    <>
      <div
        className={cn(
          'shrink-0 bg-transparent transition-[width] duration-200 ease-in-out',
          layout === 'expanded' ? 'w-(--sidebar-width)' : 'w-(--sidebar-width-collapsed)'
        )}
      />
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 flex flex-col border-r border-sidebar-border transition-[width] duration-200 ease-in-out',
          SIDEBAR_THEME_CLASSES[sidebarTheme],
          layout === 'expanded' ? 'w-(--sidebar-width)' : 'w-(--sidebar-width-collapsed)'
        )}
      >
        <SidebarHeader expanded={layout === 'expanded'} />
        <ScrollArea className='flex-1'>
          <SidebarNav groups={sidebarData.navGroups} />
        </ScrollArea>
      </aside>
    </>
  )
}

function SidebarHeader({ expanded }: { expanded: boolean }) {
  return (
    <div
      className={cn(
        'flex h-14 items-center border-b border-sidebar-border px-3 transition-all duration-300 ease-in-out',
        expanded ? 'gap-3' : 'gap-0'
      )}
    >
      <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground'>
        <Command className='h-4 w-4' />
      </div>
      <div
        className={cn(
          'flex flex-col overflow-hidden transition-all duration-300 ease-in-out',
          expanded ? 'w-32 opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-2 invisible'
        )}
      >
        <span className='text-sm font-semibold text-sidebar-foreground whitespace-nowrap'>
          Admin Panel
        </span>
        <span className='text-[11px] text-muted-foreground whitespace-nowrap'>
          Dashboard
        </span>
      </div>
    </div>
  )
}
