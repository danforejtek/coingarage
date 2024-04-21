import {
  Select as ShadcnSelect,
  SelectContent,
  // SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export const Select = ({
  label,
  className,
  options = [],
}: {
  label: string
  className: string
  options?: Array<{ value: string; label: string }>
}) => {
  return (
    <ShadcnSelect>
      <SelectTrigger className={cn(className)} >
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  )
}
