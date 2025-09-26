import { Card, CardContent } from "@/components/atoms/card";
import type { AIInsight } from "@/types";
import { useTranslations } from "next-intl";

interface AIInsightsProps {
  insights: AIInsight[];
}

const insightColors = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-950/20",
    text: "text-blue-900 dark:text-blue-100",
    value: "text-blue-700 dark:text-blue-300",
    valueBg: "bg-blue-100 dark:bg-blue-900/40",
    progress: "bg-blue-100 dark:bg-blue-900/40",
    bar: "bg-blue-600 dark:bg-blue-400",
  },
  green: {
    bg: "bg-green-50 dark:bg-green-950/20",
    text: "text-green-900 dark:text-green-100",
    value: "text-green-700 dark:text-green-300",
    valueBg: "bg-green-100 dark:bg-green-900/40",
    progress: "bg-green-100 dark:bg-green-900/40",
    bar: "bg-green-600 dark:bg-green-400",
  },
  gray: {
    bg: "bg-gray-50 dark:bg-gray-950/20",
    text: "text-gray-900 dark:text-gray-100",
    value: "text-gray-700 dark:text-gray-300",
    valueBg: "bg-gray-100 dark:bg-gray-900/40",
    progress: "bg-gray-100 dark:bg-gray-900/40",
    bar: "bg-gray-600 dark:bg-gray-400",
  },
};

export function AIInsights({ insights }: AIInsightsProps) {
  const t = useTranslations();
  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-sidebar-foreground mb-4">
        {t("aiInsights")}
      </h3>
      {insights.map((insight) => {
        const colors = insightColors[insight.color];
        return (
          <Card
            key={insight.id}
            className={`mb-4 border-sidebar-border ${colors.bg}`}
          >
            <CardContent className="p-4 py-0">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-medium ${colors.text}`}>
                  {t(insight.title)}
                </span>
                <span
                  className={`text-sm font-medium ${colors.value} px-2 py-1 rounded-full ${colors.valueBg}`}
                >
                  {insight.value}
                </span>
              </div>
              <div className={`text-xs ${colors.text} mb-3 opacity-70`}>
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
