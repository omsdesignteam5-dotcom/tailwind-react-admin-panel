import { forwardRef, type ComponentProps, type ComponentRef, type HTMLAttributes } from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { cn } from '@/lib/utils'

const AlertDialog = AlertDialogPrimitive.Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger
const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Overlay>,
  ComponentProps<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'dialog-overlay fixed inset-0 z-50 bg-black/50',
      className
    )}
    {...props}
  />
))
AlertDialogOverlay.displayName = 'AlertDialogOverlay'

const AlertDialogContent = forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Content>,
  ComponentProps<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'dialog-content fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2',
        'gap-4 border border-border bg-background p-6 shadow-lg sm:rounded-lg',
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = 'AlertDialogContent'

function AlertDialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function AlertDialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    />
  )
}

const AlertDialogTitle = forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Title>,
  ComponentProps<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
))
AlertDialogTitle.displayName = 'AlertDialogTitle'

const AlertDialogDescription = forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Description>,
  ComponentProps<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
AlertDialogDescription.displayName = 'AlertDialogDescription'

const AlertDialogAction = forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Action>,
  ComponentProps<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs',
      'hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...props}
  />
))
AlertDialogAction.displayName = 'AlertDialogAction'

const AlertDialogCancel = forwardRef<
  ComponentRef<typeof AlertDialogPrimitive.Cancel>,
  ComponentProps<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = 'AlertDialogCancel'

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
