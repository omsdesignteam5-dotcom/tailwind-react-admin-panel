import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

export default function ToastWithAction() {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() =>
        toast({
          title: 'Event Created',
          description: 'Your event has been scheduled.',
          action: (
            <ToastAction altText='Undo'>Undo</ToastAction>
          ),
        })
      }
    >
      Toast with Action
    </Button>
  )
}
