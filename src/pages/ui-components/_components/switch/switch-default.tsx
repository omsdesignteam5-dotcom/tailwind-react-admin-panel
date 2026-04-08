import { Switch } from '@/components/ui/switch'

export default function SwitchDefault() {
  return (
    <div className='flex items-center gap-6'>
      <Switch id='switch-1' />
      <Switch id='switch-2' defaultChecked />
      <Switch id='switch-3' disabled />
    </div>
  )
}
