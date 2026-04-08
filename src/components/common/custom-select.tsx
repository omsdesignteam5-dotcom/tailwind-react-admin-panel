
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectGroupOption {
  groupLabel: string;
  options: SelectOption[];
}

export interface CustomSelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  options?: SelectOption[];
  groups?: SelectGroupOption[];
  className?: string;
  disabled?: boolean;
}

export function CustomSelect({
  value,
  defaultValue,
  onValueChange,
  placeholder = "Select an option",
  options,
  groups,
  className,
  disabled
}: CustomSelectProps) {
  return (
    <Select value={value} defaultValue={defaultValue} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options && options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </SelectItem>
        ))}
        {groups && groups.map((g, idx) => (
          <SelectGroup key={idx}>
            <SelectLabel>{g.groupLabel}</SelectLabel>
            {g.options.map(opt => (
              <SelectItem key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
