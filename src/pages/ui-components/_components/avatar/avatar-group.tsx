import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function AvatarGroup() {
  return (
    <div className="flex -space-x-3">
      <Avatar className="ring-2 ring-background">
        <AvatarImage src="https://i.pravatar.cc/150?u=a1" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarImage src="https://i.pravatar.cc/150?u=a2" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarImage src="https://i.pravatar.cc/150?u=a3" alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarFallback className="bg-muted text-xs">+3</AvatarFallback>
      </Avatar>
    </div>
  )
}
