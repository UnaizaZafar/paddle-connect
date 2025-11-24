import { ChevronDownIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { flag } from "@/public/utils/svgs";

export function InputGroupDropdown() {
  return (
    <InputGroup className="rounded-10 h-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <InputGroupButton variant="ghost" className="pr-3! pl-2 py-2.5 text-sm gap-2">
            <span>{flag}</span>
            +97 <ChevronDownIcon className="size-3" />
          </InputGroupButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="[--radius:0.95rem]">
          <DropdownMenuItem>{flag} +92</DropdownMenuItem>
          <DropdownMenuItem>{flag} +91</DropdownMenuItem>
          <DropdownMenuItem>{flag} +93</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <InputGroupInput placeholder="(555) 000-0000" />
    </InputGroup>
  );
}
