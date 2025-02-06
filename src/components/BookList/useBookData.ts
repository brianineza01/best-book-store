import { api } from "@/trpc/react";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export const useBookData = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 50);

  const { data: books, isPending } = api.book.getAll.useQuery(
    searchQuery ? { searchQuery: debouncedSearchQuery } : undefined,
  );
  return { books, isPending, searchQuery, setSearchQuery };
};
