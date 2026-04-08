import { ComponentPreview, CodeBlock } from './_components/code-block'
import AlertDialogDefault from './_components/alert-dialog/alert-dialog-default'
import AlertDialogDefaultCode from './_components/alert-dialog/alert-dialog-default?raw'
import AlertDialogDestructive from './_components/alert-dialog/alert-dialog-destructive'
import AlertDialogDestructiveCode from './_components/alert-dialog/alert-dialog-destructive?raw'
import { CustomAlertDialog } from '@/components/common/custom-alert-dialog'
import { Button } from '@/components/ui/button'

export function AlertDialogPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Alert Dialog
        </h2>
        <p className='text-muted-foreground mt-1'>
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>

      {/* Common Reusable */}
      <div className='space-y-4 rounded-lg border border-dashed border-primary/30 bg-primary/[0.03] p-6'>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-primary'>Import (Common Reusable)</h3>
          <CodeBlock
            title='Import CustomAlertDialog'
            code={`import { CustomAlertDialog } from '@/components/common/custom-alert-dialog'`}
          />
        </div>
        <div className='space-y-4'>
          <ComponentPreview
            title='Common Reusable Alert Dialog'
            description='A generalized wrapper for alert dialogs.'
            code={`import { CustomAlertDialog } from '@/components/common/custom-alert-dialog'\n\n<CustomAlertDialog\n  trigger={<button>Open</button>}\n  title="Are you sure?"\n  onConfirm={() => {}}\n/>`}
          >
            <CustomAlertDialog 
              trigger={<Button variant="outline">Quick Dialog</Button>}
              title="Are you absolutely sure?"
              description="You are viewing the custom wrapped component example."
              onConfirm={() => console.log('Confirmed!')}
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'`}
          />
        </div>
        <div className='space-y-6'>
          <ComponentPreview
            title='Default'
            description='A standard confirmation dialog with cancel and continue actions.'
            code={AlertDialogDefaultCode}
          >
            <AlertDialogDefault />
          </ComponentPreview>

          <ComponentPreview
            title='Destructive'
            description='A destructive action dialog with a red action button.'
            code={AlertDialogDestructiveCode}
          >
            <AlertDialogDestructive />
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
