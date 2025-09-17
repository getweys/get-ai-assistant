import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, Smile, Shield, Send } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { useState, useRef, useEffect } from "react";

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
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiButtonRef = useRef<HTMLButtonElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const handleEmojiClick = (emojiData: any) => {
    onChange(value + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node) &&
        emojiButtonRef.current &&
        !emojiButtonRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4 md:p-6 bg-white">
      <div className="flex items-center gap-2">
        <div className="flex-1 relative">
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about your data, request analytics, or generate dashboards..."
            className="pr-12 border-gray-200 min-h-[44px] resize-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
            disabled={disabled || isLoading}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              title="Voice input"
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <Button
            ref={emojiButtonRef}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            title="Emoji"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <Smile className="h-4 w-4" />
          </Button>

          {showEmojiPicker && (
            <div
              ref={emojiPickerRef}
              className="absolute bottom-10 right-0 z-50"
            >
              <EmojiPicker
                onEmojiClick={handleEmojiClick}
                width={300}
                height={400}
                searchDisabled={false}
                skinTonesDisabled={false}
                previewConfig={{
                  showPreview: true,
                  defaultEmoji: "1f60a",
                }}
              />
            </div>
          )}
        </div>

        <Button
          onClick={onSend}
          disabled={!value.trim() || isLoading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 h-8 w-8 p-0 rounded-lg transition-all duration-200 flex items-center justify-center"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Send className="w-4 h-4 text-white" />
          )}
        </Button>
      </div>

      <div className="flex items-center justify-between mt-3">
        <p className="text-xs text-gray-500">
          Press Enter to send • Shift+Enter for new line
        </p>
        <div className="flex items-center gap-1">
          <Shield className="h-3 w-3 text-green-600" />
          <span className="text-xs text-green-600">Secure & Encrypted</span>
        </div>
      </div>
    </div>
  );
}
