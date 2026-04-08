import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function RadioWithLabel() {
  return (
    <RadioGroup defaultValue='email' className='gap-4'>
      <div className='flex items-start space-x-3 rounded-md border border-border p-4'>
        <RadioGroupItem value='email' id='notif-email' className='mt-0.5' />
        <div className='grid gap-1'>
          <Label htmlFor='notif-email' className='font-medium'>
            Email notifications
          </Label>
          <p className='text-sm text-muted-foreground'>
            Receive notifications via email.
          </p>
        </div>
      </div>
      <div className='flex items-start space-x-3 rounded-md border border-border p-4'>
        <RadioGroupItem value='sms' id='notif-sms' className='mt-0.5' />
        <div className='grid gap-1'>
          <Label htmlFor='notif-sms' className='font-medium'>
            SMS notifications
          </Label>
          <p className='text-sm text-muted-foreground'>
            Receive notifications via text message.
          </p>
        </div>
      </div>
      <div className='flex items-start space-x-3 rounded-md border border-border p-4'>
        <RadioGroupItem value='none' id='notif-none' className='mt-0.5' />
        <div className='grid gap-1'>
          <Label htmlFor='notif-none' className='font-medium'>
            No notifications
          </Label>
          <p className='text-sm text-muted-foreground'>
            Don't send me any notifications.
          </p>
        </div>
      </div>
    </RadioGroup>
  )
}
