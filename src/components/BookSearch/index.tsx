"use client";

import { useState } from "react";
import { useBookData } from "@/components/BookList/useBookData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import BookList from "@/components/BookList";

export function BookSearch() {
  const { books, isPending, searchQuery, setSearchQuery } = useBookData();
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchActive(true);
  };

  return (
    <div className="flex flex-col space-y-6">
      <form onSubmit={handleSearch} className="flex w-full gap-2">
        <div className="relative flex-grow">
          <Search className="text-slate-gray absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
          <Input
            type="text"
            placeholder="Search for books by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button type="submit">Search</Button>
      </form>

      {isSearchActive && (
        <div className="mt-4">
          {isPending ? (
            <div className="flex justify-center py-8">
              <div className="border-outer-space h-8 w-8 animate-spin rounded-full border-b-2 border-t-2"></div>
            </div>
          ) : books && books.length > 0 ? (
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                {books.length} {books.length === 1 ? "result" : "results"} found
              </h3>
              <BookList books={books} />
            </div>
          ) : (
            <p className="text-slate-gray py-8 text-center">
              {searchQuery
                ? "No books found matching your search."
                : "Enter a search term to find books."}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
