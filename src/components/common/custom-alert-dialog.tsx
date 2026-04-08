import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export interface CustomAlertDialogProps {
  trigger?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function CustomAlertDialog({
  trigger,
  title,
  description,
  cancelText = "Cancel",
  confirmText = "Continue",
  onConfirm,
  open,
  onOpenChange
}: CustomAlertDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      {trigger && <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && <AlertDialogDescription>{description}</AlertDialogDescription>}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>{confirmText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
