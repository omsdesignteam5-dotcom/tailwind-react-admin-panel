import { ComponentPreview, CodeBlock } from './_components/code-block'
import FormInput from './_components/form/form-input'
import FormInputCode from './_components/form/form-input?raw'
import FormTextarea from './_components/form/form-textarea'
import FormTextareaCode from './_components/form/form-textarea?raw'
import FormOtp from './_components/form/form-otp'
import FormOtpCode from './_components/form/form-otp?raw'
import FormPassword from './_components/form/form-password'
import FormPasswordCode from './_components/form/form-password?raw'

export function FormPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Form
        </h2>
        <p className='text-muted-foreground mt-1'>
          A collection of form field components for building user input
          interfaces.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { PasswordInput } from '@/components/ui/password-input'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        <ComponentPreview
          title='Input'
          description='Standard text input with label and disabled state.'
          code={FormInputCode}
        >
          <FormInput />
        </ComponentPreview>

        <ComponentPreview
          title='Textarea'
          description='Multi-line text input for longer content.'
          code={FormTextareaCode}
        >
          <FormTextarea />
        </ComponentPreview>

        <ComponentPreview
          title='One-Time Password'
          description='A segmented input for entering verification codes. Supports paste and auto-advance.'
          code={FormOtpCode}
        >
          <FormOtp />
        </ComponentPreview>

        <ComponentPreview
          title='Password Toggle'
          description='A password input with a show/hide toggle button.'
          code={FormPasswordCode}
        >
          <FormPassword />
        </ComponentPreview>
      </div>
    </div>
  )
}
