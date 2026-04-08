import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function DropdownMenuDisabled() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary'>Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuItem disabled>Archive</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Move to trash</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
