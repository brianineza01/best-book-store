"use client";

import type { Book } from "@/types";
import BookListItem from "./BookListItem";

export default function BookList({ books }: { books: Book[] }) {
  if (!books?.length) {
    return <p className="text-slate-gray text-center">No books available.</p>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {books.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </div>
  );
}
