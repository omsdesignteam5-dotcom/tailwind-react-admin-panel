import { Link } from '@tanstack/react-router'
import { Webhook, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MaintenanceErrorPage() {
  return (
    <div className='flex h-[80vh] flex-col items-center justify-center gap-4 text-center'>
      <div className='rounded-full bg-muted p-4'>
        <Webhook className='h-10 w-10 text-muted-foreground' />
      </div>
      <div>
        <h2 className='mt-4 text-3xl font-bold tracking-tight text-foreground'>
          503 - Service Unavailable
        </h2>
        <p className='mt-2 text-muted-foreground max-w-[500px]'>
          The server is currently unable to handle the request due to temporary overloading or maintenance. Please check back later.
        </p>
      </div>
      <Button asChild className='mt-6' size='lg'>
        <Link to='/'>
          <Home className='mr-2 h-4 w-4' />
          Return to Dashboard
        </Link>
      </Button>
    </div>
  )
}
