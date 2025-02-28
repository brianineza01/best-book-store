# Best Book Store - Next.js Project

A modern, responsive online bookstore built with Next.js, tRPC, and Tailwind CSS.

## Features

- 📚 Browse books by categories
- 🔍 Search functionality
- 📱 Responsive design for all devices
- 🚀 Fast page loads with Next.js
- 🔒 Type-safe API with tRPC

## Tech Stack

- **Framework**: Next.js
- **API**: tRPC
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: Shadcn UI

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/best-book-store-nextjs-ap-project.git
   cd best-book-store-nextjs-ap-project
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/bookstore
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable UI components
- `/src/server` - Server-side code including API routes and database
- `/src/trpc` - tRPC setup and configuration
- `/src/utils` - Utility functions
- `/src/types` - TypeScript type definitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
