import { Button } from '@/components/ui/button'

export default function ButtonDisabled() {
  return (
    <>
      <Button disabled>Default</Button>
      <Button variant='secondary' disabled>
        Secondary
      </Button>
      <Button variant='destructive' disabled>
        Destructive
      </Button>
      <Button variant='outline' disabled>
        Outline
      </Button>
      <Button variant='ghost' disabled>
        Ghost
      </Button>
    </>
  )
}
