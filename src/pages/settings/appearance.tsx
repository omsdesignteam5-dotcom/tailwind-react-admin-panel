import { Monitor, Moon, Sun, PanelLeft, PanelLeftClose } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/context/theme-provider'
import { useSidebar } from '@/context/sidebar-provider'
import { Button } from '@/components/ui/button'

export function AppearancePage() {
  const { resetTheme } = useTheme()
  const { setLayout } = useSidebar()

  const setSidebarTheme = useSidebar().setSidebarTheme

  const handleReset = () => {
    setLayout('expanded')
    setSidebarTheme('default')
    resetTheme()
  }

  return (
    <div className='max-w-full space-y-6'>
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Appearance Settings
        </h2>
        <p className='text-muted-foreground mt-1'>
          Customize the appearance and layout of the admin panel.
        </p>
      </div>

      <div className='flex flex-col gap-8 rounded-xl border border-border bg-card p-6 shadow-sm'>
        <ThemeConfig />
        <SidebarThemeConfig />
        <LayoutConfig />
        
        <div className='pt-4 border-t border-border'>
          <Button variant='destructive' onClick={handleReset}>
            Reset to Defaults
          </Button>
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ title, description }: { title: string; description?: string }) {
  return (
    <div className='mb-4'>
      <h3 className='text-base font-semibold text-foreground'>{title}</h3>
      {description && (
        <p className='text-sm text-muted-foreground'>{description}</p>
      )}
    </div>
  )
}

function ThemeConfig() {
  const { theme, setTheme } = useTheme()

  const options = [
    { value: 'light' as const, label: 'Light', icon: Sun },
    { value: 'dark' as const, label: 'Dark', icon: Moon },
    { value: 'system' as const, label: 'System', icon: Monitor },
  ]

  return (
    <div>
      <SectionTitle 
        title='Theme' 
        description='Select the color theme for the dashboard.' 
      />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl'>
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setTheme(opt.value)}
            className={cn(
              'flex flex-col items-center gap-3 rounded-lg border-2 p-4 text-sm font-medium transition-all hover:border-primary/50',
              theme === opt.value
                ? 'border-primary bg-accent text-accent-foreground shadow-sm'
                : 'border-border text-muted-foreground bg-background hover:bg-accent/50'
            )}
          >
            <opt.icon className='h-6 w-6' />
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function LayoutConfig() {
  const { layout, setLayout } = useSidebar()

  const options = [
    { value: 'expanded' as const, label: 'Expanded', icon: PanelLeft },
    { value: 'compact' as const, label: 'Compact', icon: PanelLeftClose },
    { value: 'full' as const, label: 'Full Layout', icon: PanelLeftClose }, // Using same icon, or can use another like Menu
  ]

  return (
    <div>
      <SectionTitle 
        title='Layout' 
        description='Choose whether the sidebar should be expanded or collapsed by default.'
      />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl'>
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => setLayout(opt.value)}
            className={cn(
              'flex flex-col items-center gap-3 rounded-lg border-2 p-4 text-sm font-medium transition-all hover:border-primary/50',
              layout === opt.value
                ? 'border-primary bg-accent text-accent-foreground shadow-sm'
                : 'border-border text-muted-foreground bg-background hover:bg-accent/50'
            )}
          >
            <opt.icon className='h-6 w-6' />
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function SidebarThemeConfig() {
  const { sidebarTheme, setSidebarTheme } = useSidebar()

  const options = [
    { value: 'default' as const, label: 'Default', color: 'bg-stone-200 dark:bg-stone-800', activeText: '', activeBorder: 'border-primary' },
    { value: 'matrix' as const, label: 'Matrix', color: 'bg-emerald-500', activeText: 'text-emerald-500', activeBorder: 'border-emerald-500' },
    { value: 'cyan' as const, label: 'Cyan', color: 'bg-cyan-500', activeText: 'text-cyan-500', activeBorder: 'border-cyan-500' },
    { value: 'violet' as const, label: 'Violet', color: 'bg-violet-500', activeText: 'text-violet-500', activeBorder: 'border-violet-500' },
    { value: 'amber' as const, label: 'Amber', color: 'bg-amber-500', activeText: 'text-amber-500', activeBorder: 'border-amber-500' },
    { value: 'frost' as const, label: 'Frost', color: 'bg-slate-500', activeText: 'text-slate-500', activeBorder: 'border-slate-500' },
  ]

  return (
    <div>
      <SectionTitle 
        title='Sidebar Theme' 
        description='Choose the background color of the sidebar menu.'
      />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl'>
        {options.map((opt) => {
          const isActive = sidebarTheme === opt.value
          return (
            <button
              key={opt.value}
              onClick={() => setSidebarTheme(opt.value)}
              className={cn(
                'flex flex-col items-center gap-3 rounded-lg border-2 p-4 text-sm font-medium transition-all hover:bg-accent/50',
                isActive
                  ? cn('bg-accent/20 shadow-sm', opt.activeBorder, opt.activeText)
                  : 'border-border text-muted-foreground bg-background'
              )}
            >
              <div 
                className={cn(
                  "flex items-center justify-center rounded-full w-5 h-5 ring-offset-2 ring-offset-background",
                  isActive ? cn("ring-2", opt.activeBorder) : "",
                  opt.color
                )} 
              >
                {isActive && (
                  <div className={cn("rounded-full w-2 h-2 ring-1 ring-offset-1 ring-offset-background", opt.activeBorder, opt.color)} />
                )}
              </div>
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

