"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { EditBookPopup } from "../EditBook/Popup";
import { Info, Trash2 } from "lucide-react";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { api } from "@/trpc/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface BookDetailsPopupProps {
  bookId: number;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonText?: string;
  showIcon?: boolean;
}

export function BookDetailsPopup({
  bookId,
  buttonVariant = "outline",
  buttonSize = "default",
  buttonText = "Details",
  showIcon = true,
}: BookDetailsPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { data: book, isLoading } = api.book.getById.useQuery(bookId);
  const { toast } = useToast();
  const router = useRouter();

  const deleteBook = api.book.deleteById.useMutation({
    onSuccess: () => {
      toast({
        title: "Book deleted",
        description: "The book has been successfully deleted.",
      });
      setIsOpen(false);
      router.refresh();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete book: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  const handleDelete = () => {
    deleteBook.mutate(bookId);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} size={buttonSize}>
          {showIcon && <Info className="mr-2 h-4 w-4" />}
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{book?.title}</DialogTitle>
          <DialogDescription>Book details</DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="border-outer-space h-8 w-8 animate-spin rounded-full border-b-2"></div>
          </div>
        ) : book ? (
          <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-[200px_1fr]">
            <div className="relative h-[250px] w-full overflow-hidden rounded-md">
              <Image
                src={
                  book.imageUrl?.length
                    ? book.imageUrl
                    : "/placeholder.png?height=200&width=300"
                }
                alt={`Cover of ${book.title}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <div>
                <h3 className="text-slate-gray text-sm font-medium">Title</h3>
                <p className="text-lg font-semibold">{book.title}</p>
              </div>
              <div>
                <h3 className="text-slate-gray text-sm font-medium">Author</h3>
                <p>{book.author}</p>
              </div>
              <div>
                <h3 className="text-slate-gray text-sm font-medium">
                  Published
                </h3>
                <p>{formatDate(book.published)}</p>
              </div>
              <div>
                <h3 className="text-slate-gray text-sm font-medium">Pages</h3>
                <p>{book.pages}</p>
              </div>
              {book.about && (
                <div>
                  <h3 className="text-slate-gray text-sm font-medium">About</h3>
                  <p className="text-sm">{book.about}</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-slate-gray py-4 text-center">Book not found</p>
        )}

        <DialogFooter className="flex justify-between sm:justify-between">
          <AlertDialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
          >
            <AlertDialogTrigger asChild>
              <Button variant="destructive" disabled={isLoading || !book}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  book &quot;{book?.title}&quot; from the database.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {book && (
            <EditBookPopup
              bookId={bookId}
              buttonVariant="outline"
              buttonText="Edit"
              showIcon={true}
            />
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
