import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className='w-[220px]'>
        <SelectValue placeholder='Select a timezone' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value='est'>Eastern Standard Time (EST)</SelectItem>
          <SelectItem value='cst'>Central Standard Time (CST)</SelectItem>
          <SelectItem value='mst'>Mountain Standard Time (MST)</SelectItem>
          <SelectItem value='pst'>Pacific Standard Time (PST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value='gmt'>Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value='cet'>Central European Time (CET)</SelectItem>
          <SelectItem value='eet'>Eastern European Time (EET)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value='ist'>India Standard Time (IST)</SelectItem>
          <SelectItem value='cst_cn'>China Standard Time (CST)</SelectItem>
          <SelectItem value='jst'>Japan Standard Time (JST)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
