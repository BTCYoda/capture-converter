
import { cn } from "@/lib/utils";
import WalletAddress from "./WalletAddress";
import { format } from "date-fns";

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
    const now = new Date();
    return `${format(date, "hh:mm a 'UTC'")}
${format(date, "yyyy.MM.dd")}`;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-white shrink-0"
          style={{ backgroundColor: message.chainColor }}
        >
          {message.chainSymbol}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="text-sm text-gray-600">
              <span className="font-medium">{message.senderAddress}</span> said..
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
