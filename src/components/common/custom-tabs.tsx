import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface CustomTabsProps {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
  listClassName?: string;
}

export function CustomTabs({ items, defaultValue, className, listClassName }: CustomTabsProps) {
  const defaultTab = defaultValue || (items.length > 0 ? items[0].value : undefined);
  
  return (
    <Tabs defaultValue={defaultTab} className={className}>
      <TabsList className={listClassName}>
        {items.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} disabled={tab.disabled}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
