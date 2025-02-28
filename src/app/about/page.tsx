import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Best Book Store",
  description: "Learn about the technologies used in our book store project",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        About Our Book Store
      </h1>

      <div className="mx-auto max-w-6xl">
        <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2">
          <section className="bg-seasalt dark:bg-eerie-black prose prose-lg max-w-none rounded-lg p-6 shadow-md dark:prose-invert">
            <h2>Project Overview</h2>
            <p className="text-outer-space dark:text-french-gray">
              Best Book Store is a modern web application designed to showcase
              and manage a collection of books. It provides features for
              browsing books by categories, viewing book details, and adding new
              books to the collection.
            </p>
            <p className="text-outer-space dark:text-french-gray">
              This project was built as a demonstration of modern web
              development practices and technologies, with a focus on
              performance, user experience, and maintainability.
            </p>
          </section>

          <section className="bg-seasalt dark:bg-eerie-black prose prose-lg max-w-none rounded-lg p-6 shadow-md dark:prose-invert">
            <h2>Features</h2>
            <ul>
              <li>Browse books by categories</li>
              <li>View detailed information about each book</li>
              <li>Add new books with image uploads</li>
              <li>Responsive design for all device sizes</li>
              <li>Type-safe API calls with tRPC</li>
              <li>Modern UI with Shadcn components</li>
            </ul>
          </section>

          <section className="bg-seasalt dark:bg-eerie-black prose prose-lg max-w-none rounded-lg p-6 shadow-md dark:prose-invert">
            <h2>Architecture</h2>
            <p className="text-outer-space dark:text-french-gray">
              This project follows the Next.js App Router architecture, which
              enables:
            </p>
            <ul>
              <li>Server Components for improved performance and SEO</li>
              <li>Route Groups for organizing related routes</li>
              <li>Layouts for consistent UI across pages</li>
              <li>API Routes for backend functionality</li>
              <li>Type-safe data fetching with tRPC</li>
            </ul>
          </section>

          <section className="bg-seasalt dark:bg-eerie-black prose prose-lg max-w-none rounded-lg p-6 shadow-md dark:prose-invert">
            <h2>Tech Stack</h2>

            <div className="not-prose space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-medium">Frontend</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="font-medium">Next.js 15</span> - React
                    framework with server components, app router, and built-in
                    optimizations
                  </li>
                  <li>
                    <span className="font-medium">React 18</span> - UI library
                    with hooks and concurrent rendering
                  </li>
                  <li>
                    <span className="font-medium">TypeScript</span> - Type-safe
                    JavaScript for better developer experience
                  </li>
                  <li>
                    <span className="font-medium">Tailwind CSS</span> -
                    Utility-first CSS framework for rapid UI development
                  </li>
                  <li>
                    <span className="font-medium">Shadcn UI</span> - Accessible
                    and customizable UI components built with Radix UI
                  </li>
                  <li>
                    <span className="font-medium">React Hook Form</span> - Form
                    validation and handling
                  </li>
                  <li>
                    <span className="font-medium">Zod</span> - TypeScript-first
                    schema validation
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-medium">Backend</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="font-medium">tRPC</span> - End-to-end
                    typesafe API layer
                  </li>
                  <li>
                    <span className="font-medium">Drizzle ORM</span> -
                    TypeScript ORM for SQL databases
                  </li>
                  <li>
                    <span className="font-medium">PostgreSQL</span> - Relational
                    database for data storage
                  </li>
                  <li>
                    <span className="font-medium">NextAuth.js</span> -
                    Authentication solution for Next.js
                  </li>
                  <li>
                    <span className="font-medium">Uploadthing</span> - File
                    uploads for book images
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-medium">Development Tools</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="font-medium">ESLint</span> - Code linting
                    for JavaScript/TypeScript
                  </li>
                  <li>
                    <span className="font-medium">Prettier</span> - Code
                    formatting
                  </li>
                  <li>
                    <span className="font-medium">pnpm</span> - Fast, disk space
                    efficient package manager
                  </li>
                  <li>
                    <span className="font-medium">T3 Stack</span> - Opinionated
                    full-stack framework
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
