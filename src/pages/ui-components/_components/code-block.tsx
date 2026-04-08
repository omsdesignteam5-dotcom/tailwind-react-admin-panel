import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export function CodeBlock({ code, language = 'tsx', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className=' border border-border bg-muted/30 overflow-hidden'>
      {/* Header */}
      <div className='flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2'>
        <span className='text-xs font-medium text-muted-foreground'>
          {title || language.toUpperCase()}
        </span>
        <Button
          variant='ghost'
          size='sm'
          className='h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground'
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check className='h-3.5 w-3.5 text-green-500' />
              Copied!
            </>
          ) : (
            <>
              <Copy className='h-3.5 w-3.5' />
              Copy code
            </>
          )}
        </Button>
      </div>
      {/* Code */}
      <div className='overflow-x-auto p-4'>
        <pre className='text-sm leading-relaxed'>
          <code className='text-foreground/90 whitespace-pre'>{code}</code>
        </pre>
      </div>
    </div>
  )
}

interface ComponentPreviewProps {
  title: string
  description?: string
  children: React.ReactNode
  code: string
  className?: string
}

export function ComponentPreview({
  title,
  description,
  children,
  code,
  className,
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className='rounded-xl border border-border bg-card overflow-hidden'>
      {/* Section Header */}
      <div className='border-b border-border px-6 py-4'>
        <h3 className='text-base font-semibold text-foreground'>{title}</h3>
        {description && (
          <p className='mt-1 text-sm text-muted-foreground'>{description}</p>
        )}
      </div>

      {/* Preview */}
      <div
        className={cn(
          'flex flex-wrap items-center gap-4 p-6 bg-background',
          className
        )}
      >
        {children}
      </div>

      {/* Toggle + Code */}
      <div className='border-t border-border'>
        <button
          onClick={() => setShowCode(!showCode)}
          className='flex w-full items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground'
        >
          {showCode ? 'Hide code' : 'Show code'}
        </button>
        {showCode && (
          <div className='border-t border-border'>
            <CodeBlock code={code} />
          </div>
        )}
      </div>
    </div>
  )
}
