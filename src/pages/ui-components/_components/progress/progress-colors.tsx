import { Progress } from '@/components/ui/progress'

export default function ProgressColors() {
  return (
    <div className='w-full max-w-md space-y-4'>
      <div className='space-y-1.5'>
        <p className='text-sm font-medium'>Default</p>
        <Progress value={40} />
      </div>
      <div className='space-y-1.5'>
        <p className='text-sm font-medium text-green-600'>Success</p>
        <Progress
          value={75}
          className='bg-green-100 dark:bg-green-950/30'
          style={{ ['--progress-color' as string]: 'var(--color-green-500)' }}
        />
      </div>
      <div className='space-y-1.5'>
        <p className='text-sm font-medium text-destructive'>Warning</p>
        <Progress
          value={25}
          className='bg-red-100 dark:bg-red-950/30'
          style={{ ['--progress-color' as string]: 'var(--color-destructive)' }}
        />
      </div>
    </div>
  )
}
