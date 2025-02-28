"use client";

import { AddBookPopup } from "@/components/AddBook/Popup";
import BookList from "@/components/BookList";
import BookSkeleton from "@/components/BookList/Skeleton";
import SearchInput from "./SearchInput";
import { useBookData } from "@/components/BookList/useBookData";

import React, { Suspense } from "react";

const BooksWithSearch = () => {
  const { books, isPending, searchQuery, setSearchQuery } = useBookData();
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">All Books</h1>
        <div className="flex items-center gap-2">
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <AddBookPopup />
        </div>
      </div>
      <Suspense fallback={<BookSkeleton />}>
        {isPending ? <BookSkeleton /> : <BookList books={books ?? []} />}
      </Suspense>
    </div>
  );
};

export default BooksWithSearch;
