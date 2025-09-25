"use client";

import { useState, useCallback } from "react";
import type { Message, ChatState, ChatActions } from "@/types";
import { initialMessages } from "@/lib/mock-data";

export function useChat(): ChatState & ChatActions {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessageId, setStreamingMessageId] = useState<string | null>(
    null
  );

  const simulateStreaming = useCallback(
    (messageId: string, fullContent: string) => {
      const words = fullContent.split(" ");
      let currentIndex = 0;

      const streamInterval = setInterval(() => {
        if (currentIndex < words.length) {
          const partialContent = words.slice(0, currentIndex + 1).join(" ");
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === messageId
                ? { ...msg, content: partialContent, isStreaming: true }
                : msg
            )
          );
          currentIndex++;
        } else {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === messageId ? { ...msg, isStreaming: false } : msg
            )
          );
          setStreamingMessageId(null);
          setIsLoading(false);
          clearInterval(streamInterval);
        }
      }, 50);

      return () => clearInterval(streamInterval);
    },
    []
  );

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        type: "user",
        content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      // Simulate API delay
      setTimeout(() => {
        const assistantMessageId = (Date.now() + 1).toString();
        const assistantMessage: Message = {
          id: assistantMessageId,
          type: "assistant",
          content: "",
          timestamp: new Date(),
          isStreaming: true,
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setStreamingMessageId(assistantMessageId);

        // Simulate streaming response
        const responseContent =
          "I'll analyze your request and generate a comprehensive quantum analytics dashboard. Processing market data through neural networks... Quantum algorithms are now calculating predictive trends and real-time performance metrics for your financial portfolio. The dashboard will include advanced visualizations, risk assessments, and AI-powered insights.";

        simulateStreaming(assistantMessageId, responseContent);
      }, 800);
    },
    [isLoading, simulateStreaming]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    streamingMessageId,
    sendMessage,
    clearMessages,
  };
}
