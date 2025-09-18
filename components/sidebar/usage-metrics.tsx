import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import type { UsageMetric } from "@/types";

interface UsageMetricsProps {
  metrics: UsageMetric[];
}

const metricColors = {
  blue: {
    value: "text-blue-600 dark:text-blue-400",
    additional: "text-green-600 dark:text-green-400",
  },
  green: {
    value: "text-green-600 dark:text-green-400",
    additional: "text-green-600 dark:text-green-400",
  },
  gray: {
    value: "text-gray-600 dark:text-gray-400",
    additional: "text-blue-600 dark:text-blue-400",
  },
  orange: {
    value: "text-orange-600 dark:text-orange-400",
    additional: "text-green-600 dark:text-green-400",
  },
};

export function UsageMetrics({ metrics }: UsageMetricsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-sidebar-foreground mb-4">
        Usage Metrics
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => {
          const colors = metricColors[metric.color];
          return (
            <Card
              key={metric.id}
              className="bg-sidebar-accent border-sidebar-border shadow-sm py-0"
            >
              <CardContent className="p-4 px-3">
                <div className={`text-2xl font-bold ${colors.value} mb-1`}>
                  {metric.value}
                </div>
                <div className="text-xs text-sidebar-foreground/70 mb-2">
                  {metric.label}
                </div>
                {metric.change && (
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
                    <span className="text-xs text-green-600 dark:text-green-400">
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
