import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Brain, BarChart3, Plus } from "lucide-react";
import type { ConnectedSystem } from "@/types";

interface ConnectedSystemsProps {
  systems: ConnectedSystem[];
}

const statusColors = {
  online: {
    dot: "bg-[#22c55e]",
    text: "text-[#22c55e]",
    label: "Active",
  },
  processing: {
    dot: "bg-[#eab308]",
    text: "text-[#eab308]",
    label: "Processing",
  },
  offline: {
    dot: "bg-[#ef4444]",
    text: "text-[#ef4444]",
    label: "Offline",
  },
};

const systemIcons = {
  "Quantum Database": Database,
  "Neural Network API": Brain,
  "Analytics Engine": BarChart3,
};

export function ConnectedSystems({ systems }: ConnectedSystemsProps) {
  return (
    <div>
      <h3 className="text-sm font-medium text-[#374151] mb-4">
        Connected Systems
      </h3>
      <div className="space-y-3">
        {systems.map((system) => {
          const status = statusColors[system.status];
          const IconComponent =
            systemIcons[system.name as keyof typeof systemIcons];

          return (
            <Card
              key={system.id}
              className="bg-[#F9FAFB] border-[#e5e7eb] shadow-sm py-0"
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
                    {IconComponent && (
                      <IconComponent className="h-4 w-4 text-[#374151]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[#111827]">
                      {system.name}
                    </div>
                    <div className="text-xs text-[#6b7280]">
                      {system.lastSync}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${status.dot} rounded-full`}></div>
                    <span className={`text-xs font-medium ${status.text}`}>
                      {status.label}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Card className="bg-white border-[#e5e7eb] border-dashed shadow-sm mt-4 py-0">
        <CardContent className="p-4">
          <Button
            variant="ghost"
            className="w-full h-auto p-0 text-[#374151] hover:bg-transparent"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Plus className="h-4 w-4 text-[#374151]" />
              </div>
              <span className="text-sm font-medium">Connect New System</span>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
