import { ComponentPreview, CodeBlock } from './_components/code-block'
import ToastDefault from './_components/toast/toast-default'
import ToastDefaultCode from './_components/toast/toast-default?raw'
import ToastVariants from './_components/toast/toast-variants'
import ToastVariantsCode from './_components/toast/toast-variants?raw'
import ToastWithAction from './_components/toast/toast-with-action'
import ToastWithActionCode from './_components/toast/toast-with-action?raw'

export function ToastPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Toast
        </h2>
        <p className='text-muted-foreground mt-1'>
          A succinct message that is displayed temporarily. Supports multiple
          variants and action buttons.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

// Add <Toaster /> to your App root
import { Toaster } from '@/components/ui/toaster'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        <ComponentPreview
          title='Default'
          description='A simple toast notification with title and description.'
          code={ToastDefaultCode}
        >
          <ToastDefault />
        </ComponentPreview>

        <ComponentPreview
          title='Variants'
          description='Toast notifications with different visual styles: default, success, and destructive.'
          code={ToastVariantsCode}
        >
          <ToastVariants />
        </ComponentPreview>

        <ComponentPreview
          title='With Action'
          description='A toast with an action button for undo or other actions.'
          code={ToastWithActionCode}
        >
          <ToastWithAction />
        </ComponentPreview>
      </div>
    </div>
  )
}
