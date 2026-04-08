import { useState } from 'react'
import { addDays } from 'date-fns'
import { type DateRange } from 'react-day-picker'
import { DateRangePicker } from '@/components/date-picker'

export default function DatePickerRange() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  })

  return (
    <div className='flex flex-col space-y-2'>
      <DateRangePicker dateRange={date} onDateRangeChange={setDate} />
    </div>
  )
}
