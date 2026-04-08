import { Checkbox } from '@/components/ui/checkbox'

export default function CheckboxDefault() {
  return (
    <div className='flex items-center gap-6'>
      <Checkbox id='terms' />
      <Checkbox id='checked' defaultChecked />
      <Checkbox id='disabled' disabled />
    </div>
  )
}
