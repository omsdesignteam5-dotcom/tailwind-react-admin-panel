import { ComponentPreview, CodeBlock } from './_components/code-block'
import DropdownMenuBasic from './_components/dropdown-menu/dropdown-menu-basic'
import DropdownMenuBasicCode from './_components/dropdown-menu/dropdown-menu-basic?raw'
import DropdownMenuFull from './_components/dropdown-menu/dropdown-menu-full'
import DropdownMenuFullCode from './_components/dropdown-menu/dropdown-menu-full?raw'
import DropdownMenuDisabled from './_components/dropdown-menu/dropdown-menu-disabled'
import DropdownMenuDisabledCode from './_components/dropdown-menu/dropdown-menu-disabled?raw'
import { CustomDropdown } from '@/components/common/custom-dropdown'


export function DropdownMenuPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Dropdown Menu
        </h2>
        <p className='text-muted-foreground mt-1'>
          Displays a menu of items that the user can select from when triggered.
        </p>
      </div>

      {/* Common Reusable */}
      <div className='space-y-4 rounded-lg border border-dashed border-primary/30 bg-primary/[0.03] p-6'>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-primary'>Import (Common Reusable)</h3>
          <CodeBlock
            title='Import CustomDropdown'
            code={`import { CustomDropdown } from '@/components/common/custom-dropdown'`}
          />
        </div>
        <div className='space-y-4'>
          <ComponentPreview
            title='Common Reusable Dropdown'
            description='A custom reusable wrapper with array props and dual trigger type support.'
            code={`import { CustomDropdown } from '@/components/common/custom-dropdown'\n\n<CustomDropdown\n  label="Options"\n  items={[\n    { id: 1, label: 'Profile' },\n    { id: 2, label: 'Settings' }\n  ]}\n/>`}
          >
            <div className="flex gap-4 items-center">
              <CustomDropdown 
                label="Button Dropdown" 
                items={[
                  { id: 1, label: 'Profile' },
                  { id: 2, label: 'Settings' }
                ]} 
              />
              <CustomDropdown 
                triggerType="link"
                chevronPosition="left"
                label="Link Dropdown" 
                items={[
                  { id: 1, label: 'Home' },
                  { id: 2, label: 'Dashboard' }
                ]} 
              />
            </div>
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'`}
          />
        </div>
        <div className='space-y-6'>
          <ComponentPreview
            title='Basic Dropdown'
            description='A simple dropdown menu with items.'
            code={DropdownMenuBasicCode}
          >
            <DropdownMenuBasic />
          </ComponentPreview>

          <ComponentPreview
            title='Full Featured'
            description='Dropdown with sub-menus, labels, separators, and shortcuts.'
            code={DropdownMenuFullCode}
          >
            <DropdownMenuFull />
          </ComponentPreview>

          <ComponentPreview
            title='With Disabled Items'
            description='Some items can be disabled to prevent interaction.'
            code={DropdownMenuDisabledCode}
          >
            <DropdownMenuDisabled />
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
