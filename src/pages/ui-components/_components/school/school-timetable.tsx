import { useState } from 'react'
import { TimetableGrid, type TimeSlot, type TimetableSlot } from '@/components/timetable-grid'

const timeSlots: TimeSlot[] = [
  { label: 'P1', startTime: '08:00', endTime: '09:00' },
  { label: 'P2', startTime: '09:00', endTime: '10:00' },
  { label: 'BREAK', startTime: '10:00', endTime: '10:30' },
  { label: 'P3', startTime: '10:30', endTime: '11:30' },
  { label: 'P4', startTime: '11:30', endTime: '12:30' },
  { label: 'LUNCH', startTime: '12:30', endTime: '13:30' },
  { label: 'P5', startTime: '13:30', endTime: '14:30' },
]

const sampleData: Record<string, Record<string, TimetableSlot | null>> = {
  Monday: {
    P1: { id: '1', subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 101', color: 'blue' },
    P2: { id: '2', subject: 'Physics', teacher: 'Dr. Jones', room: 'Lab A', color: 'purple' },
    BREAK: { id: 'b1', subject: 'Break', color: 'amber' },
    P3: { id: '3', subject: 'English', teacher: 'Mrs. Davis', room: 'Room 105', color: 'green' },
    LUNCH: { id: 'l1', subject: 'Lunch', color: 'amber' },
  },
  Tuesday: {
    P1: { id: '4', subject: 'Chemistry', teacher: 'Dr. Jones', room: 'Lab B', color: 'orange' },
    P2: { id: '1', subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 101', color: 'blue' },
    BREAK: { id: 'b1', subject: 'Break', color: 'amber' },
    P3: { id: '5', subject: 'History', teacher: 'Ms. Wilson', room: 'Room 201', color: 'pink' },
    P4: { id: '6', subject: 'Geography', teacher: 'Mr. Brown', room: 'Room 202', color: 'cyan' },
    LUNCH: { id: 'l1', subject: 'Lunch', color: 'amber' },
  },
  Wednesday: {
    BREAK: { id: 'b1', subject: 'Break', color: 'amber' },
    P3: { id: '1', subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 101', color: 'blue' },
    P4: { id: '2', subject: 'Physics', teacher: 'Dr. Jones', room: 'Lab A', color: 'purple' },
    LUNCH: { id: 'l1', subject: 'Lunch', color: 'amber' },
    P5: { id: '7', subject: 'Physical Ed', teacher: 'Coach Taylor', room: 'Gym', color: 'green' },
  },
}

export default function SchoolTimetable() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  const handleSlotClick = (day: string, timeSpec: TimeSlot, slot: TimetableSlot | null) => {
    if (slot) {
      setSelectedSlot(`Clicked: ${slot.subject} on ${day} at ${timeSpec.startTime}`)
    } else {
      setSelectedSlot(`Clicked: Empty slot on ${day} at ${timeSpec.startTime}`)
    }
    
    setTimeout(() => setSelectedSlot(null), 3000)
  }

  return (
    <div className='w-full space-y-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-sm font-medium'>Class 10-A Timetable</h3>
        {selectedSlot && (
          <span className='text-sm font-medium text-emerald-600 animate-in fade-in'>
            {selectedSlot}
          </span>
        )}
      </div>
      <TimetableGrid
        timeSlots={timeSlots}
        data={sampleData}
        onSlotClick={handleSlotClick}
      />
    </div>
  )
}
