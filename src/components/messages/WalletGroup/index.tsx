
import WalletHeader from "./WalletHeader";
import MessageList from "../MessageList";
import { Message } from "../types";

interface WalletGroupProps {
  walletAddress: string;
  messages: Message[];
}

const WalletGroup = ({ walletAddress, messages }: WalletGroupProps) => {
  return (
    <div className="space-y-2">
      <WalletHeader address={walletAddress} />
      <MessageList messages={messages} hasMore={false} />
    </div>
  );
};

export default WalletGroup;
