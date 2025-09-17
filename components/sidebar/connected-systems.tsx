import { Button } from "@/components/ui/button";
import type { ConnectedSystem } from "@/types";

interface ConnectedSystemsProps {
  systems: ConnectedSystem[];
}

const statusColors = {
  online: "bg-[#22c55e]",
  processing: "bg-[#eab308]",
  offline: "bg-[#ef4444]",
};

export function ConnectedSystems({ systems }: ConnectedSystemsProps) {
  return (
    <div>
      <h3 className="text-sm font-medium text-[#374151] mb-4">
        Connected Systems
      </h3>
      <div className="space-y-3">
        {systems.map((system) => (
          <div key={system.id} className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#374151] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">
                {system.icon}
              </span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-[#111827]">
                {system.name}
              </div>
              <div className="text-xs text-[#6b7280]">{system.lastSync}</div>
            </div>
            <div
              className={`w-2 h-2 ${statusColors[system.status]} rounded-full`}
            ></div>
          </div>
        ))}
      </div>
      <Button variant="ghost" className="w-full mt-4 text-[#3b82f6] text-sm">
        + Connect New System
      </Button>
    </div>
  );
}
