import { Button } from "@/components/atoms/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import {
  Search,
  Maximize2,
  Brain,
  ChevronDown,
  Moon,
  Sun,
  LogOut,
  Menu,
} from "lucide-react";
import { useTheme } from "next-themes";
import type { User } from "@/types";

interface HeaderProps {
  user: User;
  onFullscreen?: () => void;
  onDarkMode?: () => void;
  onLogout?: () => void;
  onSidebarToggle?: () => void;
  onMobileMenuToggle?: () => void;
  isSidebarCollapsed?: boolean;
  isMobileMenuOpen?: boolean;
}

export function Header({
  user,
  onFullscreen,
  onDarkMode,
  onLogout,
  onSidebarToggle,
  onMobileMenuToggle,
  isSidebarCollapsed = false,
  isMobileMenuOpen = false,
}: HeaderProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    onDarkMode?.();
  };

  return (
    <div className="bg-background border-b border-border p-6 py-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger Menu */}
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-muted-foreground hover:bg-accent rounded-lg lg:hidden"
            onClick={onMobileMenuToggle}
          >
            <Menu className="h-4 w-4" />
          </Button>

          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div className="hidden lg:block">
            <h1 className="text-xl font-semibold text-foreground">
              GET AI Assistant
            </h1>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Advanced Quantum Intelligence • Real-time Data Analysis
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Search and Fullscreen icons grouped together */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              title="Search"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              title="Fullscreen Chat"
              onClick={() => onFullscreen?.()}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 p-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none">
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-muted text-muted-foreground font-medium">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {/* Desktop: Show name and role */}
              <div className="text-left hidden lg:block">
                <div className="text-sm font-medium text-foreground">
                  {user.name}
                </div>
                <div className="text-xs text-muted-foreground">{user.role}</div>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {/* Mobile: Show user info at top */}
              <div className="lg:hidden px-2 py-1.5 border-b border-border">
                <div className="text-sm font-medium text-foreground">
                  {user.name}
                </div>
                <div className="text-xs text-muted-foreground">{user.role}</div>
              </div>
              <DropdownMenuItem onClick={toggleTheme}>
                {theme === "dark" ? (
                  <Sun className="mr-2 h-4 w-4" />
                ) : (
                  <Moon className="mr-2 h-4 w-4" />
                )}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  console.log("Logout clicked");
                  onLogout?.();
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
