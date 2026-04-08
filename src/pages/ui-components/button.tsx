import { ComponentPreview, CodeBlock } from './_components/code-block'
import ButtonVariants from './_components/button/button-variants'
import ButtonVariantsCode from './_components/button/button-variants?raw'
import ButtonSizes from './_components/button/button-sizes'
import ButtonSizesCode from './_components/button/button-sizes?raw'
import ButtonIcons from './_components/button/button-icons'
import ButtonIconsCode from './_components/button/button-icons?raw'
import ButtonLoading from './_components/button/button-loading'
import ButtonLoadingCode from './_components/button/button-loading?raw'
import ButtonDisabled from './_components/button/button-disabled'
import ButtonDisabledCode from './_components/button/button-disabled?raw'

export function ButtonPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Button
        </h2>
        <p className='text-muted-foreground mt-1'>
          Interactive button component with multiple variants, sizes, and
          states.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { Button } from '@/components/ui/button'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Variants */}
        <ComponentPreview
          title='Variants'
          description='All available button variants.'
          code={ButtonVariantsCode}
        >
          <ButtonVariants />
        </ComponentPreview>

        {/* Sizes */}
        <ComponentPreview
          title='Sizes'
          description='Available button sizes: sm, default, lg, and icon.'
          code={ButtonSizesCode}
        >
          <ButtonSizes />
        </ComponentPreview>

        {/* With Icons */}
        <ComponentPreview
          title='With Icons'
          description='Buttons with leading or trailing icons.'
          code={ButtonIconsCode}
        >
          <ButtonIcons />
        </ComponentPreview>

        {/* Loading State */}
        <ComponentPreview
          title='Loading State'
          description='Show a spinner to indicate a loading action.'
          code={ButtonLoadingCode}
        >
          <ButtonLoading />
        </ComponentPreview>

        {/* Disabled */}
        <ComponentPreview
          title='Disabled'
          description='Buttons in their disabled state.'
          code={ButtonDisabledCode}
        >
          <ButtonDisabled />
        </ComponentPreview>
      </div>
    </div>
  )
}
