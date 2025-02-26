
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface MessageCardProps {
  message: {
    id: string;
    content: string;
    senderAddress: string;
    chainSymbol: string;
    timestamp: Date;
    privacyType: "public" | "squad" | "secret";
    read: boolean;
    chainColor: string;
  };
}

const MessageCard = ({ message }: MessageCardProps) => {
  const formatTimestamp = (date: Date) => {
    return `${format(date, "hh:mm a 'UTC'")}
${format(date, "yyyy.MM.dd")}`;
  };

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    toast.success("Address copied to clipboard");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-white shrink-0"
          style={{ backgroundColor: message.chainColor }}
        >
          {message.chainSymbol}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium cursor-pointer hover:text-gray-900 transition-colors">
                {message.senderAddress}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => copyAddress(message.senderAddress)}
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
            <div className="text-xs text-gray-500 text-right whitespace-pre leading-tight">
              {formatTimestamp(message.timestamp)}
            </div>
          </div>
          <p className="text-gray-900 mt-1 break-words">
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
