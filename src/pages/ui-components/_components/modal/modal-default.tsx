import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/ui/modal'

export default function ModalDefault() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </ModalTrigger>
      <ModalContent className='sm:max-w-[425px]'>
        <ModalHeader>
          <ModalTitle>Edit profile</ModalTitle>
          <ModalDescription>
            Make changes to your profile here. Click save when you're done.
          </ModalDescription>
        </ModalHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input
              id='name'
              defaultValue='John Doe'
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Username
            </Label>
            <Input
              id='username'
              defaultValue='@johndoe'
              className='col-span-3'
            />
          </div>
        </div>
        <ModalFooter>
          <Button type='submit'>Save changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
