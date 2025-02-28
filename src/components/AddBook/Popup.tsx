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
import { AddBookForm } from "./Form";

export function AddBookPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add New Book</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4/5 md:max-w-4xl lg:max-w-5xl">
        <DialogHeader>
          <DialogTitle>Add New Book</DialogTitle>
          <DialogDescription>
            Enter the details of the new book you want to add to the collection.
          </DialogDescription>
        </DialogHeader>
        <AddBookForm onSuccess={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
