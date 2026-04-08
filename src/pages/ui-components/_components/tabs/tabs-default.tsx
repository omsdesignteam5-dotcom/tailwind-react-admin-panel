import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TabsDefault() {
  return (
    <Tabs defaultValue='account' className='w-full max-w-md'>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <div className='rounded-lg border border-border p-4'>
          <h4 className='text-sm font-medium'>Account</h4>
          <p className='mt-1 text-sm text-muted-foreground'>
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value='password'>
        <div className='rounded-lg border border-border p-4'>
          <h4 className='text-sm font-medium'>Password</h4>
          <p className='mt-1 text-sm text-muted-foreground'>
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
      <TabsContent value='settings'>
        <div className='rounded-lg border border-border p-4'>
          <h4 className='text-sm font-medium'>Settings</h4>
          <p className='mt-1 text-sm text-muted-foreground'>
            Manage your preferences and application settings.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
