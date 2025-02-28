import Image from "next/image";
import type { Book } from "@/types";
import { BookDetailsPopup } from "@/components/BookDetails";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="w-[150px] shrink-0">
      <div className="group relative mb-2 aspect-[2/3] w-full cursor-pointer">
        <Image
          src={
            book.imageUrl?.length
              ? book.imageUrl
              : "/placeholder.svg?height=200&width=150"
          }
          alt={`Cover of ${book.title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="bg-eerie-black absolute inset-0 flex items-center justify-center bg-opacity-0 opacity-0 transition-all group-hover:bg-opacity-50 group-hover:opacity-100">
          <BookDetailsPopup
            bookId={book.id}
            buttonVariant="secondary"
            buttonSize="sm"
            buttonText="View"
          />
        </div>
      </div>
      <h3 className="truncate text-sm font-semibold">{book.title}</h3>
      <p className="text-slate-gray truncate text-xs">{book.author}</p>
    </div>
  );
}
