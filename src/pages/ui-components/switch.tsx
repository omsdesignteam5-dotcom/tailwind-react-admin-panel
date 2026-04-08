import { ComponentPreview, CodeBlock } from './_components/code-block'
import SwitchDefault from './_components/switch/switch-default'
import SwitchDefaultCode from './_components/switch/switch-default?raw'
import SwitchWithLabel from './_components/switch/switch-with-label'
import SwitchWithLabelCode from './_components/switch/switch-with-label?raw'

export function SwitchPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Switch
        </h2>
        <p className='text-muted-foreground mt-1'>
          A control that allows the user to toggle between two states: on and
          off.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { Switch } from '@/components/ui/switch'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        <ComponentPreview
          title='Default'
          description='Switch in different states: unchecked, checked, and disabled.'
          code={SwitchDefaultCode}
        >
          <SwitchDefault />
        </ComponentPreview>

        <ComponentPreview
          title='With Labels'
          description='Switches paired with descriptive labels in card layout.'
          code={SwitchWithLabelCode}
          className='block'
        >
          <SwitchWithLabel />
        </ComponentPreview>
      </div>
    </div>
  )
}
