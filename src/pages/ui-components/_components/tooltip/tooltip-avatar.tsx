import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function TooltipAvatar() {
  return (
    <div className='flex -space-x-2'>
      <Tooltip>
        <TooltipTrigger>
          <Avatar className='ring-2 ring-background h-9 w-9'>
            <AvatarImage src='https://i.pravatar.cc/150?u=t1' />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>John Doe</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Avatar className='ring-2 ring-background h-9 w-9'>
            <AvatarImage src='https://i.pravatar.cc/150?u=t2' />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>Alice Smith</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Avatar className='ring-2 ring-background h-9 w-9'>
            <AvatarImage src='https://i.pravatar.cc/150?u=t3' />
            <AvatarFallback>BJ</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>Bob Jones</TooltipContent>
      </Tooltip>
    </div>
  )
}
