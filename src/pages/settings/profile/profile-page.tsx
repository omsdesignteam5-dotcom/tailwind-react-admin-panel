import { useState } from 'react'
import { Mail, Phone, Shield, Pencil, Key } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { mockUsers, type User as UserType } from '@/pages/users/data/mock-users'
import { UpdateInfoModal, type UpdateInfoValues } from './components/update-info-modal'
import { ChangePasswordModal, type ChangePasswordValues } from './components/change-password-modal'
import { useToast } from '@/components/ui/use-toast'

export function ProfilePage() {
  const { toast } = useToast()
  // Mock logged in user from mockUsers[0]
  const [user, setUser] = useState<UserType>(mockUsers[0])
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)

  const handleUpdateInfo = (data: UpdateInfoValues) => {
    setUser({
      ...user,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
    })
    setIsUpdateModalOpen(false)
    toast({
      title: 'Profile updated',
      description: 'Your profile information has been successfully updated.',
    })
  }

  const handleChangePassword = (data: ChangePasswordValues) => {
    // Mock save password
    console.log('Password updated', data)
    setIsPasswordModalOpen(false)
    toast({
      title: 'Password updated',
      description: 'Your password has been successfully changed.',
    })
  }

  return (
    <>
      <div className='max-w-full space-y-6'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight text-foreground'>
            My Profile
          </h2>
          <p className='text-muted-foreground mt-1'>
            Manage your personal profile information and security settings.
          </p>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          {/* Personal Information Card */}
          <Card className='overflow-hidden shadow-sm'>
            <div className='p-6 flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-border/50 bg-muted/20'>
              <Avatar className='h-24 w-24 border-4 border-background shadow-sm'>
                <AvatarImage src='' alt='User Avatar' />
                <AvatarFallback className='text-2xl bg-primary/10 text-primary'>
                  {user.firstName[0]}{user.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className='flex-1 space-y-1.5'>
                <h3 className='text-2xl font-semibold tracking-tight text-foreground'>
                  {user.firstName} {user.lastName}
                </h3>
                <p className='text-muted-foreground'>@{user.username}</p>
                <div className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mt-2'>
                  {user.role}
                </div>
              </div>
            </div>

            <CardContent className='p-6 space-y-6'>
              <h4 className='font-medium text-foreground'>Contact Details</h4>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='space-y-1'>
                  <span className='text-sm text-muted-foreground flex items-center gap-2'>
                    <Mail className='h-4 w-4' /> Email Address
                  </span>
                  <p className='font-medium'>{user.email}</p>
                </div>
                <div className='space-y-1'>
                  <span className='text-sm text-muted-foreground flex items-center gap-2'>
                    <Phone className='h-4 w-4' /> Phone Number
                  </span>
                  <p className='font-medium'>{user.phone}</p>
                </div>
              </div>
              <div className='pt-4'>
                <Button onClick={() => setIsUpdateModalOpen(true)}>
                  <Pencil className='mr-2 h-4 w-4' />
                  Update Info
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Security & Preferences Card */}
          <Card className='shadow-sm'>
            <CardHeader className='pb-4'>
              <CardTitle className='text-lg flex items-center gap-2'>
                <Shield className='h-5 w-5 text-muted-foreground' /> Security
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-2 pb-6 border-b border-border/50'>
                <div className='flex items-center justify-between'>
                  <div className='space-y-1'>
                    <p className='font-medium text-foreground'>Password</p>
                    <p className='text-sm text-muted-foreground'>
                      Change your password regularly to keep your account secure.
                    </p>
                  </div>
                </div>
                <div className='pt-2'>
                  <Button variant='outline' onClick={() => setIsPasswordModalOpen(true)}>
                    <Key className='mr-2 h-4 w-4' />
                    Change Password
                  </Button>
                </div>
              </div>

              <div className='space-y-2'>
                <div className='space-y-1'>
                  <p className='font-medium text-foreground'>Account Status</p>
                  <p className='text-sm text-muted-foreground'>
                    Your account is currently <span className='font-semibold text-emerald-500'>Active</span>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <UpdateInfoModal
        open={isUpdateModalOpen}
        onOpenChange={setIsUpdateModalOpen}
        user={user}
        onSubmit={handleUpdateInfo}
      />

      <ChangePasswordModal
        open={isPasswordModalOpen}
        onOpenChange={setIsPasswordModalOpen}
        onSubmit={handleChangePassword}
      />
    </>
  )
}
