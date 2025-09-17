"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  isStreaming?: boolean
}

export default function AIAssistantDashboard() {
  const [messages, setMessages] = useState<Message[]>([
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
  ])

  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [streamingMessageId, setStreamingMessageId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateStreaming = (messageId: string, fullContent: string) => {
    const words = fullContent.split(" ")
    let currentIndex = 0

    const streamInterval = setInterval(() => {
      if (currentIndex < words.length) {
        const partialContent = words.slice(0, currentIndex + 1).join(" ")
        setMessages((prev) =>
          prev.map((msg) => (msg.id === messageId ? { ...msg, content: partialContent, isStreaming: true } : msg)),
        )
        currentIndex++
      } else {
        setMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, isStreaming: false } : msg)))
        setStreamingMessageId(null)
        setIsLoading(false)
        clearInterval(streamInterval)
      }
    }, 50) // Adjust speed as needed
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate API delay
    setTimeout(() => {
      const assistantMessageId = (Date.now() + 1).toString()
      const assistantMessage: Message = {
        id: assistantMessageId,
        type: "assistant",
        content: "",
        timestamp: new Date(),
        isStreaming: true,
      }

      setMessages((prev) => [...prev, assistantMessage])
      setStreamingMessageId(assistantMessageId)

      // Simulate streaming response
      const responseContent =
        "I'll analyze your request and generate a comprehensive quantum analytics dashboard. Processing market data through neural networks... Quantum algorithms are now calculating predictive trends and real-time performance metrics for your financial portfolio. The dashboard will include advanced visualizations, risk assessments, and AI-powered insights."

      simulateStreaming(assistantMessageId, responseContent)
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const SkeletonLoader = () => (
    <div className="flex items-start gap-4 animate-pulse">
      <div className="w-10 h-10 bg-[#e5e7eb] rounded-full"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-[#e5e7eb] rounded w-3/4"></div>
        <div className="h-4 bg-[#e5e7eb] rounded w-1/2"></div>
        <div className="h-4 bg-[#e5e7eb] rounded w-2/3"></div>
      </div>
    </div>
  )

  const TypingIndicator = () => (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
        <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
      </div>
      <span className="text-sm text-[#6b7280]">AI is thinking...</span>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-white border-r border-[#e2e8f0] p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="font-semibold text-[#111827]">AI Assistant Pro</span>
        </div>

        {/* AI Insights */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-[#374151] mb-4">AI Insights</h3>

          <Card className="mb-4 border-[#e5e7eb] bg-[#eff6ff]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#1e40af]">Predictive Analytics</span>
                <span className="text-sm font-medium text-[#3b82f6]">+34%</span>
              </div>
              <div className="text-xs text-[#3b82f6] mb-3">Revenue forecast accuracy improved</div>
              <div className="w-full bg-[#dbeafe] rounded-full h-2">
                <div className="bg-[#3b82f6] h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4 border-[#e5e7eb] bg-[#f0fdf4]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#166534]">Neural Processing</span>
                <span className="text-sm font-medium text-[#16a34a]">97.3%</span>
              </div>
              <div className="text-xs text-[#16a34a] mb-3">Pattern recognition accuracy</div>
              <div className="w-full bg-[#dcfce7] rounded-full h-2">
                <div className="bg-[#16a34a] h-2 rounded-full" style={{ width: "97%" }}></div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#e5e7eb] bg-[#f8fafc]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#374151]">Quantum Insights</span>
                <span className="text-sm font-medium text-[#374151]">2,847</span>
              </div>
              <div className="text-xs text-[#6b7280] mb-3">Data correlations discovered</div>
              <div className="w-full bg-[#e2e8f0] rounded-full h-2">
                <div className="bg-[#64748b] h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Smart Prompts */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-[#374151]">Smart Prompts</h3>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-[#6b7280]">
                <span className="text-xs">‹</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-[#6b7280]">
                <span className="text-xs">›</span>
              </Button>
            </div>
          </div>

          <div className="w-full h-1 bg-[#16a34a] rounded-full mb-4"></div>

          <Card className="mb-3 border-[#e5e7eb] bg-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#dcfce7] rounded-lg flex items-center justify-center">
                  <span className="text-[#16a34a] font-bold text-xs">👥</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-[#111827] mb-1">Employee Attrition</div>
                  <div className="text-xs text-[#6b7280] mb-3">Analyze workforce retention patterns</div>
                  <div className="flex items-center justify-between">
                    <Badge className="text-xs bg-[#f97316] text-white border-0 hover:bg-[#f97316]">
                      🔥 High-Impact
                    </Badge>
                    <span className="text-[#16a34a] text-sm">▶</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="w-full h-1 bg-[#3b82f6] rounded-full mb-3"></div>

          <Card className="border-[#e5e7eb] bg-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#dbeafe] rounded-lg flex items-center justify-center">
                  <span className="text-[#3b82f6] font-bold text-xs">📊</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-[#111827] mb-1">Customer Behavior</div>
                  <div className="text-xs text-[#6b7280] mb-3">Analyze retention rates for Q2 2024</div>
                  <div className="flex items-center justify-between">
                    <Badge className="text-xs bg-[#eab308] text-[#111827] border-0 hover:bg-[#eab308]">
                      ⭐ Popular
                    </Badge>
                    <span className="text-[#3b82f6] text-sm">▶</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Metrics */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-[#374151] mb-4">Usage Metrics</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-2xl font-bold text-[#3b82f6]">47.2K</div>
              <div className="text-xs text-[#6b7280]">Conversations</div>
              <div className="text-xs text-[#22c55e]">+ 23%</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#22c55e]">2,847</div>
              <div className="text-xs text-[#6b7280]">Reports Generated</div>
              <div className="text-xs text-[#6b7280]">Average Day: 32</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-2xl font-bold text-[#374151]">1,249h</div>
              <div className="text-xs text-[#6b7280]">Time Saved</div>
              <div className="text-xs text-[#3b82f6]">Up to 10 days</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#f97316]">1,534</div>
              <div className="text-xs text-[#6b7280]">Reports Exported</div>
              <div className="text-xs text-[#22c55e]">Format: PDF (65%)</div>
            </div>
          </div>
        </div>

        {/* Connected Systems */}
        <div>
          <h3 className="text-sm font-medium text-[#374151] mb-4">Connected Systems</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#374151] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">🗄️</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#111827]">Quantum Database</div>
                <div className="text-xs text-[#6b7280]">Last sync: 0.02ms ago</div>
              </div>
              <div className="w-2 h-2 bg-[#22c55e] rounded-full"></div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#374151] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">🔗</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#111827]">Neural Network API</div>
                <div className="text-xs text-[#6b7280]">Last sync: 0.01ms ago</div>
              </div>
              <div className="w-2 h-2 bg-[#22c55e] rounded-full"></div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#374151] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">📊</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#111827]">Analytics Engine</div>
                <div className="text-xs text-[#6b7280]">Processing...</div>
              </div>
              <div className="w-2 h-2 bg-[#eab308] rounded-full"></div>
            </div>
          </div>

          <Button variant="ghost" className="w-full mt-4 text-[#3b82f6] text-sm">
            + Connect New System
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-[#e2e8f0] p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-[#111827]">AI Assistant Pro</h1>
                <p className="text-sm text-[#3b82f6]">Advanced Quantum Intelligence • Real-time Data Analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <span className="text-sm">🔍</span>
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <span className="text-sm">🔔</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#ef4444] rounded-full"></div>
              </Button>
              <Button variant="ghost" size="sm">
                <span className="text-sm">⚙️</span>
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/professional-woman-diverse.png" />
                <AvatarFallback className="bg-[#e5e7eb] text-[#374151] font-medium">SC</AvatarFallback>
              </Avatar>
              <div className="text-right">
                <div className="text-sm font-medium text-[#111827]">Sarah Chen</div>
                <div className="text-xs text-[#6b7280]">HR Manager</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-1 p-6 overflow-y-auto bg-[#f8fafc] space-y-6">
          {/* Initial Capability Cards */}
          <div className="mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-[#3b82f6]">NeuroAI Initialized</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Card className="border-[#e5e7eb] bg-[#eff6ff] hover:shadow-md transition-all duration-200 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[#3b82f6]">📈</span>
                        <span className="text-sm font-medium text-[#3b82f6]">Advanced Analytics</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-[#e5e7eb] bg-[#f0fdf4] hover:shadow-md transition-all duration-200 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[#16a34a]">🧠</span>
                        <span className="text-sm font-medium text-[#16a34a]">Neural Processing</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-[#e5e7eb] bg-[#f8fafc] hover:shadow-md transition-all duration-200 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[#64748b]">⚛️</span>
                        <span className="text-sm font-medium text-[#64748b]">Quantum Computing</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-[#e5e7eb] bg-[#fff7ed] hover:shadow-md transition-all duration-200 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[#f97316]">⚡</span>
                        <span className="text-sm font-medium text-[#f97316]">Real-time Data</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-sm text-[#6b7280] mb-2">
                  Try: "Analyze market trends with quantum predictions" or "Generate neural network dashboard for
                  customer behavior"
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`animate-in slide-in-from-bottom-4 duration-500 ${index === 0 ? "delay-200" : ""}`}
            >
              {message.type === "assistant" ? (
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
                      <span className="text-xs text-[#9ca3af]">{message.timestamp.toLocaleTimeString()}</span>
                      {message.isStreaming && <TypingIndicator />}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end">
                  <div className="bg-[#3b82f6] text-white rounded-2xl rounded-br-md px-6 py-4 max-w-2xl shadow-sm">
                    <p className="text-balance leading-relaxed">{message.content}</p>
                    <div className="flex items-center justify-end gap-2 mt-2">
                      <Avatar className="w-5 h-5">
                        <AvatarImage src="/professional-woman-diverse.png" />
                        <AvatarFallback className="bg-[#e5e7eb] text-[#374151] font-medium text-xs">SC</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-blue-100">{message.timestamp.toLocaleTimeString()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {isLoading && !streamingMessageId && (
            <div className="animate-in slide-in-from-bottom-4 duration-300">
              <SkeletonLoader />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="border-t border-[#e2e8f0] p-6 bg-white">
          <div className="flex items-end gap-4">
            <div className="flex-1 relative">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your data, request analytics, or generate dashboards..."
                className="pr-20 border-[#e5e7eb] min-h-[44px] resize-none"
                disabled={isLoading}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <span className="text-sm">🎤</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <span className="text-sm">📎</span>
                </Button>
              </div>
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-50 min-h-[44px] px-6 transition-all duration-200"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="text-sm">Send</span>
              )}
            </Button>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-[#6b7280]">Press Enter to send • Shift+Enter for new line</p>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></div>
              <span className="text-xs text-[#22c55e]">Secure & Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
