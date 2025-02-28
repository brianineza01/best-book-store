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
} from "@/components/ui/dialog";
import { EditBookForm } from "./Form";
import { Pencil } from "lucide-react";

interface EditBookPopupProps {
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

export function EditBookPopup({
  bookId,
  buttonVariant = "outline",
  buttonSize = "default",
  buttonText = "Edit",
  showIcon = true,
}: EditBookPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} size={buttonSize}>
          {showIcon && <Pencil className="mr-2 h-4 w-4" />}
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4/5 md:max-w-4xl lg:max-w-5xl">
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
          <DialogDescription>
            Update the details of this book.
          </DialogDescription>
        </DialogHeader>
        <EditBookForm onSuccess={() => setIsOpen(false)} bookId={bookId} />
      </DialogContent>
    </Dialog>
  );
}
