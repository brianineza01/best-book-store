import Image from "next/image";
import type { Book } from "@/types";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="w-[150px] shrink-0">
      <div className="relative mb-2 aspect-[2/3] w-full">
        <Image
          src="/placeholder.svg?height=200&width=150"
          alt={`Cover of ${book.title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="truncate text-sm font-semibold">{book.title}</h3>
      <p className="truncate text-xs text-gray-500">{book.author}</p>
    </div>
  );
}
