import { Card, CardContent } from "@/components/ui/card";
import type { AIInsight } from "@/types";

interface AIInsightsProps {
  insights: AIInsight[];
}

const insightColors = {
  blue: {
    bg: "bg-[#eff6ff]",
    text: "text-[#1e40af]",
    value: "text-[#3b82f6]",
    progress: "bg-[#dbeafe]",
    bar: "bg-[#3b82f6]",
  },
  green: {
    bg: "bg-[#f0fdf4]",
    text: "text-[#166534]",
    value: "text-[#16a34a]",
    progress: "bg-[#dcfce7]",
    bar: "bg-[#16a34a]",
  },
  gray: {
    bg: "bg-[#f8fafc]",
    text: "text-[#374151]",
    value: "text-[#374151]",
    progress: "bg-[#e2e8f0]",
    bar: "bg-[#64748b]",
  },
};

export function AIInsights({ insights }: AIInsightsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-[#374151] mb-4">AI Insights</h3>
      {insights.map((insight) => {
        const colors = insightColors[insight.color];
        return (
          <Card
            key={insight.id}
            className={`mb-4 border-[#e5e7eb] ${colors.bg}`}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-medium ${colors.text}`}>
                  {insight.title}
                </span>
                <span className={`text-sm font-medium ${colors.value}`}>
                  {insight.value}
                </span>
              </div>
              <div className={`text-xs ${colors.value} mb-3`}>
                {insight.description}
              </div>
              <div className={`w-full ${colors.progress} rounded-full h-2`}>
                <div
                  className={`${colors.bar} h-2 rounded-full`}
                  style={{ width: `${insight.progress}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
