import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Message } from "@/types";

interface MessageBubbleProps {
  message: Message;
  userAvatar: string;
  userName: string;
}

export function MessageBubble({
  message,
  userAvatar,
  userName,
}: MessageBubbleProps) {
  if (message.type === "assistant") {
    return (
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center">
          <span className="text-white font-bold">AI</span>
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border border-[#e5e7eb] max-w-4xl">
            <p className="text-[#374151] leading-relaxed">
              {message.content}
              {message.isStreaming && (
                <span className="inline-block w-2 h-5 bg-[#3b82f6] ml-1 animate-pulse"></span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-[#9ca3af]">
              {message.timestamp.toLocaleTimeString()}
            </span>
            {message.isStreaming && <TypingIndicator />}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      <div className="bg-[#3b82f6] text-white rounded-2xl rounded-br-md px-6 py-4 max-w-2xl shadow-sm">
        <p className="text-balance leading-relaxed">{message.content}</p>
        <div className="flex items-center justify-end gap-2 mt-2">
          <Avatar className="w-5 h-5">
            <AvatarImage src={userAvatar} />
            <AvatarFallback className="bg-[#e5e7eb] text-[#374151] font-medium text-xs">
              {userName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-blue-100">
            {message.timestamp.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-[#3b82f6] rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-2 h-2 bg-[#3b82f6] rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
      <span className="text-sm text-[#6b7280]">AI is thinking...</span>
    </div>
  );
}
