import { useEffect } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { User } from '../data/mock-users'
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalFooter,
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
import { CustomSelect } from '@/components/common'
import { PasswordInput } from '@/components/ui/password-input'

const addUserSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    username: z.string().min(3, 'Username must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(1, 'Phone is required'),
    role: z.enum(['superadmin', 'admin', 'Teacher', 'Parent', 'Student'], {
      message: 'Please select a role',
    }),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type AddUserFormValues = z.infer<typeof addUserSchema>

interface AddUserModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: AddUserFormValues) => void
  editingUser?: User | null
}

export function AddUserModal({ open, onOpenChange, onSubmit, editingUser }: AddUserModalProps) {
  const form = useForm<AddUserFormValues>({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
      role: 'Student',
      password: '',
      confirmPassword: '',
    },
  })

  useEffect(() => {
    if (editingUser && open) {
      form.reset({
        firstName: editingUser.firstName,
        lastName: editingUser.lastName,
        username: editingUser.username,
        email: editingUser.email,
        phone: editingUser.phone,
        role: editingUser.role,
        password: '',
        confirmPassword: '',
      })
    } else if (!open) {
      form.reset({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phone: '',
        role: 'Student',
        password: '',
        confirmPassword: '',
      })
    }
  }, [editingUser, open, form])

  // We have to bind the onSubmit prop manually since handleSubmit takes a callback
  const handleSubmit = (data: AddUserFormValues) => {
    onSubmit(data)
    form.reset()
    onOpenChange(false)
  }

  // Ensure form resets if modal closes without submit
  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange(isOpen)
  }

  const isEditing = !!editingUser

  return (
    <Modal open={open} onOpenChange={handleOpenChange}>
      <ModalContent className='max-w-2xl sm:max-w-2xl'>
        <ModalHeader>
          <ModalTitle>{isEditing ? 'Edit User' : 'Add New User'}</ModalTitle>
          <ModalDescription>
            {isEditing 
              ? 'Update the details for this user below.' 
              : 'Fill in the details below to create a new user account.'}
          </ModalDescription>
        </ModalHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4 py-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder='John' {...field} />
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
                      <Input placeholder='Doe' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='johndoe' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='john.doe@example.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder='+1-202-555-0101' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='role'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <CustomSelect
                        value={field.value}
                        onValueChange={field.onChange}
                        placeholder='Select a role'
                        options={[
                          { label: 'Super Admin', value: 'superadmin' },
                          { label: 'Admin', value: 'admin' },
                          { label: 'Teacher', value: 'Teacher' },
                          { label: 'Parent', value: 'Parent' },
                          { label: 'Student', value: 'Student' }
                        ]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder='Enter password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder='Confirm password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <ModalFooter className='mt-6'>
              <Button
                type='button'
                variant='outline'
                onClick={() => handleOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type='submit'>{isEditing ? 'Update User' : 'Save User'}</Button>
            </ModalFooter>
          </form>
        </Form>
      </ModalContent>
    </Modal>
  )
}
