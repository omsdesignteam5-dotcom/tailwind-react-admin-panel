import { ComponentPreview, CodeBlock } from './_components/code-block'
import ScrollAreaVertical from './_components/scroll-area/scroll-area-vertical'
import ScrollAreaVerticalCode from './_components/scroll-area/scroll-area-vertical?raw'
import ScrollAreaHorizontal from './_components/scroll-area/scroll-area-horizontal'
import ScrollAreaHorizontalCode from './_components/scroll-area/scroll-area-horizontal?raw'

export function ScrollAreaPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Scroll Area
        </h2>
        <p className='text-muted-foreground mt-1'>
          Augments native scroll functionality for custom, cross-browser
          styling.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Vertical */}
        <ComponentPreview
          title='Vertical Scroll'
          description='A list of items with a fixed height and vertical scrolling.'
          className='justify-start'
          code={ScrollAreaVerticalCode}
        >
          <ScrollAreaVertical />
        </ComponentPreview>

        {/* Horizontal */}
        <ComponentPreview
          title='Horizontal Scroll'
          description='A horizontally scrolling area, useful for galleries or horizontal lists.'
          className='justify-start'
          code={ScrollAreaHorizontalCode}
        >
          <ScrollAreaHorizontal />
        </ComponentPreview>
      </div>
    </div>
  )
}
