import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { mockNotifications } from '@/components/notifications'

export function NotificationsPage() {
  return (
    <div className='w-full space-y-6'>
      <div className='flex items-center justify-between w-full'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight text-foreground'>
            Notifications
          </h2>
          <p className='text-muted-foreground mt-1'>
            View and manage all your recent notifications.
          </p>
        </div>
        <Button variant='outline'>Mark all as read</Button>
      </div>

      <div className='flex justify-center w-full'>
        <div className='flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden w-full max-w-4xl'>
          {mockNotifications.map((notification, index) => (
          <div
            key={notification.id}
            className={cn(
              'relative flex gap-4 p-5 transition-colors hover:bg-muted/50 cursor-pointer',
              !notification.read && 'bg-primary/5',
              index !== mockNotifications.length - 1 && 'border-b border-border/50'
            )}
          >
            <div className={cn(
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
              notification.color
            )}>
              <notification.icon className='h-6 w-6' />
            </div>
            
            <div className='flex flex-col gap-1 w-full'>
              <div className='flex items-start justify-between gap-2 max-w-full'>
                <div className='flex items-center gap-2'>
                  <h3 className='text-sm font-semibold leading-none'>
                    {notification.title}
                  </h3>
                  {!notification.read && (
                    <Badge className='h-5 px-1.5 text-[10px] bg-primary'>New</Badge>
                  )}
                </div>
                <span className='text-xs text-muted-foreground whitespace-nowrap hidden sm:inline-block'>
                  {notification.time}
                </span>
              </div>
              <p className='text-sm text-muted-foreground leading-relaxed mt-1'>
                {notification.description}
              </p>
              <span className='text-xs text-muted-foreground mt-1 sm:hidden'>
                {notification.time}
              </span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
