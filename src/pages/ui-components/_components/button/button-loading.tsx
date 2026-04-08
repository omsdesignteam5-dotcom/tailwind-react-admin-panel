import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ButtonLoading() {
  return (
    <>
      <Button disabled>
        <Loader2 className='h-4 w-4 animate-spin' />
        Please wait
      </Button>
      <Button variant='outline' disabled>
        <Loader2 className='h-4 w-4 animate-spin' />
        Saving...
      </Button>
    </>
  )
}
