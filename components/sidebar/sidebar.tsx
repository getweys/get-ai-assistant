import { AIInsights } from "./ai-insights";
import { SmartPrompts } from "./smart-prompts";
import { UsageMetrics } from "./usage-metrics";
import { ConnectedSystems } from "./connected-systems";
import { Brain } from "lucide-react";
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
}

export function Sidebar({ insights, prompts, metrics, systems }: SidebarProps) {
  return (
    <div className="w-84 bg-white border-r border-[#e2e8f0] h-screen flex flex-col">
      {/* Header - Fixed */}
      <div className="flex items-center gap-3 p-6 pb-4 border-b border-[#e2e8f0]">
        <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] rounded-lg flex items-center justify-center shadow-md">
          <Brain className="h-4 w-4 text-white" />
        </div>
        <span className="font-semibold text-[#111827]">AI Assistant Pro</span>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
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
      </div>
    </div>
  );
}
