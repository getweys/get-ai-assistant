import type { AIInsight, UsageMetric, ConnectedSystem, User } from "@/types";

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
    change: "+23%",
    color: "blue",
  },
  {
    id: "2",
    value: "2,847",
    label: "Reports Generated",
    additionalInfo: "Average Day: 32",
    color: "green",
  },
  {
    id: "3",
    value: "1,249h",
    label: "Time Saved",
    additionalInfo: "Up to 10 days",
    color: "gray",
  },
  {
    id: "4",
    value: "1,534",
    label: "Reports Exported",
    additionalInfo: "Format: PDF (65%)",
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
    status: "offline",
    lastSync: "Processing...",
  },
];

import { Message, SmartPrompt } from "@/types";

// Additional prompt sets for pagination
export const additionalPrompts: SmartPrompt[] = [
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

export const initialMessages: Message[] = [
  {
    id: "1",
    type: "assistant",
    content:
      "Welcome to the future of AI assistance! I'm your advanced NeuroAI companion, powered by quantum processing and real-time neural networks. I can analyze vast datasets, generate predictive insights, and create comprehensive visualizations in milliseconds.",
    timestamp: new Date("2024-12-15T10:54:17Z"),
  },
  {
    id: "2",
    type: "user",
    content:
      "Generate a comprehensive quantum analytics dashboard showing predictive market trends, neural network insights, and real-time performance metrics for our financial portfolio",
    timestamp: new Date("2024-12-15T10:55:04Z"),
  },
];
