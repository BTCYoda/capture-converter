
import { useState } from "react";
import { format } from "date-fns";
import { type SquadMessage } from "@/types/squad";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

// Mock messages
const mockMessages: SquadMessage[] = [
  {
    id: "1",
    content: "GM squad! Ready for some alpha? 🤝",
    senderAddress: "0xP...",
    timestamp: new Date("2024-02-24T15:10:00Z"),
    squadId: "1"
  },
  {
    id: "2",
    content: "Market's looking bullish today!",
    senderAddress: "0xJ...",
    timestamp: new Date("2024-02-24T15:12:00Z"),
    squadId: "1"
  }
];

interface SquadMessagesProps {
  squadId: string;
}

const SquadMessages = ({ squadId }: SquadMessagesProps) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: SquadMessage = {
      id: Date.now().toString(),
      content: newMessage,
      senderAddress: "0xYou...",
      timestamp: new Date(),
      squadId
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="p-4">
      <div className="space-y-4 mb-4">
        {messages.map((message) => (
          <div key={message.id} className="flex gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gray-100 rounded-full" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{message.senderAddress}</span>
                <span className="text-xs text-gray-500">
                  {format(message.timestamp, "HH:mm a 'UTC'")}
                </span>
              </div>
              <p className="text-sm mt-1">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Button size="icon" onClick={handleSendMessage}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SquadMessages;
