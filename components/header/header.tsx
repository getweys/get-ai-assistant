import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Maximize2,
  Brain,
  ChevronDown,
  Moon,
  LogOut,
  Menu,
} from "lucide-react";
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
  return (
    <div className="bg-white border-b border-[#e2e8f0] p-6 py-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger Menu */}
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-[#6b7280] hover:bg-gray-100 rounded-lg lg:hidden"
            onClick={onMobileMenuToggle}
          >
            <Menu className="h-4 w-4" />
          </Button>

          <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] rounded-xl flex items-center justify-center shadow-lg">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div className="hidden lg:block">
            <h1 className="text-xl font-semibold text-[#111827]">
              GET AI Assistant
            </h1>
            <p className="text-sm text-[#3b82f6]">
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
              className="hover:bg-gray-50 hover:text-gray-600 transition-colors duration-200"
              title="Search"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-gray-50 hover:text-gray-600 transition-colors duration-200"
              title="Fullscreen Chat"
              onClick={() => onFullscreen?.()}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 p-2 rounded-md hover:bg-transparent focus:bg-transparent focus:outline-none">
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-[#e5e7eb] text-[#374151] font-medium">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {/* Desktop: Show name and role */}
              <div className="text-left hidden lg:block">
                <div className="text-sm font-medium text-[#111827]">
                  {user.name}
                </div>
                <div className="text-xs text-[#6b7280]">{user.role}</div>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {/* Mobile: Show user info at top */}
              <div className="lg:hidden px-2 py-1.5 border-b border-[#e5e7eb]">
                <div className="text-sm font-medium text-[#111827]">
                  {user.name}
                </div>
                <div className="text-xs text-[#6b7280]">{user.role}</div>
              </div>
              <DropdownMenuItem
                onClick={() => {
                  console.log("Dark mode clicked");
                  onDarkMode?.();
                }}
              >
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark Mode</span>
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
