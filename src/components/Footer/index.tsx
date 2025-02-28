import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Best Book Store. All rights reserved.
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-center gap-2 md:justify-end">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  "text-sm text-muted-foreground hover:text-foreground",
                )}
                href="/"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  "text-sm text-muted-foreground hover:text-foreground",
                )}
                href="/about"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  "text-sm text-muted-foreground hover:text-foreground",
                )}
                href="/books"
              >
                Books
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  "text-sm text-muted-foreground hover:text-foreground",
                )}
                href="/categories"
              >
                Categories
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </footer>
  );
}
