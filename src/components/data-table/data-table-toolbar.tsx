import { type Table } from '@tanstack/react-table'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DataTableViewOptions } from './data-table-view-options.tsx'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  searchColumn?: string
  searchPlaceholder?: string
}

export function DataTableToolbar<TData>({
  table,
  searchColumn,
  searchPlaceholder = 'Search...',
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const searchValue = searchColumn
    ? (table.getColumn(searchColumn)?.getFilterValue() as string) ?? ''
    : ''

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        {searchColumn && (
          <div className='relative'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(event) =>
                table.getColumn(searchColumn)?.setFilterValue(event.target.value)
              }
              className='h-9 w-[150px] pl-8 lg:w-[250px]'
            />
          </div>
        )}
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <X className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
