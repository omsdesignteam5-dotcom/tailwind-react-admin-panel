import { useEffect } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { User } from '@/pages/users/data/mock-users'
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@/components/ui/modal'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const updateInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string().min(1, 'Phone number is required'),
})

export type UpdateInfoValues = z.infer<typeof updateInfoSchema>

interface UpdateInfoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  user: User
  onSubmit: (data: UpdateInfoValues) => void
}

export function UpdateInfoModal({ open, onOpenChange, user, onSubmit }: UpdateInfoModalProps) {
  const form = useForm<UpdateInfoValues>({
    resolver: zodResolver(updateInfoSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
    },
  })

  useEffect(() => {
    if (open && user) {
      form.reset({
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
      })
    }
  }, [open, user, form])

  const handleSubmit = (data: UpdateInfoValues) => {
    onSubmit(data)
  }

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent className='max-w-md'>
        <ModalHeader>
          <ModalTitle>Update Information</ModalTitle>
          <ModalDescription>
            Update your personal details below.
          </ModalDescription>
        </ModalHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder='First name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Last name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder='Phone number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <ModalFooter className='mt-6 gap-2 sm:gap-0'>
              <Button
                type='button'
                variant='outline'
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type='submit'>Save Changes</Button>
            </ModalFooter>
          </form>
        </Form>
      </ModalContent>
    </Modal>
  )
}
