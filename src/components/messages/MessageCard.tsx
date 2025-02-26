
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

const PrivacyDot = ({ type }: { type: "public" | "squad" | "secret" }) => {
  const colors = {
    public: "bg-green-500",
    squad: "bg-blue-500",
    secret: "bg-black",
  };

  return <div className={`w-2 h-2 rounded-full ${colors[type]}`} />;
};

const MessageCard = ({ message }: MessageCardProps) => {
  return (
    <div
      className={cn(
        "p-4 border-b border-gray-100 transition-colors",
        !message.read && "bg-gray-50"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white"
              style={{ backgroundColor: message.chainColor }}
            >
              {message.chainSymbol}
            </div>
            <WalletAddress address={message.senderAddress} />
            <PrivacyDot type={message.privacyType} />
          </div>
          <p className="text-gray-900 whitespace-pre-wrap break-words">
            {message.content}
          </p>
          <span className="text-xs text-gray-500 mt-2 block">
            {format(message.timestamp, "MMM d, yyyy 'at' h:mm a")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
