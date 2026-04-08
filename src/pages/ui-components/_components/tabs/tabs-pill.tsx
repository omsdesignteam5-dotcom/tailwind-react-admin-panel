import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TabsPill() {
  return (
    <Tabs defaultValue='all' className='w-full max-w-md'>
      <TabsList variant='pill'>
        <TabsTrigger value='all' variant='pill'>
          All
        </TabsTrigger>
        <TabsTrigger value='active' variant='pill'>
          Active
        </TabsTrigger>
        <TabsTrigger value='draft' variant='pill'>
          Draft
        </TabsTrigger>
        <TabsTrigger value='archived' variant='pill'>
          Archived
        </TabsTrigger>
      </TabsList>
      <TabsContent value='all'>
        <div className='rounded-lg border border-border p-4'>
          <p className='text-sm text-muted-foreground'>
            Showing all items with pill tab variant.
          </p>
        </div>
      </TabsContent>
      <TabsContent value='active'>
        <div className='rounded-lg border border-border p-4'>
          <p className='text-sm text-muted-foreground'>
            Only active items are displayed.
          </p>
        </div>
      </TabsContent>
      <TabsContent value='draft'>
        <div className='rounded-lg border border-border p-4'>
          <p className='text-sm text-muted-foreground'>
            Draft items waiting to be published.
          </p>
        </div>
      </TabsContent>
      <TabsContent value='archived'>
        <div className='rounded-lg border border-border p-4'>
          <p className='text-sm text-muted-foreground'>
            Archived items that are no longer active.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
