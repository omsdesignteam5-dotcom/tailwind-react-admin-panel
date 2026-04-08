import { useMemo } from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DataTable,
  DataTableColumnHeader,
  DataTableToolbar,
} from '@/components/data-table'

// Data types & Sample data
type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const data: Payment[] = [
  { id: 'm5gr84i9', amount: 316, status: 'success', email: 'ken99@yahoo.com' },
  { id: '3u1reuv4', amount: 242, status: 'success', email: 'Abe45@gmail.com' },
  { id: 'derv1ws0', amount: 837, status: 'processing', email: 'Monserrat44@gmail.com' },
  { id: '5kma53ae', amount: 874, status: 'success', email: 'Silas22@gmail.com' },
  { id: 'bhqecj4p', amount: 721, status: 'failed', email: 'carmella@hotmail.com' },
  { id: 'bhqecj4x', amount: 100, status: 'pending', email: 'test@example.com' },
]

export default function DataTableDemo() {
  const columns = useMemo<ColumnDef<Payment>[]>(
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
        accessorKey: 'status',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => {
          const status = row.getValue('status') as string
          return (
            <Badge
              variant={
                status === 'success' ? 'success' :
                status === 'failed' ? 'destructive' : 'outline'
              }
              className='capitalize'
            >
              {status}
            </Badge>
          )
        },
      },
      {
        accessorKey: 'email',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title='Email' />
        ),
      },
      {
        accessorKey: 'amount',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title='Amount' />
        ),
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue('amount'))
          const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(amount)
          return <div className='font-medium'>{formatted}</div>
        },
      },
    ],
    []
  )

  return (
    <div className='w-full'>
      <DataTable
        columns={columns}
        data={data}
        toolbar={(table) => (
          <DataTableToolbar
            table={table}
            searchColumn='email'
            searchPlaceholder='Filter emails...'
          />
        )}
      />
    </div>
  )
}
