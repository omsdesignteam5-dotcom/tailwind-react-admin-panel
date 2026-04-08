import { ComponentPreview, CodeBlock } from './_components/code-block'
import CheckboxDefault from './_components/checkbox/checkbox-default'
import CheckboxDefaultCode from './_components/checkbox/checkbox-default?raw'
import CheckboxWithText from './_components/checkbox/checkbox-with-text'
import CheckboxWithTextCode from './_components/checkbox/checkbox-with-text?raw'

export function CheckboxPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Checkbox
        </h2>
        <p className='text-muted-foreground mt-1'>
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { Checkbox } from '@/components/ui/checkbox'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        <ComponentPreview
          title='Default'
          description='Checkbox in different states: unchecked, checked, and disabled.'
          code={CheckboxDefaultCode}
        >
          <CheckboxDefault />
        </ComponentPreview>

        <ComponentPreview
          title='With Labels'
          description='Checkboxes paired with descriptive labels.'
          code={CheckboxWithTextCode}
        >
          <CheckboxWithText />
        </ComponentPreview>
      </div>
    </div>
  )
}
