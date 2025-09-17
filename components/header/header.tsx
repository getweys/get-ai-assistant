import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { User } from "@/types";

interface HeaderProps {
  user: User;
}

export function Header({ user }: HeaderProps) {
  return (
    <div className="bg-white border-b border-[#e2e8f0] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#3b82f6] rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-[#111827]">
              AI Assistant Pro
            </h1>
            <p className="text-sm text-[#3b82f6]">
              Advanced Quantum Intelligence • Real-time Data Analysis
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <span className="text-sm">🔍</span>
          </Button>
          <Button variant="ghost" size="sm" className="relative">
            <span className="text-sm">🔔</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#ef4444] rounded-full"></div>
          </Button>
          <Button variant="ghost" size="sm">
            <span className="text-sm">⚙️</span>
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="bg-[#e5e7eb] text-[#374151] font-medium">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="text-right">
            <div className="text-sm font-medium text-[#111827]">
              {user.name}
            </div>
            <div className="text-xs text-[#6b7280]">{user.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
