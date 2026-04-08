import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default function SwitchWithLabel() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between rounded-lg border border-border p-4'>
        <div className='space-y-0.5'>
          <Label htmlFor='airplane-mode' className='font-medium'>
            Airplane Mode
          </Label>
          <p className='text-sm text-muted-foreground'>
            Disable all wireless connections.
          </p>
        </div>
        <Switch id='airplane-mode' />
      </div>
      <div className='flex items-center justify-between rounded-lg border border-border p-4'>
        <div className='space-y-0.5'>
          <Label htmlFor='dark-mode' className='font-medium'>
            Dark Mode
          </Label>
          <p className='text-sm text-muted-foreground'>
            Toggle dark mode for the application.
          </p>
        </div>
        <Switch id='dark-mode' defaultChecked />
      </div>
    </div>
  )
}
