import { useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'

export default function FormOtp() {
  const [value, setValue] = useState('')

  return (
    <div className='grid w-full max-w-sm gap-4'>
      <div className='grid gap-1.5'>
        <Label>One-Time Password</Label>
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className='text-xs text-muted-foreground'>
          Enter the 6-digit code sent to your phone.
          {value && (
            <span className='ml-1 font-medium text-foreground'>
              Current: {value}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}
