import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function FormTextarea() {
  return (
    <div className='grid w-full max-w-sm gap-4'>
      <div className='grid gap-1.5'>
        <Label htmlFor='bio'>Bio</Label>
        <Textarea id='bio' placeholder='Tell us about yourself...' rows={4} />
      </div>
      <div className='grid gap-1.5'>
        <Label htmlFor='disabled-textarea'>Disabled</Label>
        <Textarea id='disabled-textarea' disabled placeholder='Disabled textarea' />
      </div>
    </div>
  )
}
