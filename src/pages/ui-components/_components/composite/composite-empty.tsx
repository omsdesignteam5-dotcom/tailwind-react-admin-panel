import { FileQuestion, Plus } from 'lucide-react'
import { EmptyState } from '@/components/empty-state'
import { Button } from '@/components/ui/button'

export default function CompositeEmpty() {
  return (
    <div className='w-full max-w-2xl mx-auto'>
      <EmptyState
        icon={<FileQuestion />}
        title='No courses found'
        description='You have not created any courses yet. Start by creating a new course module.'
        action={
          <Button>
            <Plus className='mr-2 h-4 w-4' />
            Create Course
          </Button>
        }
      />
    </div>
  )
}
