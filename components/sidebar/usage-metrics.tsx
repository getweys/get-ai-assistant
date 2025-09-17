import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import type { UsageMetric } from "@/types";

interface UsageMetricsProps {
  metrics: UsageMetric[];
}

const metricColors = {
  blue: {
    value: "text-[#3b82f6]",
    additional: "text-[#22c55e]",
  },
  green: {
    value: "text-[#22c55e]",
    additional: "text-[#22c55e]",
  },
  gray: {
    value: "text-[#374151]",
    additional: "text-[#3b82f6]",
  },
  orange: {
    value: "text-[#f97316]",
    additional: "text-[#22c55e]",
  },
};

export function UsageMetrics({ metrics }: UsageMetricsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-[#374151] mb-4">Usage Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => {
          const colors = metricColors[metric.color];
          return (
            <Card
              key={metric.id}
              className="bg-[#F8FAFC] border-[#e5e7eb] shadow-sm py-0"
            >
              <CardContent className="p-4 px-3">
                <div className={`text-2xl font-bold ${colors.value} mb-1`}>
                  {metric.value}
                </div>
                <div className="text-xs text-[#6b7280] mb-2">
                  {metric.label}
                </div>
                {metric.change && (
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-[#22c55e]" />
                    <span className="text-xs text-[#22c55e]">
                      {metric.change}
                    </span>
                  </div>
                )}
                {metric.additionalInfo && (
                  <div className={`text-xs ${colors.additional} mt-1`}>
                    {metric.additionalInfo}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
