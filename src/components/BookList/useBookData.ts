import { api } from "@/trpc/react";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export const useBookData = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const debouncedSearchQuery = useDebounce(searchQuery, 50);

  const {
    data: books,
    isLoading,
    refetch,
  } = api.book.getAll.useQuery(
    searchQuery || categoryId
      ? {
          ...(searchQuery && { searchQuery: debouncedSearchQuery }),
          ...(categoryId && { categoryId }),
        }
      : undefined,
    {
      refetchOnMount: false,
    },
  );
  return {
    books,
    isPending: isLoading,
    searchQuery,
    setSearchQuery,
    categoryId,
    setCategoryId,
    refetch,
  };
};
