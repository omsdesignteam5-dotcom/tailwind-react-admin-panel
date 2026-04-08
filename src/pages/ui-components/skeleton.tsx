import { ComponentPreview, CodeBlock } from './_components/code-block'
import SkeletonBasic from './_components/skeleton/skeleton-basic'
import SkeletonBasicCode from './_components/skeleton/skeleton-basic?raw'
import SkeletonCard from './_components/skeleton/skeleton-card'
import SkeletonCardCode from './_components/skeleton/skeleton-card?raw'

export function SkeletonPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Skeleton
        </h2>
        <p className='text-muted-foreground mt-1'>
          Use to show a placeholder while content is loading.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { Skeleton } from "@/components/ui/skeleton"`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Basic */}
        <ComponentPreview
          title='Basic'
          description='Basic shape components for text and avatar loading.'
          code={SkeletonBasicCode}
        >
          <SkeletonBasic />
        </ComponentPreview>

        {/* Card */}
        <ComponentPreview
          title='Card'
          description='Used as a placeholder for a card component.'
          code={SkeletonCardCode}
        >
          <SkeletonCard />
        </ComponentPreview>
      </div>
    </div>
  )
}
