import type { UsageMetric } from "@/types";

interface UsageMetricsProps {
  metrics: UsageMetric[];
}

const metricColors = {
  blue: "text-[#3b82f6]",
  green: "text-[#22c55e]",
  gray: "text-[#374151]",
  orange: "text-[#f97316]",
};

export function UsageMetrics({ metrics }: UsageMetricsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-[#374151] mb-4">Usage Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <div key={metric.id}>
            <div className={`text-2xl font-bold ${metricColors[metric.color]}`}>
              {metric.value}
            </div>
            <div className="text-xs text-[#6b7280]">{metric.label}</div>
            {metric.change && (
              <div
                className={`text-xs ${
                  metric.change.startsWith("+")
                    ? "text-[#22c55e]"
                    : "text-[#6b7280]"
                }`}
              >
                {metric.change}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
