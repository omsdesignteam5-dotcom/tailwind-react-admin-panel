import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UsersTable } from './components/users-table'
import { AddUserModal, type AddUserFormValues } from './components/add-user-modal'
import { mockUsers, type User } from './data/mock-users'
import { CustomAlertDialog } from '@/components/common'

export function UsersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [userToDelete, setUserToDelete] = useState<User | null>(null)

  const handleSaveUser = (data: AddUserFormValues) => {
    if (editingUser) {
      // Edit User
      setUsers(
        users.map((u) =>
          u.id === editingUser.id
            ? { ...u, ...data }
            : u
        )
      )
      setEditingUser(null)
    } else {
      // Add User
      const newUser: User = {
        id: `usr_${Math.random().toString(36).substring(2, 9)}`,
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        phone: data.phone,
        role: data.role,
        status: 'active', // new users are active by default
      }
      setUsers([newUser, ...users])
    }
  }

  const handleEditClick = (user: User) => {
    setEditingUser(user)
    setIsModalOpen(true)
  }

  const handleDeleteClick = (user: User) => {
    setUserToDelete(user)
  }

  const confirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter((u) => u.id !== userToDelete.id))
      setUserToDelete(null)
    }
  }

  // Handle modal close explicitly to clear editing state
  const handleModalOpenChange = (open: boolean) => {
    setIsModalOpen(open)
    if (!open) setEditingUser(null)
  }

  return (
    <>
      <div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight text-foreground'>User Management</h2>
            <p className='text-muted-foreground mt-1'>
              Manage users, roles and permissions across the system.
            </p>
          </div>
          <div className='flex items-center'>
            <Button onClick={() => setIsModalOpen(true)}>
              <Plus className='mr-2 h-4 w-4' /> Add User
            </Button>
          </div>
        </div>
        
        <div>
          <UsersTable 
            data={users} 
            onEdit={handleEditClick} 
            onDelete={handleDeleteClick} 
          />
        </div>
      </div>

      <AddUserModal
        open={isModalOpen}
        onOpenChange={handleModalOpenChange}
        onSubmit={handleSaveUser}
        editingUser={editingUser}
      />

      {/* Delete Confirmation Dialog */}
      <CustomAlertDialog
        open={!!userToDelete}
        onOpenChange={(open) => !open && setUserToDelete(null)}
        title='Are you absolutely sure?'
        description={
          <>
            This action cannot be undone. This will permanently delete the
            user account for{' '}
            <span className='font-semibold text-foreground'>
              {userToDelete?.firstName} {userToDelete?.lastName}
            </span>
            .
          </>
        }
        cancelText='Cancel'
        confirmText='Delete User'
        onConfirm={confirmDelete}
      />
    </>
  )
}
