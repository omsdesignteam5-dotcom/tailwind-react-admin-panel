import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function AvatarSizes() {
  return (
    <>
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://i.pravatar.cc/150?u=sm" alt="Small" />
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?u=md" alt="Default" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-14 w-14">
        <AvatarImage src="https://i.pravatar.cc/150?u=lg" alt="Large" />
        <AvatarFallback className="text-lg">LG</AvatarFallback>
      </Avatar>
      <Avatar className="h-20 w-20">
        <AvatarImage src="https://i.pravatar.cc/150?u=xl" alt="XL" />
        <AvatarFallback className="text-xl">XL</AvatarFallback>
      </Avatar>
    </>
  )
}
