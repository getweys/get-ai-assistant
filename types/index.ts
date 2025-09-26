import { ReactNode } from "react";

export type { Message, ChatState, ChatActions } from "./chat";
export type {
  AIInsight,
  SmartPrompt,
  UsageMetric,
  ConnectedSystem,
  User,
} from "./dashboard";
export interface SocialLinksTypes {
  id: number;
  title: string;
  icon: ReactNode;
  onClick: VoidFunction;
}

export type Nullable<T> = T | null;
