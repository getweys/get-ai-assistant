import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
  disabled?: boolean;
}

export function ChatInput({
  value,
  onChange,
  onSend,
  isLoading,
  disabled,
}: ChatInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="border-t border-[#e2e8f0] p-6 bg-white">
      <div className="flex items-end gap-4">
        <div className="flex-1 relative">
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about your data, request analytics, or generate dashboards..."
            className="pr-20 border-[#e5e7eb] min-h-[44px] resize-none"
            disabled={disabled || isLoading}
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
          onClick={onSend}
          disabled={!value.trim() || isLoading}
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
        <p className="text-xs text-[#6b7280]">
          Press Enter to send • Shift+Enter for new line
        </p>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></div>
          <span className="text-xs text-[#22c55e]">Secure & Encrypted</span>
        </div>
      </div>
    </div>
  );
}
