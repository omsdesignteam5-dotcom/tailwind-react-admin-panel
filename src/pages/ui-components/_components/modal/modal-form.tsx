import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/ui/modal'

export default function ModalForm() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button>Submit Feedback</Button>
      </ModalTrigger>
      <ModalContent className='sm:max-w-md'>
        <ModalHeader>
          <ModalTitle>Send Feedback</ModalTitle>
          <ModalDescription>
            We'd love to hear what went well or how we can improve.
          </ModalDescription>
        </ModalHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid gap-2'>
            <Label htmlFor='subject'>Subject</Label>
            <Input id='subject' placeholder='e.g. Bug report' />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='message'>Message</Label>
            <Textarea
              id='message'
              placeholder='Tell us more...'
              rows={4}
            />
          </div>
        </div>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant='outline'>Cancel</Button>
          </ModalClose>
          <Button type='submit'>Send</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
