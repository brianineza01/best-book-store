"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { Book } from "@/types";
import BookListItem from "@/components/BookList/BookListItem";

interface CategoryRowProps {
  categoryName: string;
  books: Book[];
  categorySlug: string;
}

export function CategoryRow({
  categoryName,
  books,
  categorySlug,
}: CategoryRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{categoryName}</h2>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-500">{books.length} books</p>
          <Link href={`/categories/${categorySlug}`}>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-[-20px] top-1/2 z-10 -translate-y-1/2 transform"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div ref={scrollContainerRef} className="flex w-full space-x-4 p-4">
            {books.map((book) => (
              <BookListItem key={book.id} book={book} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-[-30px] top-1/2 z-10 -translate-y-1/2 transform"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
