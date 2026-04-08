import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface AccordionData {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface CustomAccordionProps {
  items: AccordionData[];
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  className?: string;
}

export function CustomAccordion({
  items,
  type = 'single',
  collapsible = true,
  defaultValue,
  className
}: CustomAccordionProps) {
  return (
    <Accordion 
      type={type} 
      collapsible={type === 'single' ? collapsible : undefined} 
      defaultValue={defaultValue as any}
      className={className}
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
