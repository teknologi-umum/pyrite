import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SelectItem = {
  key: string;
  value: string;
  label: string;
}
type SelectPrimaryProps = {
  placeholder: string;
  items: SelectItem[];
}

export function SelectPrimary({placeholder,items}: SelectPrimaryProps) {
  return (
    <Select>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.key} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}