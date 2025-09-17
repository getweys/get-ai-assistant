import { MessageBubble } from "./message-bubble";
import { WelcomeMessage } from "./welcome-message";
import type { Message } from "@/types";

interface ChatAreaProps {
  messages: Message[];
  userAvatar: string;
  userName: string;
}

export function ChatArea({ messages, userAvatar, userName }: ChatAreaProps) {
  return (
    <div className="flex-1 p-6 overflow-y-auto bg-[#f8fafc] space-y-6">
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
  );
}
