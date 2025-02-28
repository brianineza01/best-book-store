import type { books, categories } from "@/server/db/schema";

export type Category = typeof categories.$inferSelect;
export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;
export type BookWithCategory = Book & {
  category: Category;
};
