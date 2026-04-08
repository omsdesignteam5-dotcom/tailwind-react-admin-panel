import { ComponentPreview, CodeBlock } from './_components/code-block'
import DatePickerSingle from './_components/date-picker/date-picker-single'
import DatePickerSingleCode from './_components/date-picker/date-picker-single?raw'
import DatePickerRange from './_components/date-picker/date-picker-range'
import DatePickerRangeCode from './_components/date-picker/date-picker-range?raw'

export function DatePickerPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Date Picker
        </h2>
        <p className='text-muted-foreground mt-1'>
          A date picker component with range and single selection, utilizing the Popover and Calendar components.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { SimpleDatePicker, DatePicker, DateRangePicker } from "@/components/date-picker"`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Single */}
        <ComponentPreview
          title='Single Date Picker'
          description='A simple uncontrolled date picker.'
          code={DatePickerSingleCode}
        >
          <DatePickerSingle />
        </ComponentPreview>

        {/* Range */}
        <ComponentPreview
          title='Date Range Picker'
          description='A picker allowing range selection.'
          code={DatePickerRangeCode}
        >
          <DatePickerRange />
        </ComponentPreview>
      </div>
    </div>
  )
}
