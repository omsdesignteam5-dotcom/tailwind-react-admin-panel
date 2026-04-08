import { ComponentPreview, CodeBlock } from './_components/code-block'
import ProgressDefault from './_components/progress/progress-default'
import ProgressDefaultCode from './_components/progress/progress-default?raw'
import ProgressColors from './_components/progress/progress-colors'
import ProgressColorsCode from './_components/progress/progress-colors?raw'

export function ProgressPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Progress
        </h2>
        <p className='text-muted-foreground mt-1'>
          Displays an indicator showing the completion progress of a task,
          typically displayed as a progress bar.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { Progress } from '@/components/ui/progress'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        <ComponentPreview
          title='Default'
          description='A progress bar that animates from 13% to 66% on mount.'
          code={ProgressDefaultCode}
          className='block'
        >
          <ProgressDefault />
        </ComponentPreview>

        <ComponentPreview
          title='Custom Colors'
          description='Progress bars with different color styling for success and warning states.'
          code={ProgressColorsCode}
          className='block'
        >
          <ProgressColors />
        </ComponentPreview>
      </div>
    </div>
  )
}
