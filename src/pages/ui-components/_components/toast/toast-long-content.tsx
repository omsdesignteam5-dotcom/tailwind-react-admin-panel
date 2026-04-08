import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export default function ToastLongContent() {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() =>
        toast({
          title: 'Long Content Notification',
          description: 'This is a much longer toast description to demonstrate how the layout handles multiple lines of text. We want to make sure the close button remains accessible and the text wraps correctly without breaking the UI.',
        })
      }
    >
      Show Long Toast
    </Button>
  )
}
