import { Link } from '@tanstack/react-router'
import { ServerCrash, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function InternalServerErrorPage() {
  return (
    <div className='flex h-[80vh] flex-col items-center justify-center gap-4 text-center'>
      <div className='rounded-full bg-destructive/10 p-4'>
        <ServerCrash className='h-10 w-10 text-destructive' />
      </div>
      <div>
        <h2 className='mt-4 text-3xl font-bold tracking-tight text-foreground'>
          500 - Internal Server Error
        </h2>
        <p className='mt-2 text-muted-foreground max-w-[500px]'>
          Oops! Something went wrong on our end. We are currently trying to fix the problem.
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
