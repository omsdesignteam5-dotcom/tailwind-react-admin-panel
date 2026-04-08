import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function AccordionMultiple() {
  return (
    <Accordion type='multiple' className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes! Set <code className='rounded bg-muted px-1 py-0.5 text-xs'>type="multiple"</code> to allow multiple items to be open at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>How do I customize it?</AccordionTrigger>
        <AccordionContent>
          You can add any content inside the accordion, including text,
          images, or even other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Can I control which items are open?</AccordionTrigger>
        <AccordionContent>
          Yes. Use the <code className='rounded bg-muted px-1 py-0.5 text-xs'>defaultValue</code> prop to control which items are open by default.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
