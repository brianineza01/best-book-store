"use client";

import { api } from "@/trpc/react";
import { CategoryRow } from "./categories/CategoryRow";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeCategories() {
  const { data: categories, isLoading } = api.category.getAllWithBooks.useQuery(
    undefined,
    {
      refetchOnMount: false,
    },
  );

  if (isLoading) {
    return (
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <div className="bg-platinum h-8 w-48 animate-pulse rounded-md" />
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {[1, 2, 3, 4].map((j) => (
                <div
                  key={j}
                  className="bg-platinum h-64 w-48 animate-pulse rounded-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-slate-gray mb-4">No categories available yet.</p>
        <Link href="/categories">
          <Button variant="outline">View All Categories</Button>
        </Link>
      </div>
    );
  }

  // Filter categories to only include those with more than 3 books
  const filteredCategories = categories.filter(
    (category) => category.books && category.books.length > 3,
  );

  if (filteredCategories.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-slate-gray mb-4">
          No categories with more than 3 books available.
        </p>
        <Link href="/categories">
          <Button variant="outline">View All Categories</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-12">
      {filteredCategories.slice(0, 3).map((category) => (
        <CategoryRow
          key={category.id}
          categoryName={category.name}
          books={category.books || []}
          categorySlug={category.slug}
        />
      ))}
      <div className="flex justify-center pt-4">
        <Link href="/categories">
          <Button variant="outline" size="lg">
            View All Categories
          </Button>
        </Link>
      </div>
    </div>
  );
}
