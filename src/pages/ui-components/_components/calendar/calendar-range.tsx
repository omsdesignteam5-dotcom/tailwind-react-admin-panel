import { useState } from 'react'
import { addDays } from 'date-fns'
import { type DateRange } from 'react-day-picker'
import { Calendar } from '@/components/ui/calendar'

export default function CalendarRange() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  })

  return (
    <Calendar
      mode='range'
      defaultMonth={date?.from}
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      className='rounded-md border shadow'
    />
  )
}
