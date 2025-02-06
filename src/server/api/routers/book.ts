import { db } from "@/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { books } from "@/server/db/schema";
import { z } from "zod";
import { eq, ilike } from "drizzle-orm";

const bookRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z
        .object({
          searchQuery: z.string().optional(),
        })
        .optional(),
    )
    .query(({ input }) => {
      return db.query.books.findMany({
        where: input?.searchQuery
          ? ilike(books.title, `%${input.searchQuery}%`)
          : undefined,
      });
    }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        author: z.string(),
        published: z.date(),
        pages: z.number(),
        categoryId: z.number(),
        imageUrl: z.string().optional(),
      }),
    )
    .mutation(({ input }) => {
      return db.insert(books).values(input);
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string(),
        imageUrl: z.string().optional(),
      }),
    )
    .mutation(({ input }) => {
      return db.update(books).set(input).where(eq(books.id, input.id));
    }),

  getById: publicProcedure.input(z.number()).query(({ input }) => {
    return db.query.books.findFirst({ where: eq(books.id, input) });
  }),

  searchByTitle: publicProcedure.input(z.string()).query(({ input }) => {
    return db.query.books.findMany({
      where: ilike(books.title, `%${input}%`),
    });
  }),
});

export default bookRouter;
