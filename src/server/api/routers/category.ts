import { db } from "@/server/db";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { books, categories } from "@/server/db/schema";
import { eq, sql } from "drizzle-orm";

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return db.query.categories.findMany();
  }),

  getAllWithBooks: publicProcedure.query(() => {
    return db.query.categories.findMany({
      with: {
        books: {
          limit: 10,
          orderBy: (books, { desc }) => [desc(books.createdAt)],
        },
      },
    });
  }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(({ input }) => {
      return db.insert(categories).values({
        name: input.name,
        slug: input.name.toLowerCase().replace(/ /g, "-"),
      });
    }),
  getBooksByCategory: publicProcedure
    .input(
      z.object({
        categorySlug: z.string(),
        page: z.number().default(1),
        limit: z.number().default(100),
      }),
    )
    .query(async ({ input }) => {
      const { categorySlug, page, limit } = input;
      const offset = (page - 1) * limit;

      const category = await db.query.categories.findFirst({
        where: eq(categories.slug, categorySlug),
      });

      if (!category) {
        throw new Error("Category not found");
      }

      const foundBooks = await db.query.books.findMany({
        where: eq(books.categoryId, category.id),
        limit,
        offset,
      });

      const totalFoundBooks = await db
        .select({ count: sql<number>`count(*)` })
        .from(books)
        .where(eq(books.categoryId, category.id));

      return {
        ...category,
        books: foundBooks,
        totalBooks: totalFoundBooks[0]?.count ?? 0,
        totalPages: Math.ceil((totalFoundBooks[0]?.count ?? 0) / limit),
      };
    }),
});
