"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/books" },
  { name: "Categories", href: "/categories" },
];

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would typically come from your auth state

  return (
    <nav className="border-b">
      <div className="mx-auto flex items-center justify-between py-3">
        <Link href="/" className="text-xl font-bold">
          Best Book Store
        </Link>

        <div className="hidden space-x-4 md:flex">
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>

        <div className="flex items-center">
          {isLoggedIn ? (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <Button variant="outline" onClick={() => setIsLoggedIn(true)}>
              Login
            </Button>
          )}
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
              {!isLoggedIn && (
                <Button variant="outline" onClick={() => setIsLoggedIn(true)}>
                  Login
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
