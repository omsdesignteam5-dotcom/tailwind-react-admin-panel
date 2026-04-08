import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DropDownItem {
  id: string | number;
  label: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
}

export interface CustomDropdownProps {
  label: React.ReactNode;
  items: DropDownItem[];
  menuLabel?: React.ReactNode;
  triggerType?: 'button' | 'link' | 'custom';
  customTrigger?: React.ReactNode; 
  triggerClassName?: string;
  showChevron?: boolean;
  chevronPosition?: 'left' | 'right';
  chevronIcon?: React.ReactNode; 
}

export function CustomDropdown({
  label,
  items,
  menuLabel,
  triggerType = 'button',
  customTrigger,
  triggerClassName,
  showChevron = true,
  chevronPosition = 'right',
  chevronIcon
}: CustomDropdownProps) {
  
  // group-data-[state=open]:rotate-180 will auto-rotate the chevron when menu is open!
  const DefaultChevron = <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />;
  const Chevron = chevronIcon || DefaultChevron;

  const renderTriggerContent = () => (
    <>
      {showChevron && chevronPosition === 'left' && <span className="mr-2">{Chevron}</span>}
      {label}
      {showChevron && chevronPosition === 'right' && <span className="ml-2">{Chevron}</span>}
    </>
  );

  return (
    <DropdownMenu>
      {triggerType === 'custom' && customTrigger ? (
        <DropdownMenuTrigger asChild>
          {customTrigger}
        </DropdownMenuTrigger>
      ) : (
        <DropdownMenuTrigger asChild>
          {triggerType === 'link' ? (
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className={cn("group flex items-center text-sm font-medium hover:underline cursor-pointer", triggerClassName)}
            >
             {renderTriggerContent()}
            </a>
          ) : (
            <button 
              className={cn("group flex items-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md transition-colors hover:bg-primary/90", triggerClassName)}
            >
              {renderTriggerContent()}
            </button>
          )}
        </DropdownMenuTrigger>
      )}

      <DropdownMenuContent>
        {menuLabel && (
          <>
            <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {items.map((item) => (
          <DropdownMenuItem 
            key={item.id} 
            onClick={item.onClick}
            disabled={item.disabled}
            asChild={!!item.href}
          >
            {item.href ? (
              <a href={item.href} className="flex items-center w-full cursor-pointer">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </a>
            ) : (
              <div className="flex items-center w-full cursor-pointer">
                 {item.icon && <span className="mr-2">{item.icon}</span>}
                 {item.label}
              </div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
