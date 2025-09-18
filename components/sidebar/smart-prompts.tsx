import { Card, CardContent } from "@/components/atoms/card";
import { Button } from "@/components/atoms/button";
import { Badge } from "@/components/atoms/badge";
import { useState } from "react";
import type { SmartPrompt } from "@/types";

interface SmartPromptsProps {
  prompts: SmartPrompt[];
}

const promptColors = {
  green: {
    bg: "bg-[#dcfce7]",
    text: "text-[#16a34a]",
    bar: "bg-[#16a34a]",
  },
  blue: {
    bg: "bg-[#dbeafe]",
    text: "text-[#3b82f6]",
    bar: "bg-[#3b82f6]",
  },
};

const badgeVariants = {
  "high-impact": "bg-[#f97316] text-white border-0 hover:bg-[#f97316]",
  popular: "bg-[#eab308] text-[#111827] border-0 hover:bg-[#eab308]",
};

// Additional prompt sets for pagination
const additionalPrompts: SmartPrompt[] = [
  {
    id: "3",
    title: "Sales Performance",
    description: "Analyze quarterly sales trends and forecasts",
    icon: "📈",
    badge: {
      text: "🔥 High-Impact",
      variant: "high-impact",
    },
    color: "green",
  },
  {
    id: "4",
    title: "Market Analysis",
    description: "Deep dive into competitor landscape",
    icon: "🎯",
    badge: {
      text: "⭐ Popular",
      variant: "popular",
    },
    color: "blue",
  },
  {
    id: "5",
    title: "Financial Health",
    description: "Comprehensive financial risk assessment",
    icon: "💰",
    badge: {
      text: "🔥 High-Impact",
      variant: "high-impact",
    },
    color: "green",
  },
  {
    id: "6",
    title: "Product Analytics",
    description: "User engagement and feature adoption",
    icon: "📱",
    badge: {
      text: "⭐ Popular",
      variant: "popular",
    },
    color: "blue",
  },
];

export function SmartPrompts({ prompts }: SmartPromptsProps) {
  const [currentPage, setCurrentPage] = useState(0);

  // Combine original prompts with additional ones
  const allPrompts = [...prompts, ...additionalPrompts];
  const promptsPerPage = 2;
  const totalPages = Math.ceil(allPrompts.length / promptsPerPage);

  const startIndex = currentPage * promptsPerPage;
  const currentPrompts = allPrompts.slice(
    startIndex,
    startIndex + promptsPerPage
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[#374151]">Smart Prompts</h3>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-[#6b7280] hover:bg-gray-100 rounded-full"
            onClick={handlePrevious}
          >
            <span className="text-xs">‹</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-[#6b7280] hover:bg-gray-100 rounded-full"
            onClick={handleNext}
          >
            <span className="text-xs">›</span>
          </Button>
        </div>
      </div>

      {currentPrompts.map((prompt, index) => {
        const colors = promptColors[prompt.color];
        return (
          <div key={prompt.id}>
            <Card
              className={`border-[#e5e7eb] bg-white py-0 gap-0 rounded-t-sm ${
                index === currentPrompts.length - 1 ? "" : "mb-3"
              }`}
            >
              <div className={`w-full h-1 ${colors.bar} rounded-t-lg`}></div>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center`}
                  >
                    <span className={`${colors.text} font-bold text-xs`}>
                      {prompt.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[#111827] mb-1">
                      {prompt.title}
                    </div>
                    <div className="text-xs text-[#6b7280] mb-3">
                      {prompt.description}
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge
                        className={`text-xs ${
                          badgeVariants[prompt.badge.variant]
                        }`}
                      >
                        {prompt.badge.text}
                      </Badge>
                      <span className={`${colors.text} text-sm`}>▶</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
