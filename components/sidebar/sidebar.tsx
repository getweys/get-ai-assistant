import { AIInsights } from "./ai-insights";
import { SmartPrompts } from "./smart-prompts";
import { UsageMetrics } from "./usage-metrics";
import { ConnectedSystems } from "./connected-systems";
import { Brain, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type {
  AIInsight,
  SmartPrompt,
  UsageMetric,
  ConnectedSystem,
} from "@/types";

interface SidebarProps {
  insights: AIInsight[];
  prompts: SmartPrompt[];
  metrics: UsageMetric[];
  systems: ConnectedSystem[];
  isCollapsed?: boolean;
  isMobileMenuOpen?: boolean;
  onToggle?: () => void;
  onMobileToggle?: () => void;
}

export function Sidebar({
  insights,
  prompts,
  metrics,
  systems,
  isCollapsed = false,
  isMobileMenuOpen = false,
  onToggle,
  onMobileToggle,
}: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#00000080] z-40 lg:hidden"
          onClick={onMobileToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        ${isCollapsed ? "w-14" : "w-84"} 
        bg-white border-r border-[#e2e8f0] h-screen flex flex-col
        transition-all duration-300 ease-in-out
        ${
          isMobileMenuOpen
            ? "fixed left-0 top-0 z-50 lg:relative lg:z-auto"
            : "hidden lg:flex"
        }
        lg:flex
      `}
      >
        {/* Header - Fixed */}
        <div
          className={`flex items-center border-b border-[#e2e8f0] ${
            isCollapsed
              ? "justify-center p-3 pt-6 pb-4"
              : "justify-between p-6 pb-4"
          }`}
        >
          {isCollapsed ? (
            /* Collapsed Header - Centered Logo */
            <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] rounded-lg flex items-center justify-center shadow-md">
              <Brain className="h-4 w-4 text-white" />
            </div>
          ) : (
            /* Expanded Header - Logo + Text + Toggle */
            <>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] rounded-lg flex items-center justify-center shadow-md">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-[#111827]">
                  GET AI Assistant
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Mobile Close Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 text-[#6b7280] hover:bg-gray-100 rounded-full lg:hidden"
                  onClick={onMobileToggle}
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Desktop Toggle Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 text-[#6b7280] hover:bg-gray-100 rounded-full hidden lg:flex"
                  onClick={onToggle}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {!isCollapsed ? (
            <>
              <div className="p-6 pt-4 pb-0">
                <AIInsights insights={insights} />
              </div>
              <div className="border-t border-[#e5e7eb]"></div>
              <div className="p-6 pt-4 pb-0">
                <SmartPrompts prompts={prompts} />
              </div>
              <div className="border-t border-[#e5e7eb]"></div>
              <div className="p-6 pt-4 pb-0">
                <UsageMetrics metrics={metrics} />
              </div>
              <div className="border-t border-[#e5e7eb]"></div>
              <div className="p-6 pt-4 pb-8">
                <ConnectedSystems systems={systems} />
              </div>
            </>
          ) : (
            /* Collapsed State - Empty with expand button */
            <div className="flex flex-col items-center justify-end h-full p-4">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-[#6b7280] hover:bg-gray-100 rounded-full"
                onClick={onToggle}
                title="Expand sidebar"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
