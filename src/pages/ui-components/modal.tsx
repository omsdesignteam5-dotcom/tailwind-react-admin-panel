import { ComponentPreview, CodeBlock } from './_components/code-block'
import ModalDefault from './_components/modal/modal-default'
import ModalDefaultCode from './_components/modal/modal-default?raw'
import ModalForm from './_components/modal/modal-form'
import ModalFormCode from './_components/modal/modal-form?raw'

export function ModalPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Modal
        </h2>
        <p className='text-muted-foreground mt-1'>
          A centered dialog overlay that focuses the user's attention on a
          specific task or content.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/ui/modal'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        <ComponentPreview
          title='Edit Profile'
          description='A modal dialog for editing user profile information.'
          code={ModalDefaultCode}
        >
          <ModalDefault />
        </ComponentPreview>

        <ComponentPreview
          title='With Form'
          description='A modal containing a larger form with textarea.'
          code={ModalFormCode}
        >
          <ModalForm />
        </ComponentPreview>
      </div>
    </div>
  )
}
