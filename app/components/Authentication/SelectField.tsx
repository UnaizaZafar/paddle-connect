import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo({ width = "full" }: { width?: string }) {
  return (
    <Select>
      <SelectTrigger className={`w-${width} py-2.5 px-3 h-10!`}>
        <SelectValue placeholder="City" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>City</SelectLabel>
          <SelectItem value="Karachi">Karachi</SelectItem>
          <SelectItem value="Lahore">Lahore</SelectItem>
          <SelectItem value="islamabad">Islamabad</SelectItem>
          <SelectItem value="multan">Multan</SelectItem>
          <SelectItem value="peshawar">Peshawar</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
