import { useEffect, useState } from 'react'
import { useLocation } from '@tanstack/react-router'
import { Menu, PanelLeftOpen, PanelLeftClose } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/context/sidebar-provider'
import { sidebarData } from './sidebar-data'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { SettingsDrawer } from '@/components/settings-drawer'
import { Notifications } from '@/components/notifications'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface HeaderProps {
  title?: string
}

export function Header({ title }: HeaderProps) {
  const { layout, isOpen, toggle, isMobile } = useSidebar()
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(
        (document.body.scrollTop || document.documentElement.scrollTop) > 10
      )
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  const isExpanded = layout === 'expanded' || (layout === 'full' && isOpen)

  let activeTitle = title
  if (!activeTitle) {
    for (const group of sidebarData.navGroups) {
      if (activeTitle) break
      for (const item of group.items) {
        if (item.url === pathname) {
          activeTitle = item.title
          break
        }
        if (item.items) {
          const sub = item.items.find((sub) => sub.url === pathname)
          if (sub) {
            activeTitle = sub.title
            break
          }
        }
      }
    }
  }

  return (
    <>
      <div className='h-14 shrink-0 transition-all duration-200 ease-in-out' />
      <header
        className={cn(
          'fixed top-0 right-0 z-40 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-lg transition-all duration-200 ease-in-out',
          scrolled && 'shadow-sm',
          isMobile || layout === 'full' 
            ? 'left-0' 
            : layout === 'expanded' 
              ? 'left-(--sidebar-width)' 
              : 'left-(--sidebar-width-collapsed)'
        )}
      >
      {/* Sidebar Toggle */}
      <Button
        variant='ghost'
        size='icon'
        className='md:hidden'
        onClick={toggle}
      >
        <Menu className='h-5 w-5' />
        <span className='sr-only'>Toggle sidebar</span>
      </Button>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='hidden md:flex text-muted-foreground'
            onClick={toggle}
          >
            {isExpanded ? <PanelLeftClose className='h-5 w-5' />  : <PanelLeftOpen className='h-5 w-5' />}
            <span className='sr-only'>Toggle sidebar</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          {isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        </TooltipContent>
      </Tooltip>

      <Separator orientation='vertical' className='h-6' />

      {/* Page title */}
      {activeTitle && (
        <h1 className='text-sm font-semibold text-foreground truncate ml-2'>{activeTitle}</h1>
      )}

      {/* Spacer */}
      <div className='flex-1' />

      {/* Right side icons */}
      <div className='flex items-center gap-1'>
        <Notifications />
        <ThemeSwitch />
        <SettingsDrawer />
        <ProfileDropdown />
      </div>
    </header>
    </>
  )
}
