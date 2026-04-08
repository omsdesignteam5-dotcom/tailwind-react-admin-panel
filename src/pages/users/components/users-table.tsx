import { useMemo } from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DataTable,
  DataTableColumnHeader,
} from '@/components/data-table'
import type { User } from '../data/mock-users'
import { UsersTableToolbar } from './users-table-toolbar'
import { UserCog, Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface UsersTableProps {
  data: User[]
  onEdit?: (user: User) => void
  onDelete?: (user: User) => void
}

export function UsersTable({ data, onEdit, onDelete }: UsersTableProps) {
  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label='Select all'
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label='Select row'
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: 'firstName', // Using a multi-field accessor via cell
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title='Name' />
        ),
        cell: ({ row }) => {
          const first = row.original.firstName
          const last = row.original.lastName
          return <div className='font-medium'>{first} {last}</div>
        },
      },
      {
        accessorKey: 'username',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title='Username' />
        ),
        cell: ({ row }) => <div className='text-muted-foreground'>@{row.getValue('username')}</div>
      },
      {
        accessorKey: 'email',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title='Email' />
        ),
      },
      {
        accessorKey: 'role',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title='Role' />
        ),
        cell: ({ row }) => {
          const role = row.getValue('role') as string
          return (
            <div className='flex items-center gap-2'>
              <UserCog className='h-4 w-4 text-muted-foreground' />
              <span className='capitalize'>{role}</span>
            </div>
          )
        },
        filterFn: (row, id, value) => {
          return value.includes(row.getValue(id))
        },
      },
      {
        accessorKey: 'status',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => {
          const status = row.getValue('status') as string
          return (
            <Badge
              variant={
                status === 'active' ? 'success' :
                status === 'suspended' ? 'destructive' : 'outline'
              }
              className='capitalize'
            >
              {status}
            </Badge>
          )
        },
        filterFn: (row, id, value) => {
          return value.includes(row.getValue(id))
        },
      },
      {
        accessorKey: 'phone',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title='Phone' />
        ),
      },
      {
        id: 'actions',
        cell: ({ row }) => {
          const user = row.original
          return (
            <div className='flex items-center gap-2 justify-end'>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => onEdit?.(user)}
                title='Edit user'
                className='h-8 w-8 p-0'
              >
                <Pencil className='h-4 w-4' />
                <span className='sr-only'>Edit</span>
              </Button>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => onDelete?.(user)}
                title='Delete user'
                className='h-8 w-8 p-0 text-destructive hover:text-destructive'
              >
                <Trash2 className='h-4 w-4' />
                <span className='sr-only'>Delete</span>
              </Button>
            </div>
          )
        },
      },
    ],
    [onEdit, onDelete]
  )

  return (
    <div className='w-full'>
      <DataTable
        columns={columns}
        data={data}
        toolbar={(table) => (
          <UsersTableToolbar
            table={table}
            searchColumn='email'
            searchPlaceholder='Filter emails...'
          />
        )}
      />
    </div>
  )
}
