
import MessageList from "../MessageList";
import WalletGroup from "../WalletGroup";
import { Message } from "../types";

interface TabContentProps {
  type: "inbox" | "wall" | "sent";
  messages: Array<{
    walletAddress: string;
    messages: Message[];
  }>;
}

const TabContent = ({ type, messages }: TabContentProps) => {
  if (type === "wall") {
    return (
      <div className="mt-4 space-y-6">
        {messages.map((group) => (
          <WalletGroup
            key={group.walletAddress}
            walletAddress={group.walletAddress}
            messages={group.messages}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4">
      <MessageList
        messages={type === "inbox" ? messages[0]?.messages || [] : []}
        hasMore={type === "inbox"}
        onLoadMore={() => {}}
      />
    </div>
  );
};

export default TabContent;
