import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function AvatarDefault() {
  return (
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/150?u=alice" alt="Alice" />
      <AvatarFallback>AL</AvatarFallback>
    </Avatar>
  )
}
