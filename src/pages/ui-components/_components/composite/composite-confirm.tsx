import { useState } from 'react'
import { ConfirmDialog } from '@/components/confirm-dialog'
import { Button } from '@/components/ui/button'

export default function CompositeConfirm() {
  const [openDefault, setOpenDefault] = useState(false)
  const [openDestructive, setOpenDestructive] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleSimulatedDelete = () => {
    setIsDeleting(true)
    setTimeout(() => {
      setIsDeleting(false)
      setOpenDestructive(false)
    }, 2000)
  }

  return (
    <div className='flex gap-4'>
      {/* Default Confirm */}
      <Button variant='outline' onClick={() => setOpenDefault(true)}>
        Publish Course
      </Button>
      <ConfirmDialog
        open={openDefault}
        onOpenChange={setOpenDefault}
        title='Publish Course?'
        description='This course will become visible to all enrolled students immediately.'
        confirmText='Publish'
        onConfirm={() => setOpenDefault(false)}
      />

      {/* Destructive Confirm */}
      <Button variant='destructive' onClick={() => setOpenDestructive(true)}>
        Delete Student Record
      </Button>
      <ConfirmDialog
        open={openDestructive}
        onOpenChange={setOpenDestructive}
        title='Are you absolutely sure?'
        description='This action cannot be undone. This will permanently delete the student account and remove their data from our servers.'
        destructive
        confirmText='Delete Account'
        isLoading={isDeleting}
        onConfirm={handleSimulatedDelete}
      />
    </div>
  )
}
