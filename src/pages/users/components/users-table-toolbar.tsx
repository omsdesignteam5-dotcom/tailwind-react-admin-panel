import { type Table } from '@tanstack/react-table'
import { Search, X, Download, Upload } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DataTableViewOptions } from '@/components/data-table/data-table-view-options'
import { CustomSelect } from '@/components/common'

interface UsersTableToolbarProps<TData> {
  table: Table<TData>
  searchColumn?: string
  searchPlaceholder?: string
}

export function UsersTableToolbar<TData>({
  table,
  searchColumn,
  searchPlaceholder = 'Search...',
}: UsersTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const searchValue = searchColumn
    ? (table.getColumn(searchColumn)?.getFilterValue() as string) ?? ''
    : ''

  const selectedRole = (table.getColumn('role')?.getFilterValue() as string) ?? 'all'
  const selectedStatus = (table.getColumn('status')?.getFilterValue() as string) ?? 'all'

  return (
    <div className='flex flex-wrap items-center justify-between gap-2'>
      <div className='flex flex-1 flex-wrap items-center gap-2'>
        {searchColumn && (
          <div className='relative w-full sm:w-auto'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(event) =>
                table.getColumn(searchColumn)?.setFilterValue(event.target.value)
              }
              className='h-9 w-full pl-8 sm:w-[150px] md:w-[220px] lg:w-[240px]'
            />
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-2 w-full sm:w-auto sm:flex sm:items-center">
          {/* Role Filter */}
          <CustomSelect
            value={selectedRole}
            onValueChange={(value) =>
              table.getColumn('role')?.setFilterValue(value === 'all' ? undefined : value)
            }
            className='w-full sm:w-[130px]'
            options={[
              { label: 'All Roles', value: 'all' },
              { label: 'Super Admin', value: 'superadmin' },
              { label: 'Admin', value: 'admin' },
              { label: 'Teacher', value: 'Teacher' },
              { label: 'Parent', value: 'Parent' },
              { label: 'Student', value: 'Student' }
            ]}
          />

          {/* Status Filter */}
          <CustomSelect
            value={selectedStatus}
            onValueChange={(value) =>
              table.getColumn('status')?.setFilterValue(value === 'all' ? undefined : value)
            }
            className='w-full sm:w-[130px]'
            options={[
              { label: 'All Status', value: 'all' },
              { label: 'Active', value: 'active' },
              { label: 'Inactive', value: 'inactive' },
              { label: 'Suspended', value: 'suspended' }
            ]}
          />
        </div>

        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-9 px-2 lg:px-3 text-sm'
          >
            Reset
            <X className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>

      <div className='flex items-end space-x-2'>
        <Button variant='outline' className='h-9 hidden md:flex'>
          <Upload className='mr-2 h-4 w-4' />
          Import CSV
        </Button>
        <Button variant='outline' className='h-9 hidden md:flex'>
          <Download className='mr-2 h-4 w-4' />
          Export CSV
        </Button>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
