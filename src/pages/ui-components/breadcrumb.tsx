import { ComponentPreview, CodeBlock } from './_components/code-block'
import BreadcrumbBasic from './_components/breadcrumb/breadcrumb-basic'
import BreadcrumbBasicCode from './_components/breadcrumb/breadcrumb-basic?raw'
import BreadcrumbWithEllipsis from './_components/breadcrumb/breadcrumb-with-ellipsis'
import BreadcrumbWithEllipsisCode from './_components/breadcrumb/breadcrumb-with-ellipsis?raw'
import { CustomBreadcrumb } from '@/components/common/custom-breadcrumb'

export function BreadcrumbPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Breadcrumb
        </h2>
        <p className='text-muted-foreground mt-1'>
          Displays the path to the current resource using a hierarchy of links.
        </p>
      </div>

      {/* Common Reusable */}
      <div className='space-y-4 rounded-lg border border-dashed border-primary/30 bg-primary/[0.03] p-6'>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-primary'>Import (Common Reusable)</h3>
          <CodeBlock
            title='Import CustomBreadcrumb'
            code={`import { CustomBreadcrumb } from '@/components/common/custom-breadcrumb'`}
          />
        </div>
        <div className='space-y-4'>
          <ComponentPreview
            title='Common Reusable Breadcrumb'
            description='A generalized wrapper for breadcrumbs.'
            code={`import { CustomBreadcrumb } from '@/components/common/custom-breadcrumb'\n\n<CustomBreadcrumb items={[{ label: 'Home', href: '/' }]} />`}
          >
            <CustomBreadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Library', href: '/library' },
                { label: 'Data' }
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
            code={`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"`}
          />
        </div>
        <div className='space-y-6'>
          <ComponentPreview
            title='Basic'
            description='A basic breadcrumb navigation.'
            code={BreadcrumbBasicCode}
          >
            <BreadcrumbBasic />
          </ComponentPreview>

          <ComponentPreview
            title='With Ellipsis'
            description='Breadcrumbs with a collapsed ellipsis menu.'
            code={BreadcrumbWithEllipsisCode}
          >
            <BreadcrumbWithEllipsis />
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
