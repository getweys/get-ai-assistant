export interface AIInsight {
  id: string;
  title: string;
  value: string;
  description: string;
  progress: number;
  color: "blue" | "green" | "gray";
}

export interface SmartPrompt {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: {
    text: string;
    variant: "high-impact" | "popular";
  };
  color: "green" | "blue";
}

export interface UsageMetric {
  id: string;
  value: string;
  label: string;
  change?: string;
  color: "blue" | "green" | "gray" | "orange";
}

export interface ConnectedSystem {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: "online" | "processing" | "offline";
  lastSync: string;
}

export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
}
