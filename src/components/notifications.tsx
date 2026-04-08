import { Bell, ClipboardList, GraduationCap, Users, Clock } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

const notifications = [
  {
    id: 1,
    title: 'New Student Enrollment',
    description: 'Alice Robinson has completed her enrollment for Grade 9 - Section C.',
    time: '2 mins ago',
    read: false,
    icon: Users,
    color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/50',
  },
  {
    id: 2,
    title: 'Grade Submission Pending',
    description: 'Math Teacher (Mr. Thompson) has uploaded mid-term results for Grade 11.',
    time: '45 mins ago',
    read: false,
    icon: GraduationCap,
    color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50',
  },
  {
    id: 3,
    title: 'Attendance Warning',
    description: 'Attendance below 75% for Benjamin Lee from the Sports Department.',
    time: '1 hour ago',
    read: true,
    icon: ClipboardList,
    color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/50',
  },
  {
    id: 4,
    title: 'Library Overdue',
    description: '"Advanced Physics Vol 2" is overdue for return by Michael Smith.',
    time: '5 hours ago',
    read: true,
    icon: Clock,
    color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/50',
  },
]

export function Notifications() {
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='relative text-muted-foreground hover:text-foreground rounded-full'
        >
          <Bell className='h-5 w-5' />
          {unreadCount > 0 && (
            <Badge
              className='absolute -top-0.5 -right-0.5 h-4 min-w-4 flex items-center justify-center p-0 text-[10px] bg-rose-500 hover:bg-rose-600'
            >
              {unreadCount}
            </Badge>
          )}
          <span className='sr-only'>Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80 p-0 overflow-hidden' align='end' sideOffset={8}>
        <div className='flex items-center justify-between px-4 py-3 border-b bg-muted/50'>
          <h2 className='text-sm font-semibold'>Notifications</h2>
          <Button variant='ghost' size='sm' className='h-8 text-xs text-primary hover:text-primary/80 px-2'>
            Mark all read
          </Button>
        </div>
        
        <ScrollArea className='h-[350px]'>
          <div className='flex flex-col'>
            {notifications.map((notification, index) => (
              <div
                key={notification.id}
                className={cn(
                  'relative flex gap-3 p-4 transition-colors hover:bg-muted/50 cursor-pointer',
                  !notification.read && 'bg-primary/5',
                  index !== notifications.length - 1 && 'border-b border-border/50'
                )}
              >
                {!notification.read && (
                  <div className='absolute left-1.5 top-3 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sky-500' />
                )}
                
                <div className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
                  notification.color
                )}>
                  <notification.icon className='h-5 w-5' />
                </div>
                
                <div className='flex flex-col gap-1'>
                  <div className='flex justify-between items-start gap-2'>
                    <h3 className='text-xs font-semibold leading-none'>
                      {notification.title}
                    </h3>
                  </div>
                  <p className='text-xs text-muted-foreground leading-normal line-clamp-2'>
                    {notification.description}
                  </p>
                  <span className='text-[10px] text-muted-foreground mt-1'>
                    {notification.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className='p-2 border-t bg-muted/30'>
          <Button variant='ghost' className='w-full h-8 text-xs text-muted-foreground hover:text-foreground'>
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
