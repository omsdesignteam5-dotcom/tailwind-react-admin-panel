import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function FormInput() {
  return (
    <div className='grid w-full max-w-sm gap-4'>
      <div className='grid gap-1.5'>
        <Label htmlFor='email'>Email</Label>
        <Input id='email' type='email' placeholder='name@example.com' />
      </div>
      <div className='grid gap-1.5'>
        <Label htmlFor='disabled-input'>Disabled</Label>
        <Input id='disabled-input' disabled placeholder='Disabled input' />
      </div>
    </div>
  )
}
