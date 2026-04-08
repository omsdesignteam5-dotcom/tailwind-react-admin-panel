import { Separator } from '@/components/ui/separator'

export default function SeparatorVertical() {
  return (
    <div className='flex h-5 items-center space-x-4 text-sm'>
      <div>Home</div>
      <Separator orientation='vertical' />
      <div>Settings</div>
      <Separator orientation='vertical' />
      <div>Profile</div>
      <Separator orientation='vertical' />
      <div>Logout</div>
    </div>
  )
}
