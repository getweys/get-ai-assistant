import { Card, CardContent } from "@/components/atoms/card";
import { Button } from "@/components/atoms/button";
import { Badge } from "@/components/atoms/badge";
import { useState } from "react";
import type { SmartPrompt } from "@/types";
import { additionalPrompts } from "@/lib/mock-data";

interface SmartPromptsProps {
  prompts: SmartPrompt[];
}

const promptColors = {
  green: {
    bg: "bg-green-100 dark:bg-green-900/40",
    text: "text-green-600 dark:text-green-400",
    bar: "bg-green-600 dark:bg-green-400",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/40",
    text: "text-blue-600 dark:text-blue-400",
    bar: "bg-blue-600 dark:bg-blue-400",
  },
};

const badgeVariants = {
  "high-impact":
    "bg-orange-500 text-white border-0 hover:bg-orange-500 dark:bg-orange-600 dark:hover:bg-orange-600",
  popular:
    "bg-yellow-500 text-gray-900 border-0 hover:bg-yellow-500 dark:bg-yellow-600 dark:text-gray-900 dark:hover:bg-yellow-600",
};

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
        <h3 className="text-sm font-medium text-sidebar-foreground">
          Smart Prompts
        </h3>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-sidebar-foreground hover:bg-sidebar-accent rounded-full"
            onClick={handlePrevious}
          >
            <span className="text-xs">‹</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-sidebar-foreground hover:bg-sidebar-accent rounded-full"
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
              className={`border-sidebar-border bg-sidebar py-0 gap-0 rounded-t-sm ${
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
                    <div className="font-medium text-sm text-sidebar-foreground mb-1">
                      {prompt.title}
                    </div>
                    <div className="text-xs text-sidebar-foreground/70 mb-3">
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
