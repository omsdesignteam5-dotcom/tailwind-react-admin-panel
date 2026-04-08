import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ButtonSizes() {
  return (
    <>
      <Button size='sm'>Small</Button>
      <Button size='default'>Default</Button>
      <Button size='lg'>Large</Button>
      <Button size='icon'>
        <Plus className='h-4 w-4' />
      </Button>
    </>
  )
}
