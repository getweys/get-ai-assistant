import type {
  AIInsight,
  SmartPrompt,
  UsageMetric,
  ConnectedSystem,
  User,
} from "@/types";

export const mockUser: User = {
  id: "1",
  name: "Sarah Chen",
  role: "HR Manager",
  avatar: "/professional-woman-diverse.png",
};

export const mockInsights: AIInsight[] = [
  {
    id: "1",
    title: "Predictive Analytics",
    value: "+34%",
    description: "Revenue forecast accuracy improved",
    progress: 75,
    color: "blue",
  },
  {
    id: "2",
    title: "Neural Processing",
    value: "97.3%",
    description: "Pattern recognition accuracy",
    progress: 97,
    color: "green",
  },
  {
    id: "3",
    title: "Quantum Insights",
    value: "2,847",
    description: "Data correlations discovered",
    progress: 85,
    color: "gray",
  },
];

export const mockPrompts: SmartPrompt[] = [
  {
    id: "1",
    title: "Employee Attrition",
    description: "Analyze workforce retention patterns",
    icon: "👥",
    badge: {
      text: "🔥 High-Impact",
      variant: "high-impact",
    },
    color: "green",
  },
  {
    id: "2",
    title: "Customer Behavior",
    description: "Analyze retention rates for Q2 2024",
    icon: "📊",
    badge: {
      text: "⭐ Popular",
      variant: "popular",
    },
    color: "blue",
  },
];

export const mockMetrics: UsageMetric[] = [
  {
    id: "1",
    value: "47.2K",
    label: "Conversations",
    change: "+ 23%",
    color: "blue",
  },
  {
    id: "2",
    value: "2,847",
    label: "Reports Generated",
    color: "green",
  },
  {
    id: "3",
    value: "1,249h",
    label: "Time Saved",
    color: "gray",
  },
  {
    id: "4",
    value: "1,534",
    label: "Reports Exported",
    color: "orange",
  },
];

export const mockSystems: ConnectedSystem[] = [
  {
    id: "1",
    name: "Quantum Database",
    description: "Last sync: 0.02ms ago",
    icon: "🗄️",
    status: "online",
    lastSync: "Last sync: 0.02ms ago",
  },
  {
    id: "2",
    name: "Neural Network API",
    description: "Last sync: 0.01ms ago",
    icon: "🔗",
    status: "online",
    lastSync: "Last sync: 0.01ms ago",
  },
  {
    id: "3",
    name: "Analytics Engine",
    description: "Processing...",
    icon: "📊",
    status: "processing",
    lastSync: "Processing...",
  },
];
