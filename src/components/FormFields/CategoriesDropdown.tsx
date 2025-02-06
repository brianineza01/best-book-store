import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormControl } from "../ui/form";
import type { ControllerRenderProps } from "react-hook-form";
import { api } from "@/trpc/react";
import { Suspense } from "react";

export const CategoriesDropdown = ({
  field,
}: {
  field: ControllerRenderProps;
}) => {
  const [categories, { isFetching }] = api.category.getAll.useSuspenseQuery();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-full justify-between",
              !field.value && "text-muted-foreground",
            )}
          >
            {isFetching
              ? "Loading..."
              : field.value
                ? categories.find(
                    (category) => category.id.toString() === field.value,
                  )?.name
                : "Select category"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Suspense fallback={<div>Loading...</div>}>
          <Command>
            <CommandInput placeholder="Search category..." className="h-9" />
            <CommandList>
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup>
                {categories.map((category) => (
                  <CommandItem
                    value={category.name}
                    key={category.id}
                    onSelect={() => {
                      field.onChange(category.id.toString());
                    }}
                  >
                    {category.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        category.id.toString() === field.value
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </Suspense>
      </PopoverContent>
    </Popover>
  );
};
