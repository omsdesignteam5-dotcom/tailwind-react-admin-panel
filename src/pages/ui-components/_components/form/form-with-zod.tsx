import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

const FormSchema = z.object({
  email: z.string().email(),
  role: z.string().min(1, { message: 'Role is required' }),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms',
  }),
})

export default function FormWithZod() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      role: '',
      terms: false,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(`You submitted the following values: ${JSON.stringify(data, null, 2)}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-md space-y-6'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='mail@example.com' {...field} />
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a role' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='admin'>Admin</SelectItem>
                  <SelectItem value='teacher'>Teacher</SelectItem>
                  <SelectItem value='student'>Student</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='terms'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel>
                  Accept terms and conditions
                </FormLabel>
                <FormDescription>
                  You agree to our Terms of Service and Privacy Policy.
                </FormDescription>
              </div>
              <FormMessage className='ml-0!' />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit Form</Button>
      </form>
    </Form>
  )
}
