import { ComponentPreview, CodeBlock } from './_components/code-block'
import CollapsibleBasic from './_components/collapsible/collapsible-basic'
import CollapsibleBasicCode from './_components/collapsible/collapsible-basic?raw'

export function CollapsiblePage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Collapsible
        </h2>
        <p className='text-muted-foreground mt-1'>
          An interactive component which expands/collapses a panel.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Basic */}
        <ComponentPreview
          title='Basic'
          description='A simple collapsible panel.'
          code={CollapsibleBasicCode}
        >
          <CollapsibleBasic />
        </ComponentPreview>
      </div>
    </div>
  )
}
