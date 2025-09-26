"use client";
import { Button } from "@/components/atoms/button";
import { Card, CardContent } from "@/components/atoms/card";
import { Database, Brain, BarChart3, Plus } from "lucide-react";
import type { ConnectedSystem } from "@/types";
import { useConnectedSystemQuery } from "@/redux/slice/apiSlices/connected-system.slice";

interface ConnectedSystemsProps {
  systems: ConnectedSystem[];
}

const statusColors = {
  online: {
    dot: "bg-green-500",
    text: "text-green-600 dark:text-green-400",
    label: "Active",
  },
  processing: {
    dot: "bg-yellow-500",
    text: "text-yellow-600 dark:text-yellow-400",
    label: "Processing",
  },
  offline: {
    dot: "bg-red-500",
    text: "text-red-600 dark:text-red-400",
    label: "Offline",
  },
};

const systemIcons = {
  "Quantum Database": Database,
  "Neural Network API": Brain,
  "Analytics Engine": BarChart3,
};

export function ConnectedSystems({ systems }: ConnectedSystemsProps) {
  const { data: connectedSystems, isLoading } = useConnectedSystemQuery({});
  const handleConnectSystems = () => {
    console.log(connectedSystems, "connectedSystems");
  };

  return (
    <div>
      <h3 className="text-sm font-medium text-sidebar-foreground mb-4">
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
              className="bg-sidebar-accent border-sidebar-border shadow-sm py-0"
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-sidebar-accent-foreground/10 rounded-lg flex items-center justify-center">
                    {IconComponent && (
                      <IconComponent className="h-4 w-4 text-sidebar-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-sidebar-foreground">
                      {system.name}
                    </div>
                    <div className="text-xs text-sidebar-foreground/70">
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
      <Card className="bg-sidebar border-sidebar-border border-dashed shadow-sm mt-4 py-0">
        <CardContent className="p-4" onClick={handleConnectSystems}>
          <Button
            variant="ghost"
            className="w-full h-auto p-0 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Plus className="h-4 w-4 text-sidebar-foreground" />
              </div>
              <span className="text-sm font-medium">Connect New System</span>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
