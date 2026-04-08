import { FileText } from 'lucide-react'

export function BlankPage() {
  return (
    <div className='flex h-[80vh] flex-col items-center justify-center gap-4 text-center'>
      <div className='rounded-full bg-muted p-4'>
        <FileText className='h-10 w-10 text-muted-foreground' />
      </div>
      <div>
        <h2 className='mt-4 text-3xl font-bold tracking-tight text-foreground'>
          Starter Template Page
        </h2>
        <p className='mt-2 text-muted-foreground max-w-[500px]'>
          This is a blank page ready for you to build your custom UI. Select components from the library and start building your feature.
        </p>
      </div>
    </div>
  )
}
