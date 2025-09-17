import { Card, CardContent } from "@/components/ui/card";

interface CapabilityCardProps {
  icon: string;
  title: string;
  color: "blue" | "green" | "gray" | "orange";
}

const capabilityColors = {
  blue: {
    bg: "bg-[#eff6ff]",
    text: "text-[#3b82f6]",
  },
  green: {
    bg: "bg-[#f0fdf4]",
    text: "text-[#16a34a]",
  },
  gray: {
    bg: "bg-[#f8fafc]",
    text: "text-[#64748b]",
  },
  orange: {
    bg: "bg-[#fff7ed]",
    text: "text-[#f97316]",
  },
};

export function CapabilityCard({ icon, title, color }: CapabilityCardProps) {
  const colors = capabilityColors[color];

  return (
    <Card
      className={`border-[#e5e7eb] ${colors.bg} hover:shadow-md transition-all duration-200 cursor-pointer`}
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
