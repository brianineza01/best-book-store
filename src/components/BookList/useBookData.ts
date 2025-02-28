import { api } from "@/trpc/react";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export const useBookData = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 50);

  const {
    data: books,
    isLoading,
    refetch,
  } = api.book.getAll.useQuery(
    searchQuery ? { searchQuery: debouncedSearchQuery } : undefined,
    {
      refetchOnMount: false,
    },
  );
  return { books, isPending: isLoading, searchQuery, setSearchQuery, refetch };
};
