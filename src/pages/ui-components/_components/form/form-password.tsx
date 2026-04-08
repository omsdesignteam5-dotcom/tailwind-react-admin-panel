import { PasswordInput } from '@/components/ui/password-input'
import { Label } from '@/components/ui/label'

export default function FormPassword() {
  return (
    <div className='grid w-full max-w-sm gap-4'>
      <div className='grid gap-1.5'>
        <Label htmlFor='password'>Password</Label>
        <PasswordInput id='password' placeholder='Enter your password' />
      </div>
      <div className='grid gap-1.5'>
        <Label htmlFor='confirm-password'>Confirm Password</Label>
        <PasswordInput
          id='confirm-password'
          placeholder='Confirm your password'
        />
      </div>
    </div>
  )
}
