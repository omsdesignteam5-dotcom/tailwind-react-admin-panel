import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export default function ToastPositions() {
  const { toast } = useToast()

  const positions = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ] as const

  return (
    <div className='grid grid-cols-2 gap-2 sm:grid-cols-3'>
      {positions.map((pos) => (
        <Button
          key={pos}
          variant='outline'
          onClick={() =>
            toast({
              title: `Position: ${pos}`,
              description: `This toast is appearing at ${pos}.`,
              position: pos,
            })
          }
          className='capitalize'
        >
          {pos.replace('-', ' ')}
        </Button>
      ))}
    </div>
  )
}
