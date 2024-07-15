import { Button } from "@/components/ui/button";
import { Menu, Scale } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/scaffolding/theme-toggle";

function Navbar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background w-full px-4 sm:px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <Scale className="h-6 w-6" />
      <span className="sr-only">Rechtänderungen</span>
      <nav className="hidden flex-col gap-6 text-lg font-medium  sm:flex sm:flex-row sm:items-center sm:gap-5 sm:text-sm lg:gap-6"></nav>
      Tailwind Intro
      <div className="flex w-fit items-center gap-4 sm:ml-auto sm:gap-2 lg:gap-4">
        <ThemeToggle />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0  sm:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Navigationsmenü umschalten</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium"></nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Navbar;
