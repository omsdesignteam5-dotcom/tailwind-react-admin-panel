import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export default function CheckboxWithText() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Checkbox id='terms-1' />
        <Label htmlFor='terms-1'>Accept terms and conditions</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='newsletter' defaultChecked />
        <Label htmlFor='newsletter'>Subscribe to newsletter</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='disabled-1' disabled />
        <Label htmlFor='disabled-1' className='opacity-50'>
          Disabled option
        </Label>
      </div>
    </div>
  )
}
