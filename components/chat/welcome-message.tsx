import { Card, CardContent } from "@/components/ui/card";
import { CapabilityCard } from "./capability-card";

const capabilities = [
  { icon: "📈", title: "Advanced Analytics", color: "blue" as const },
  { icon: "🧠", title: "Neural Processing", color: "green" as const },
  { icon: "⚛️", title: "Quantum Computing", color: "gray" as const },
  { icon: "⚡", title: "Real-time Data", color: "orange" as const },
];

export function WelcomeMessage() {
  return (
    <div className="mb-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center">
          <span className="text-white font-bold">AI</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#3b82f6]">
              NeuroAI Initialized
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {capabilities.map((capability, index) => (
              <CapabilityCard
                key={index}
                icon={capability.icon}
                title={capability.title}
                color={capability.color}
              />
            ))}
          </div>

          <p className="text-sm text-[#6b7280] mb-2">
            Try: "Analyze market trends with quantum predictions" or "Generate
            neural network dashboard for customer behavior"
          </p>
        </div>
      </div>
    </div>
  );
}
