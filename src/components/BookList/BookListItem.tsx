import type { Book } from "@/types";

import Image from "next/image";
import { formatDate } from "@/lib/utils";

const BookListItem = ({ book }: { book: Book }) => {
  return (
    <div
      key={book.id}
      className="flex aspect-[5/6] w-72 flex-col overflow-hidden rounded-lg bg-white shadow-md"
    >
      <div className="relative h-48 w-full">
        <Image
          src={book.imageUrl ?? "/placeholder.png?height=200&width=300"}
          alt={`Cover of ${book.title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-grow flex-col justify-between p-4">
        <div>
          <h2 className="mb-1 text-xl font-semibold">{book.title}</h2>
          <p className="mb-2 italic text-gray-600">{book.author}</p>
        </div>
        <div className="mt-2 flex items-end justify-between text-sm text-gray-500">
          <span>{formatDate(book.published)}</span>
          <span>{book.pages} pages</span>
        </div>
      </div>
    </div>
  );
};
export default BookListItem;
