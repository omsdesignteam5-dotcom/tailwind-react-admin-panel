import { ComponentPreview } from './_components/code-block'
import SchoolUpload from './_components/school/school-upload'
import SchoolUploadCode from './_components/school/school-upload?raw'
import SchoolTimetable from './_components/school/school-timetable'
import SchoolTimetableCode from './_components/school/school-timetable?raw'

export function SchoolComponentsPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Education UI 
        </h2>
        <p className='text-muted-foreground mt-1'>
          Domain-specific components for school management scenarios like file uploads and timetables.
        </p>
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Timetable Grid */}
        <ComponentPreview
          title='Timetable Grid'
          description='Weekly schedule layout with color-coded slots and click interactions.'
          code={SchoolTimetableCode}
        >
          <div className='w-full'>
            <SchoolTimetable />
          </div>
        </ComponentPreview>

        {/* File Upload */}
        <ComponentPreview
          title='File Upload'
          description='Drag & drop zone with type/size validation and item list.'
          code={SchoolUploadCode}
        >
          <SchoolUpload />
        </ComponentPreview>
      </div>
    </div>
  )
}
