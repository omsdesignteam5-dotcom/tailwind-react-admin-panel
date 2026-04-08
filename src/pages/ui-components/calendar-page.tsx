import { ComponentPreview, CodeBlock } from './_components/code-block'
import CalendarBasic from './_components/calendar/calendar-basic'
import CalendarBasicCode from './_components/calendar/calendar-basic?raw'
import CalendarRange from './_components/calendar/calendar-range'
import CalendarRangeCode from './_components/calendar/calendar-range?raw'

export function CalendarPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Calendar
        </h2>
        <p className='text-muted-foreground mt-1'>
          A date field component that allows users to enter and edit date. Built on top of React DayPicker.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { Calendar } from "@/components/ui/calendar"`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Basic */}
        <ComponentPreview
          title='Basic'
          description='A basic calendar allowing single date selection.'
          code={CalendarBasicCode}
        >
          <CalendarBasic />
        </ComponentPreview>

        {/* Range */}
        <ComponentPreview
          title='Range'
          description='A calendar allowing range selection across multiple months.'
          code={CalendarRangeCode}
        >
          <CalendarRange />
        </ComponentPreview>
      </div>
    </div>
  )
}
