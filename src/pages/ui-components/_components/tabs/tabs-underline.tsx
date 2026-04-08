import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TabsUnderline() {
  return (
    <Tabs defaultValue='overview' className='w-full max-w-md'>
      <TabsList variant='underline'>
        <TabsTrigger value='overview' variant='underline'>
          Overview
        </TabsTrigger>
        <TabsTrigger value='analytics' variant='underline'>
          Analytics
        </TabsTrigger>
        <TabsTrigger value='reports' variant='underline'>
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value='overview'>
        <div className='rounded-lg border border-border p-4'>
          <p className='text-sm text-muted-foreground'>
            Overview content with underline tab variant.
          </p>
        </div>
      </TabsContent>
      <TabsContent value='analytics'>
        <div className='rounded-lg border border-border p-4'>
          <p className='text-sm text-muted-foreground'>
            Analytics data and charts would go here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value='reports'>
        <div className='rounded-lg border border-border p-4'>
          <p className='text-sm text-muted-foreground'>
            Generated reports and exports.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
