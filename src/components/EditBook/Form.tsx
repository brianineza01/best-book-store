/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { z } from "zod";
import { CategoriesDropdown } from "../FormFields/CategoriesDropdown";
import { api } from "@/trpc/react";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useBookData } from "../BookList/useBookData";
import { useEffect } from "react";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  published: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use YYYY-MM-DD"),
  pages: z.number().min(1, "Pages must be at least 1"),
  categoryId: z.string().min(1, "Category is required"),
  imageUrl: z.string(),
  about: z.string().optional(),
});

export function EditBookForm({
  onSuccess,
  bookId,
}: {
  onSuccess?: () => void;
  bookId: number;
}) {
  const { data: book, isLoading } = api.book.getById.useQuery(bookId);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      published: "",
      pages: undefined,
      categoryId: "",
      imageUrl: "",
      about: "",
    },
  });

  // Update form values when book data is loaded
  useEffect(() => {
    if (book) {
      form.reset({
        title: book.title,
        author: book.author,
        published: book.published
          ? new Date(book.published).toISOString().split("T")[0]
          : "",
        pages: book.pages,
        categoryId: book.categoryId?.toString() ?? "",
        imageUrl: book.imageUrl ?? "",
        about: book.about ?? "",
      });
    }
  }, [book, form]);

  const { refetch } = useBookData();

  const { mutate: editBook, isPending } = api.book.editBookById.useMutation({
    onSuccess: () => {
      onSuccess?.();
      void refetch();
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    editBook({
      id: bookId,
      title: values.title,
      author: values.author,
      published: new Date(values.published),
      pages: values.pages,
      categoryId: Number(values.categoryId),
      imageUrl: values.imageUrl,
      about: values.about,
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <FormField
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Image</FormLabel>
                  <FormControl>
                    {field.value ? (
                      <div className="relative">
                        <Image
                          src={field.value}
                          alt="Book Image"
                          width={100}
                          height={100}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => field.onChange("")}
                        >
                          Change Image
                        </Button>
                      </div>
                    ) : (
                      <UploadDropzone
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          field.onChange(res.at(0)?.url);
                        }}
                        onUploadError={(error: Error) => {
                          // Do something with the error.
                          alert(`ERROR! ${error.message}`);
                        }}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter book title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Enter author name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="published"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Publication Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the publication date in YYYY-MM-DD format
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="pages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Pages</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) =>
                      field.onChange(Number.parseInt(e.target.value))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="categoryId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Category</FormLabel>
                <CategoriesDropdown field={field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="md:col-span-2">
            <FormField
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About the Book</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter a description or summary of the book"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a brief description or summary of the book
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
