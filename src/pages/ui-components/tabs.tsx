import { ComponentPreview, CodeBlock } from './_components/code-block'
import TabsDefault from './_components/tabs/tabs-default'
import TabsDefaultCode from './_components/tabs/tabs-default?raw'
import TabsUnderline from './_components/tabs/tabs-underline'
import TabsUnderlineCode from './_components/tabs/tabs-underline?raw'
import TabsPill from './_components/tabs/tabs-pill'
import TabsPillCode from './_components/tabs/tabs-pill?raw'
import { CustomTabs } from '@/components/common/custom-tabs'

export function TabsPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Tabs
        </h2>
        <p className='text-muted-foreground mt-1'>
          A set of layered sections of content—known as tab panels—that are
          displayed one at a time. Supports multiple visual variants.
        </p>
      </div>

      {/* Common Reusable */}
      <div className='space-y-4 rounded-lg border border-dashed border-primary/30 bg-primary/[0.03] p-6'>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-primary'>Import (Common Reusable)</h3>
          <CodeBlock
            title='Import CustomTabs'
            code={`import { CustomTabs } from '@/components/common/custom-tabs'`}
          />
        </div>
        <div className='space-y-4'>
          <ComponentPreview
            title='Common Reusable Tabs'
            description='A generalized wrapper for rendering tabs using an items array.'
            code={`import { CustomTabs } from '@/components/common/custom-tabs'\n\n<CustomTabs\n  items={[{ value: '1', label: 'Tab 1', content: 'Content 1' }]}\n/>`}
          >
            <CustomTabs 
              items={[
                { value: 'account', label: 'Account', content: <div className="p-4 border rounded mt-2">Account Content</div> },
                { value: 'password', label: 'Password', content: <div className="p-4 border rounded mt-2">Password Content</div> }
              ]}
            />
          </ComponentPreview>
        </div>
      </div>

      {/* Raw Components */}
      <div className='space-y-4'>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-foreground'>Import (Raw Components)</h3>
          <CodeBlock
            title='Import'
            code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'`}
          />
        </div>
        <div className='space-y-6'>
          <ComponentPreview
            title='Default'
            description='The standard tab variant with a muted background container.'
            code={TabsDefaultCode}
            className='block'
          >
            <TabsDefault />
          </ComponentPreview>

          <ComponentPreview
            title='Underline'
            description='A minimal variant with an animated underline indicator.'
            code={TabsUnderlineCode}
            className='block'
          >
            <TabsUnderline />
          </ComponentPreview>

          <ComponentPreview
            title='Pill'
            description='A rounded pill variant with solid active indicator.'
            code={TabsPillCode}
            className='block'
          >
            <TabsPill />
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
