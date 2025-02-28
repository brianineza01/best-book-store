import type { Book } from "@/types";

import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { EditBookPopup } from "../EditBook/Popup";
import { BookDetailsPopup } from "../BookDetails/Popup";

const BookListItem = ({ book }: { book: Book }) => {
  return (
    <div
      key={book.id}
      className="group relative h-96 w-64 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:w-[36rem]"
    >
      {/* Book cover image - always visible */}
      <div className="absolute inset-0 h-full w-64">
        <Image
          src={
            book.imageUrl?.length
              ? book.imageUrl
              : "/placeholder.png?height=200&width=300"
          }
          alt={`Cover of ${book.title}`}
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Book details - visible on hover */}
      <div className="absolute inset-0 flex h-full w-full">
        {/* This div maintains the original width for the cover */}
        <div className="w-64 flex-shrink-0"></div>

        {/* This div contains the details that appear on hover */}
        <div className="bg-seasalt flex w-[calc(36rem-16rem)] flex-col justify-center gap-2 p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h2 className="mb-3 line-clamp-2 text-3xl font-semibold">
            {book.title}
          </h2>
          <p className="text-slate-gray line-clamp-1 text-xl italic">
            {book.author}
          </p>

          <p className="text-slate-gray flex justify-between text-base">
            <span>Published: {formatDate(book.published)}</span>
          </p>
          <p className="text-slate-gray flex justify-between text-base">
            <span>{book.pages} pages</span>
          </p>

          <div className="flex space-x-4">
            <BookDetailsPopup
              bookId={book.id}
              buttonText="Details"
              buttonSize="default"
              buttonVariant="secondary"
            />
            <EditBookPopup
              bookId={book.id}
              buttonText="Edit"
              buttonSize="default"
              buttonVariant="outline"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListItem;
