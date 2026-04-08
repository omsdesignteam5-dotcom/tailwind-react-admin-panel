import { ComponentPreview, CodeBlock } from './_components/code-block'
import FormBasic from './_components/form/form-basic'
import FormBasicCode from './_components/form/form-basic?raw'
import FormWithZod from './_components/form/form-with-zod'
import FormWithZodCode from './_components/form/form-with-zod?raw'

export function FormValidationPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Form
        </h2>
        <p className='text-muted-foreground mt-1'>
          Building forms with React Hook Form and Zod for schema validation.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Basic */}
        <ComponentPreview
          title='Basic Form'
          description='A simple form with a single input and validation.'
          code={FormBasicCode}
        >
          <FormBasic />
        </ComponentPreview>

        {/* Complex */}
        <ComponentPreview
          title='Complex Form'
          description='A more complex form featuring different input primitives and cross-validation.'
          code={FormWithZodCode}
        >
          <FormWithZod />
        </ComponentPreview>
      </div>
    </div>
  )
}
