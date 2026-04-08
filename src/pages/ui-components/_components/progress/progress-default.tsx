import { useState, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'

export default function ProgressDefault() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-full max-w-md space-y-2'>
      <Progress value={progress} />
      <p className='text-xs text-muted-foreground text-right'>{progress}%</p>
    </div>
  )
}
