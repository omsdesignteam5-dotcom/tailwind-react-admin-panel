import { Mail, Download, Edit, Trash2, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ButtonIcons() {
  return (
    <>
      <Button>
        <Mail className='h-4 w-4' />
        Send Email
      </Button>
      <Button variant='outline'>
        Download
        <Download className='h-4 w-4' />
      </Button>
      <Button variant='secondary'>
        <Edit className='h-4 w-4' />
        Edit
      </Button>
      <Button variant='destructive'>
        <Trash2 className='h-4 w-4' />
        Delete
      </Button>
      <Button variant='ghost'>
        Next
        <ChevronRight className='h-4 w-4' />
      </Button>
    </>
  )
}
