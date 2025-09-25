import { forwardRef } from "react";
import { MessageBubble } from "@/components/molecules/chat/message-bubble";
import { WelcomeMessage } from "@/components/molecules/chat/welcome-message";
import type { Message } from "@/types";

interface ChatAreaProps {
  messages: Message[];
  userAvatar: string;
  userName: string;
}

export const ChatArea = forwardRef<HTMLDivElement, ChatAreaProps>(
  ({ messages, userAvatar, userName }, ref) => {
    return (
      <div
        ref={ref}
        className="flex-1 overflow-y-auto bg-background scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent dark:scrollbar-thumb-muted-foreground/30"
      >
        <div className="p-6 space-y-6 pb-8">
          <WelcomeMessage />

          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`animate-in slide-in-from-bottom-4 duration-500 ${
                index === 0 ? "delay-200" : ""
              }`}
            >
              <MessageBubble
                message={message}
                userAvatar={userAvatar}
                userName={userName}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
);

ChatArea.displayName = "ChatArea";
