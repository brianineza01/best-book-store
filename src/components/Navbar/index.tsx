"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/books" },
  { name: "Categories", href: "/categories" },
];

export function Navbar() {
  return (
    <nav className="border-french-gray bg-seasalt dark:bg-eerie-black dark:border-outer-space">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link
          href="/"
          className="text-outer-space dark:text-seasalt text-xl font-bold"
        >
          Best Book Store
        </Link>

        <div className="hidden space-x-4 md:flex">
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mt-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Button key={item.name} variant="ghost" asChild>
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
