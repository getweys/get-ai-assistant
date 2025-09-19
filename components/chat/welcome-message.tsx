import { Card, CardContent } from "@/components/atoms/card";
import { Brain } from "lucide-react";
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
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-full flex items-center justify-center shadow-md">
          <Brain className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="bg-card rounded-2xl rounded-tl-md p-4 shadow-sm border border-border max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                NeuroAI Initialized
              </span>
            </div>

            <p className="text-card-foreground leading-relaxed mb-4">
              Welcome to the future of AI assistance! I'm your advanced NeuroAI
              companion, powered by quantum processing and real-time neural
              networks. I can analyze vast datasets, generate predictive
              insights, and create comprehensive visualizations in milliseconds.
            </p>

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

            <p className="text-sm text-muted-foreground">
              Try: "Analyze market trends with quantum predictions" or "Generate
              neural network dashboard for customer behavior"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
