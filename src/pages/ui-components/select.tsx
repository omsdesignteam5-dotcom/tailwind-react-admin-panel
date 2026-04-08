import { ComponentPreview, CodeBlock } from './_components/code-block'
import SelectDefault from './_components/select/select-default'
import SelectDefaultCode from './_components/select/select-default?raw'
import SelectScrollable from './_components/select/select-scrollable'
import SelectScrollableCode from './_components/select/select-scrollable?raw'
import { CustomSelect } from '@/components/common/custom-select'

export function SelectPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Select
        </h2>
        <p className='text-muted-foreground mt-1'>
          Displays a list of options for the user to pick from—triggered by a
          button.
        </p>
      </div>

      {/* Common Reusable */}
      <div className='space-y-4 rounded-lg border border-dashed border-primary/30 bg-primary/[0.03] p-6'>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-primary'>Import (Common Reusable)</h3>
          <CodeBlock
            title='Import CustomSelect'
            code={`import { CustomSelect } from '@/components/common/custom-select'`}
          />
        </div>
        <div className='space-y-4'>
          <ComponentPreview
            title='Common Reusable Select'
            description='A generalized custom select component via props.'
            code={`import { CustomSelect } from '@/components/common/custom-select'\n\n<CustomSelect\n  placeholder="Choose color"\n  options={[{ label: 'Red', value: 'red' }]}\n/>`}
          >
            <div className="max-w-xs w-full">
              <CustomSelect 
                placeholder="Choose an option"
                options={[
                  { label: 'Option 1', value: 'op1' },
                  { label: 'Option 2', value: 'op2' }
                ]} 
              />
            </div>
          </ComponentPreview>
        </div>
      </div>

      {/* Raw Components */}
      <div className='space-y-4'>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-foreground'>Import (Raw Components)</h3>
          <CodeBlock
            title='Import'
            code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'`}
          />
        </div>
        <div className='space-y-6'>
          <ComponentPreview
            title='Default'
            description='A simple select dropdown with fruit options.'
            code={SelectDefaultCode}
          >
            <SelectDefault />
          </ComponentPreview>

          <ComponentPreview
            title='Grouped & Scrollable'
            description='A select with grouped items, labels, and separators.'
            code={SelectScrollableCode}
          >
            <SelectScrollable />
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
