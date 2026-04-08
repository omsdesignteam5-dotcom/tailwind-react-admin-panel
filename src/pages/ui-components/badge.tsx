import { ComponentPreview, CodeBlock } from './_components/code-block'
import BadgeVariants from './_components/badge/badge-variants'
import BadgeVariantsCode from './_components/badge/badge-variants?raw'

export function BadgePage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Badge
        </h2>
        <p className='text-muted-foreground mt-1'>
          Displays a badge or a component that looks like a badge.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { Badge } from "@/components/ui/badge"`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Variants */}
        <ComponentPreview
          title='Variants'
          description='All available badge variants including custom success and warning.'
          code={BadgeVariantsCode}
        >
          <BadgeVariants />
        </ComponentPreview>
      </div>
    </div>
  )
}
