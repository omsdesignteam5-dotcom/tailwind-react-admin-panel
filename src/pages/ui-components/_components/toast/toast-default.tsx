import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export default function ToastDefault() {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() =>
        toast({
          title: 'Scheduled: Catch up',
          description: 'Friday, February 10, 2025 at 5:57 PM',
        })
      }
    >
      Show Toast
    </Button>
  )
}
