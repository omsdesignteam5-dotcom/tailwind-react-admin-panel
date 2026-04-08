import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export default function ToastCustomDuration() {
  const { toast } = useToast()

  return (
    <div className='flex gap-2'>
      <Button
        variant='outline'
        onClick={() =>
          toast({
            title: 'Quick Toast',
            description: 'This will disappear in 2 seconds.',
            duration: 2000,
          })
        }
      >
        2 Seconds
      </Button>
      <Button
        variant='outline'
        onClick={() =>
          toast({
            title: 'Persistent Toast',
            description: 'This will stay until you close it.',
            duration: 0,
          })
        }
      >
        Infinite (0)
      </Button>
    </div>
  )
}
