import { ComponentPreview } from './_components/code-block'
import CompositeGrid from './_components/composite/composite-grid'
import CompositeGridCode from './_components/composite/composite-grid?raw'
import CompositeEmpty from './_components/composite/composite-empty'
import CompositeEmptyCode from './_components/composite/composite-empty?raw'
import CompositeConfirm from './_components/composite/composite-confirm'
import CompositeConfirmCode from './_components/composite/composite-confirm?raw'

export function CompositePage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Composite UI
        </h2>
        <p className='text-muted-foreground mt-1'>
          Domain-specific composite components for dashboard metrics, empty states, and confirmations.
        </p>
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Stats Grid */}
        <ComponentPreview
          title='Stats Card Grid'
          description='KPI cards for dashboard top row metrics.'
          code={CompositeGridCode}
        >
          <CompositeGrid />
        </ComponentPreview>

        {/* Empty State */}
        <ComponentPreview
          title='Empty State'
          description='Placeholder component for lists or tables with no data.'
          code={CompositeEmptyCode}
        >
          <CompositeEmpty />
        </ComponentPreview>

        {/* Confirm Dialog */}
        <ComponentPreview
          title='Confirm Dialog'
          description='Reusable wrapper around Alert Dialog with loading states and destructive variants.'
          code={CompositeConfirmCode}
        >
          <CompositeConfirm />
        </ComponentPreview>
      </div>
    </div>
  )
}
