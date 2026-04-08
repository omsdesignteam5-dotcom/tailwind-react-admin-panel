import { ComponentPreview, CodeBlock } from './_components/code-block'
import TableBasic from './_components/data-table/table-basic'
import TableBasicCode from './_components/data-table/table-basic?raw'
import DataTableDemo from './_components/data-table/data-table-demo'
import DataTableDemoCode from './_components/data-table/data-table-demo?raw'

export function DataTablePage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Data Table
        </h2>
        <p className='text-muted-foreground mt-1'>
          Powerful table and datagrids built using TanStack Table.
        </p>
      </div>

      {/* Import */}
      <div className='space-y-3'>
        <h3 className='text-lg font-semibold text-foreground'>Import</h3>
        <CodeBlock
          title='Import UI'
          code={`import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table"`}
        />
        <CodeBlock
          title='Import Data Table Tooling'
          code={`import {
  DataTable,
  DataTablePagination,
  DataTableToolbar,
  DataTableColumnHeader,
  DataTableViewOptions,
} from "@/components/data-table"`}
        />
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-lg font-semibold text-foreground'>Examples</h3>

        {/* Basic Table */}
        <ComponentPreview
          title='Basic Table'
          description='A responsive table component without advanced features.'
          code={TableBasicCode}
        >
          <TableBasic />
        </ComponentPreview>

        {/* Data Table */}
        <ComponentPreview
          title='Advanced Data Table'
          description='Fully featured React Table with sorting, filtering, selection and pagination.'
          code={DataTableDemoCode}
        >
          <div className='w-full'>
             <DataTableDemo />
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
