import { api } from "@/trpc/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CategoriesDropdown = ({
  categoryId,
  setCategoryId,
}: {
  categoryId: number | null;
  setCategoryId: (id: number | null) => void;
}) => {
  const { data: categories } = api.category.getAll.useQuery();
  return (
    <Select
      onValueChange={(value) => {
        if (value === "all") {
          setCategoryId(null);
        } else {
          setCategoryId(Number(value));
        }
      }}
      value={categoryId === null ? "all" : categoryId.toString()}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        {categories?.map((category) => (
          <SelectItem key={category.id} value={category.id.toString()}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
