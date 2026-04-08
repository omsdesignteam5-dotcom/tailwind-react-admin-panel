import { ComponentPreview, CodeBlock } from './_components/code-block'
import TooltipDefault from './_components/tooltip/tooltip-default'
import TooltipDefaultCode from './_components/tooltip/tooltip-default?raw'
import TooltipSide from './_components/tooltip/tooltip-side'
import TooltipSideCode from './_components/tooltip/tooltip-side?raw'
import TooltipIcon from './_components/tooltip/tooltip-icon'
import TooltipIconCode from './_components/tooltip/tooltip-icon?raw'
import TooltipAvatar from './_components/tooltip/tooltip-avatar'
import TooltipAvatarCode from './_components/tooltip/tooltip-avatar?raw'
import { CustomTooltip } from '@/components/common/custom-tooltip'
import { Button } from '@/components/ui/button'

export function TooltipPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Tooltip
        </h2>
        <p className='text-muted-foreground mt-1'>
          A popup that displays additional information when hovering over or
          focusing on an element.
        </p>
      </div>

      {/* Common Reusable */}
      <div className='space-y-4 rounded-lg border border-dashed border-primary/30 bg-primary/[0.03] p-6'>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-primary'>Import (Common Reusable)</h3>
          <CodeBlock
            title='Import CustomTooltip'
            code={`import { CustomTooltip } from '@/components/common/custom-tooltip'`}
          />
        </div>
        <div className='space-y-4'>
          <ComponentPreview
            title='Common Reusable Tooltip'
            description='A generalized wrapper for tooltips.'
            code={`import { CustomTooltip } from '@/components/common/custom-tooltip'\n\n<CustomTooltip content="Smart Tip!">\n  <button>Hover me</button>\n</CustomTooltip>`}
          >
            <CustomTooltip content="This is a simple wrapped tooltip">
              <Button variant="secondary">Hover Me (Reusable)</Button>
            </CustomTooltip>
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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'`}
          />
        </div>
        <div className='space-y-6'>
          <ComponentPreview
            title='Default Tooltip'
            description='Hover over the button to see the tooltip.'
            code={TooltipDefaultCode}
          >
            <TooltipDefault />
          </ComponentPreview>

          <ComponentPreview
            title='Side Positions'
            description='Tooltips can appear on any side of the trigger element.'
            code={TooltipSideCode}
          >
            <TooltipSide />
          </ComponentPreview>

          <ComponentPreview
            title='With Icon Buttons'
            description='Tooltips are great for labeling icon-only buttons.'
            code={TooltipIconCode}
          >
            <TooltipIcon />
          </ComponentPreview>

          <ComponentPreview
            title='On Avatars'
            description='Useful for showing user names on avatar groups.'
            code={TooltipAvatarCode}
          >
            <TooltipAvatar />
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
