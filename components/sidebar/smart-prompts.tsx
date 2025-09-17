import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

export function SmartPrompts({ prompts }: SmartPromptsProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[#374151]">Smart Prompts</h3>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-[#6b7280]"
          >
            <span className="text-xs">‹</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-[#6b7280]"
          >
            <span className="text-xs">›</span>
          </Button>
        </div>
      </div>

      {prompts.map((prompt, index) => {
        const colors = promptColors[prompt.color];
        return (
          <div key={prompt.id}>
            <div
              className={`w-full h-1 ${colors.bar} rounded-full mb-${
                index === prompts.length - 1 ? "0" : "3"
              }`}
            ></div>
            <Card
              className={`border-[#e5e7eb] bg-white ${
                index === prompts.length - 1 ? "" : "mb-3"
              }`}
            >
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
