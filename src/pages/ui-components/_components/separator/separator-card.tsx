import { Separator } from '@/components/ui/separator'

export default function SeparatorCard() {
  return (
    <div className='rounded-lg border border-border p-4 space-y-4 max-w-sm w-full'>
      <div>
        <h4 className='font-medium text-sm'>Account</h4>
        <p className='text-xs text-muted-foreground'>
          Manage your account settings.
        </p>
      </div>
      <Separator />
      <div>
        <h4 className='font-medium text-sm'>Notifications</h4>
        <p className='text-xs text-muted-foreground'>
          Configure notification preferences.
        </p>
      </div>
      <Separator />
      <div>
        <h4 className='font-medium text-sm'>Security</h4>
        <p className='text-xs text-muted-foreground'>
          Update your password and 2FA settings.
        </p>
      </div>
    </div>
  )
}
