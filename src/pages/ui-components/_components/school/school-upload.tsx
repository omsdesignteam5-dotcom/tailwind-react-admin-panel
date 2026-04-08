import { useState } from 'react'
import { FileUpload } from '@/components/file-upload'

export default function SchoolUpload() {
  const [files, setFiles] = useState<File[]>([])

  return (
    <div className='w-full max-w-md'>
      <FileUpload
        accept='.pdf,.doc,.docx,.jpg,.png'
        multiple
        maxSizeMB={5}
        onFilesChange={setFiles}
      />
      {files.length > 0 && (
        <p className='mt-2 text-sm text-muted-foreground text-center'>
          {files.length} file(s) selected
        </p>
      )}
    </div>
  )
}
