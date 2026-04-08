import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export default function ToastVariants() {
  const { toast } = useToast()

  return (
    <div className='flex flex-wrap gap-2'>
      <Button
        variant='outline'
        onClick={() =>
          toast({
            title: 'Default Toast',
            description: 'This is a default toast notification.',
          })
        }
      >
        Default
      </Button>
      <Button
        variant='outline'
        onClick={() =>
          toast({
            variant: 'success',
            title: 'Success!',
            description: 'Your changes have been saved successfully.',
          })
        }
      >
        Success
      </Button>
      <Button
        variant='outline'
        onClick={() =>
          toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Something went wrong. Please try again.',
          })
        }
      >
        Destructive
      </Button>
    </div>
  )
}
