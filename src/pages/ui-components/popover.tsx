import { ComponentPreview, CodeBlock } from './_components/code-block'
import PopoverDefault from './_components/popover/popover-default'
import PopoverDefaultCode from './_components/popover/popover-default?raw'

export function PopoverPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Popover
        </h2>
        <p className='text-muted-foreground mt-1'>
          Displays rich content in a portal, triggered by a button.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        <ComponentPreview
          title='Default'
          description='A popover with form fields for setting dimensions.'
          code={PopoverDefaultCode}
        >
          <PopoverDefault />
        </ComponentPreview>
      </div>
    </div>
  )
}
