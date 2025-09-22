"use client";

import { useState, useRef, useEffect } from "react";
import { Sidebar } from "@/components/organisms/sidebar";
import { Header } from "@/components/organisms/header";
import { ChatArea } from "@/components/organisms/chat-area";
import { ChatInput } from "@/components/organisms/chat-input";
import { ErrorBoundary } from "@/errors/error-boundary";
import { useChat } from "@/hooks/use-chat";
import {
  mockUser,
  mockInsights,
  mockPrompts,
  mockMetrics,
  mockSystems,
} from "@/lib/mock-data";

const AIAssistantDashboard = () => {
  const { messages, isLoading, sendMessage } = useChat();
  const [inputValue, setInputValue] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    await sendMessage(inputValue);
    setInputValue("");
  };

  const handleFullscreen = () => {
    try {
      setIsFullscreen(!isFullscreen);
    } catch (error) {
      console.error("Error toggling fullscreen:", error);
    }
  };

  const handleDarkMode = () => {
    console.log("Dark mode toggle clicked");
    // TODO: Implement dark mode functionality
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // TODO: Implement logout functionality
  };

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <ErrorBoundary>
      <div className="h-screen bg-primary flex">
        {!isFullscreen && (
          <Sidebar
            insights={mockInsights}
            prompts={mockPrompts}
            metrics={mockMetrics}
            systems={mockSystems}
            isCollapsed={isSidebarCollapsed}
            isMobileMenuOpen={isMobileMenuOpen}
            onToggle={handleSidebarToggle}
            onMobileToggle={handleMobileMenuToggle}
          />
        )}

        <div className="flex-1 flex flex-col h-screen">
          <Header
            user={
              mockUser || { id: "1", name: "User", role: "User", avatar: "" }
            }
            onFullscreen={handleFullscreen}
            onDarkMode={handleDarkMode}
            onLogout={handleLogout}
            onSidebarToggle={handleSidebarToggle}
            onMobileMenuToggle={handleMobileMenuToggle}
            isSidebarCollapsed={isSidebarCollapsed}
            isMobileMenuOpen={isMobileMenuOpen}
          />

          <div className="flex-1 overflow-hidden flex flex-col">
            <ChatArea
              ref={chatAreaRef}
              messages={messages || []}
              userAvatar={mockUser?.avatar || ""}
              userName={mockUser?.name || "User"}
            />
          </div>

          <div className="sticky bottom-0 bg-white border-t border-border-white shadow-lg">
            <ChatInput
              value={inputValue}
              onChange={setInputValue}
              onSend={handleSendMessage}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AIAssistantDashboard;
