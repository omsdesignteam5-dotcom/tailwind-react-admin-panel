import { ComponentPreview, CodeBlock } from './_components/code-block'
import RadioDefault from './_components/radio-group/radio-default'
import RadioDefaultCode from './_components/radio-group/radio-default?raw'
import RadioWithLabel from './_components/radio-group/radio-with-label'
import RadioWithLabelCode from './_components/radio-group/radio-with-label?raw'

export function RadioGroupPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Radio Group
        </h2>
        <p className='text-muted-foreground mt-1'>
          A set of checkable buttons—known as radio buttons—where only one
          can be checked at a time.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        <ComponentPreview
          title='Default'
          description='A simple radio group with labels.'
          code={RadioDefaultCode}
        >
          <RadioDefault />
        </ComponentPreview>

        <ComponentPreview
          title='Card Style'
          description='Radio items styled as selectable cards with descriptions.'
          code={RadioWithLabelCode}
          className='block'
        >
          <RadioWithLabel />
        </ComponentPreview>
      </div>
    </div>
  )
}
