"use client";

import { useState, useRef, useEffect } from "react";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Header } from "@/components/header/header";
import { ChatArea } from "@/components/chat/chat-area";
import { ChatInput } from "@/components/chat/chat-input";
import { useChat } from "@/hooks/use-chat";
import {
  mockUser,
  mockInsights,
  mockPrompts,
  mockMetrics,
  mockSystems,
} from "@/lib/mock-data";

export default function AIAssistantDashboard() {
  const { messages, isLoading, sendMessage } = useChat();
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    await sendMessage(inputValue);
    setInputValue("");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      <Sidebar
        insights={mockInsights}
        prompts={mockPrompts}
        metrics={mockMetrics}
        systems={mockSystems}
      />

      <div className="flex-1 flex flex-col">
        <Header user={mockUser} />

        <ChatArea
          messages={messages}
          userAvatar={mockUser.avatar}
          userName={mockUser.name}
        />

        <div ref={messagesEndRef} />

        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSend={handleSendMessage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
