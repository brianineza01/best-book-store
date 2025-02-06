"use client";

import { api } from "@/trpc/react";
import { useState } from "react";
import BookListItem from "@/components/BookList/BookListItem";
import { Button } from "@/components/ui/button";

export function CategoryBooks({ categorySlug }: { categorySlug: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = api.category.getBooksByCategory.useQuery({
    categorySlug,
    page: currentPage,
    limit: 100,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No books found</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.books.map((book) => <BookListItem key={book.id} book={book} />)}
      </div>

      {data?.totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          <Button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="flex items-center">
            Page {currentPage} of {data.totalPages}
          </span>
          <Button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === data.totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
