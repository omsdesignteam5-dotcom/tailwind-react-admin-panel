import { ComponentPreview, CodeBlock } from './_components/code-block'
import SheetDefault from './_components/sheet/sheet-default'
import SheetDefaultCode from './_components/sheet/sheet-default?raw'
import SheetSides from './_components/sheet/sheet-sides'
import SheetSidesCode from './_components/sheet/sheet-sides?raw'

export function SheetPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Sheet
        </h2>
        <p className='text-muted-foreground mt-1'>
          A slide-over panel anchored to the edge of the screen. Built on top of
          Radix Dialog.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Default (Right) */}
        <ComponentPreview
          title='Default (Right Side)'
          description='A basic sheet that slides in from the right.'
          code={SheetDefaultCode}
        >
          <SheetDefault />
        </ComponentPreview>

        {/* All Sides */}
        <ComponentPreview
          title='Side Variants'
          description='Sheets can slide in from any edge of the screen.'
          code={SheetSidesCode}
        >
          <SheetSides />
        </ComponentPreview>
      </div>
    </div>
  )
}
