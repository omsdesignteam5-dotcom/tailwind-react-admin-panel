import { ComponentPreview, CodeBlock } from './_components/code-block'
import SeparatorHorizontal from './_components/separator/separator-horizontal'
import SeparatorHorizontalCode from './_components/separator/separator-horizontal?raw'
import SeparatorVertical from './_components/separator/separator-vertical'
import SeparatorVerticalCode from './_components/separator/separator-vertical?raw'
import SeparatorCard from './_components/separator/separator-card'
import SeparatorCardCode from './_components/separator/separator-card?raw'

export function SeparatorPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Separator
        </h2>
        <p className='text-muted-foreground mt-1'>
          Visually divides content into clear groups. Supports horizontal and
          vertical orientations.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { Separator } from '@/components/ui/separator'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Horizontal */}
        <ComponentPreview
          title='Horizontal Separator'
          description='Default horizontal separator between text content.'
          className='flex-col items-start'
          code={SeparatorHorizontalCode}
        >
          <SeparatorHorizontal />
        </ComponentPreview>

        {/* Vertical */}
        <ComponentPreview
          title='Vertical Separator'
          description='Separate inline items vertically.'
          code={SeparatorVerticalCode}
        >
          <SeparatorVertical />
        </ComponentPreview>

        {/* In a Card */}
        <ComponentPreview
          title='In a Card Layout'
          description='Separators used to divide sections within a card.'
          className='flex-col items-start'
          code={SeparatorCardCode}
        >
          <SeparatorCard />
        </ComponentPreview>
      </div>
    </div>
  )
}
