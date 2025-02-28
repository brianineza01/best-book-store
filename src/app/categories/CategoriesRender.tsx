"use client";

import { api } from "@/trpc/react";
import { CategoryRow } from "./CategoryRow";
import { CategoryRowSkeleton } from "./CategoryRowSkeleton";

export function CategoriesRender() {
  const { data: categories, isLoading } = api.category.getAllWithBooks.useQuery(
    undefined,
    {
      refetchOnMount: false,
    },
  );

  if (isLoading) {
    return <CategoryRowSkeleton />;
  }

  if (!categories || categories.length === 0) {
    return <div>No categories found</div>;
  }
  return (
    <>
      {categories.map((category) => (
        <CategoryRow
          key={category.id}
          categoryName={category.name}
          books={category.books}
          categorySlug={category.slug}
        />
      ))}
    </>
  );
}
