import { ReactNode } from "react";

export type { Message, ChatState, ChatActions } from "./chat";
export type {
  AIInsight,
  SmartPrompt,
  UsageMetric,
  ConnectedSystem,
  User,
} from "./dashboard";
export interface socialLinksTypes {
  id: number;
  title: string;
  icon: ReactNode;
  onClick: () => void;
}

export type Nullable<T> = T | null;
