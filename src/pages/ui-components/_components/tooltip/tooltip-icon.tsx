import { Plus, Info, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function TooltipIcon() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' size='icon'>
            <Plus className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Add new item</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='ghost' size='icon'>
            <Info className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>More information</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='ghost' size='icon'>
            <HelpCircle className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Help center</TooltipContent>
      </Tooltip>
    </>
  )
}
