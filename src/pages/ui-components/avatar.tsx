import { ComponentPreview, CodeBlock } from './_components/code-block'
import AvatarDefault from './_components/avatar/avatar-default'
import AvatarDefaultCode from './_components/avatar/avatar-default?raw'
import AvatarFallbackExample from './_components/avatar/avatar-fallback'
import AvatarFallbackExampleCode from './_components/avatar/avatar-fallback?raw'
import AvatarSizes from './_components/avatar/avatar-sizes'
import AvatarSizesCode from './_components/avatar/avatar-sizes?raw'
import AvatarGroup from './_components/avatar/avatar-group'
import AvatarGroupCode from './_components/avatar/avatar-group?raw'

export function AvatarPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Avatar
        </h2>
        <p className='text-muted-foreground mt-1'>
          Displays an image representing a user, with a fallback for when the
          image is unavailable.
        </p>
      </div>

      {/* Installation */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import'
          code={`import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Default */}
        <ComponentPreview
          title='Default Avatar'
          description='An avatar with an image source.'
          code={AvatarDefaultCode}
        >
          <AvatarDefault />
        </ComponentPreview>

        {/* Fallback */}
        <ComponentPreview
          title='Fallback'
          description='When no image is available, initials are shown instead.'
          code={AvatarFallbackExampleCode}
        >
          <AvatarFallbackExample />
        </ComponentPreview>

        {/* Sizes */}
        <ComponentPreview
          title='Sizes'
          description='Adjust the size with Tailwind utility classes.'
          code={AvatarSizesCode}
        >
          <AvatarSizes />
        </ComponentPreview>

        {/* Group */}
        <ComponentPreview
          title='Avatar Group'
          description='Stack avatars together with negative spacing.'
          code={AvatarGroupCode}
        >
          <AvatarGroup />
        </ComponentPreview>
      </div>
    </div>
  )
}
