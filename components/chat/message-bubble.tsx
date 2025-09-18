import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Brain } from "lucide-react";
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
        <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] rounded-full flex items-center justify-center shadow-md">
          <Brain className="h-5 w-5 text-white" />
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
      <div className="flex flex-col items-end max-w-2xl mr-10">
        {/* Message Bubble */}
        <div className="bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] text-white rounded-2xl rounded-tr-sm px-6 py-4 shadow-sm relative">
          <p className="leading-relaxed">{message.content}</p>
        </div>

        {/* User Info Below Bubble */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-500">{userName}</span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500">
            {message.timestamp.toLocaleTimeString()}
          </span>
        </div>

        {/* Avatar on the right */}
        <div className="absolute -right-1 top-4 -translate-y-1/2">
          <Avatar className="w-8 h-8 border border-gray-200">
            <AvatarImage src={userAvatar} />
            <AvatarFallback className="bg-gray-100 text-gray-600 font-medium text-xs">
              {userName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
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
