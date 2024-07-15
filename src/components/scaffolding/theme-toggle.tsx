import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { useTheme } from "@/providers/theme-provider";
import Icon from "@mdi/react";
import { mdiWeatherNight } from "@mdi/js";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icon
            path={mdiWeatherNight}
            horizontal={true}
            size={1}
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 hidden transition-all dark:rotate-0 dark:scale-100 dark:flex"
          />
          <span className="sr-only">Thema wählen</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dunkel
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Hell
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System folgen
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
