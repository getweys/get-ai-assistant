import { AIInsights } from "./ai-insights";
import { SmartPrompts } from "./smart-prompts";
import { UsageMetrics } from "./usage-metrics";
import { ConnectedSystems } from "./connected-systems";
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
    <div className="w-80 bg-white border-r border-[#e2e8f0] p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">AI</span>
        </div>
        <span className="font-semibold text-[#111827]">AI Assistant Pro</span>
      </div>

      <AIInsights insights={insights} />
      <SmartPrompts prompts={prompts} />
      <UsageMetrics metrics={metrics} />
      <ConnectedSystems systems={systems} />
    </div>
  );
}
