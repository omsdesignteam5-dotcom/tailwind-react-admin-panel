import { useState } from 'react'
import { SimpleDatePicker } from '@/components/date-picker'

export default function DatePickerSingle() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <div className='flex flex-col space-y-2'>
      <SimpleDatePicker onDateChange={setDate} />
      <p className='text-sm text-muted-foreground'>
        Selected: {date ? date.toLocaleDateString() : 'None'}
      </p>
    </div>
  )
}
