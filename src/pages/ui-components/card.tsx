import { ComponentPreview, CodeBlock } from './_components/code-block'
import CardBasic from './_components/card/card-basic'
import CardBasicCode from './_components/card/card-basic?raw'
import CardWithForm from './_components/card/card-with-form'
import CardWithFormCode from './_components/card/card-with-form?raw'

export function CardPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Card
        </h2>
        <p className='text-muted-foreground mt-1'>
          Displays a card with header, content, and footer.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Basic */}
        <ComponentPreview
          title='Basic'
          description='A basic card layout.'
          code={CardBasicCode}
        >
          <CardBasic />
        </ComponentPreview>

        {/* With Form */}
        <ComponentPreview
          title='With Form'
          description='A card containing a form.'
          code={CardWithFormCode}
        >
          <CardWithForm />
        </ComponentPreview>
      </div>
    </div>
  )
}
