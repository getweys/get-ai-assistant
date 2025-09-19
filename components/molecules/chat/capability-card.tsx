import { Card, CardContent } from "@/components/atoms/card";

export enum CardColors {
  Blue = "blue",
  Green = "green",
  Gray = "gray",
  Orange = "orange",
}

interface CapabilityCardProps {
  icon: string;
  title: string;
  color: CardColors;
}

const capabilityColors = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-950/20",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
  },
  green: {
    bg: "bg-green-50 dark:bg-green-950/20",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-200 dark:border-green-800",
  },
  gray: {
    bg: "bg-gray-50 dark:bg-gray-950/20",
    text: "text-gray-600 dark:text-gray-400",
    border: "border-gray-200 dark:border-gray-800",
  },
  orange: {
    bg: "bg-orange-50 dark:bg-orange-950/20",
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-800",
  },
};

export function CapabilityCard({ icon, title, color }: CapabilityCardProps) {
  const colors = capabilityColors[color];

  return (
    <Card
      className={`${colors.bg} ${colors.border} hover:shadow-md transition-all duration-200 cursor-pointer`}
    >
      <CardContent className="p-4 py-0">
        <div className="flex items-center gap-2">
          <span className={colors.text}>{icon}</span>
          <span className={`text-sm font-medium ${colors.text}`}>{title}</span>
        </div>
      </CardContent>
    </Card>
  );
}
