import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

export default function SheetDefault() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className='py-4'>
          <p className='text-sm text-muted-foreground'>
            Sheet body content goes here...
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant='outline'>Cancel</Button>
          </SheetClose>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
