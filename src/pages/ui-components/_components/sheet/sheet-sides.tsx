import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function SheetSides() {
  const [sideOpen, setSideOpen] = useState<
    'top' | 'right' | 'bottom' | 'left' | null
  >(null)

  return (
    <>
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Sheet
          key={side}
          open={sideOpen === side}
          onOpenChange={(open) => setSideOpen(open ? side : null)}
        >
          <SheetTrigger asChild>
            <Button variant='outline' className='capitalize'>
              {side}
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className='capitalize'>{side} Sheet</SheetTitle>
              <SheetDescription>
                This sheet slides in from the {side}.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </>
  )
}
