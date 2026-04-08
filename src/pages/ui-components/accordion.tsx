import { ComponentPreview, CodeBlock } from './_components/code-block'
import AccordionDefault from './_components/accordion/accordion-default'
import AccordionDefaultCode from './_components/accordion/accordion-default?raw'
import AccordionMultiple from './_components/accordion/accordion-multiple'
import AccordionMultipleCode from './_components/accordion/accordion-multiple?raw'
import { CustomAccordion } from '@/components/common/custom-accordion'

export function AccordionPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Accordion
        </h2>
        <p className='text-muted-foreground mt-1'>
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </div>

      {/* Common Reusable */}
      <div className='space-y-4 rounded-lg border border-dashed border-primary/30 bg-primary/[0.03] p-6'>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-primary'>Import (Common Reusable)</h3>
          <CodeBlock
            title='Import CustomAccordion'
            code={`import { CustomAccordion } from '@/components/common/custom-accordion'`}
          />
        </div>
        <div className='space-y-4'>
          <ComponentPreview
            title='Common Reusable Accordion'
            description='A generalized wrapper using arrays to render accordion items.'
            code={`import { CustomAccordion } from '@/components/common/custom-accordion'\n\n<CustomAccordion items={[{ id: '1', title: 'A', content: 'B' }]} />`}
            className='block'
          >
            <CustomAccordion items={[
              { id: 'item-1', title: 'Why use wrapped components?', content: 'Because it abstracts away the boilerplate.' },
              { id: 'item-2', title: 'Is it hard to do?', content: 'Not at all!' }
            ]} />
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'`}
          />
        </div>
        <div className='space-y-6'>
          <ComponentPreview
            title='Default (Single)'
            description='Only one item can be open at a time. Click to collapse the current item.'
            code={AccordionDefaultCode}
            className='block'
          >
            <AccordionDefault />
          </ComponentPreview>

          <ComponentPreview
            title='Multiple'
            description='Multiple items can be open simultaneously.'
            code={AccordionMultipleCode}
            className='block'
          >
            <AccordionMultiple />
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
