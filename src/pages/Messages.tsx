
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import MessageList from "@/components/messages/MessageList";
import UnreadCounter from "@/components/messages/UnreadCounter";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Mail, Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Mock data with wallet grouping
const mockMessages = [
  {
    walletAddress: "0x67j6D4Kogj7Vu9Dsn7Y39f",
    messages: [
      {
        id: "1",
        content: "Thank you for all the copy trades hahahahah",
        senderAddress: "0xf6",
        chainSymbol: "OP",
        timestamp: new Date("2025-02-24T20:14:00Z"),
        privacyType: "public" as const,
        read: false,
        chainColor: "#FF0420",
      },
      {
        id: "2",
        content: "Dude you're a legend for that sweep. LFG! 🚀",
        senderAddress: "0xjP",
        chainSymbol: "V",
        timestamp: new Date("2025-02-24T15:10:00Z"),
        privacyType: "public" as const,
        read: true,
        chainColor: "#4A7FF7",
      },
    ],
  },
  {
    walletAddress: "0x4uP9K2mNp8Lq5Rt3Poh7",
    messages: [
      {
        id: "3",
        content: "You think we don't see you selling from side wallets? 👺",
        senderAddress: "0xHy",
        chainSymbol: "V",
        timestamp: new Date("2025-02-22T04:01:00Z"),
        privacyType: "public" as const,
        read: true,
        chainColor: "#4A7FF7",
      },
      {
        id: "4",
        content: "Full port to Solana, it's the only way 😈",
        senderAddress: "0xf6",
        chainSymbol: "OP",
        timestamp: new Date("2025-02-19T06:00:00Z"),
        privacyType: "public" as const,
        read: true,
        chainColor: "#FF0420",
      },
    ],
  },
];

const NewMessageSheet = () => {
  const [selectedChain, setSelectedChain] = useState("OP");
  const [privacyType, setPrivacyType] = useState<"public" | "squad" | "secret">("public");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Handle message sending logic here
    console.log("Sending message:", { selectedChain, privacyType, recipientAddress, message });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="absolute right-4 top-4">
          <Mail className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Message</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 py-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Chain</label>
            <select
              value={selectedChain}
              onChange={(e) => setSelectedChain(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="OP">Optimism</option>
              <option value="V">Base</option>
              <option value="TON">TON</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Privacy Level</label>
            <div className="flex gap-4">
              {[
                { type: "public", label: "Public" },
                { type: "squad", label: "Squad" },
                { type: "secret", label: "Secret" },
              ].map((privacy) => (
                <button
                  key={privacy.type}
                  onClick={() => setPrivacyType(privacy.type as typeof privacyType)}
                  className={`flex items-center gap-2 p-2 rounded-md border ${
                    privacyType === privacy.type ? "border-primary" : "border-gray-200"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      privacy.type === "public"
                        ? "bg-green-500"
                        : privacy.type === "squad"
                        ? "bg-blue-500"
                        : "bg-black"
                    }`}
                  />
                  <span>{privacy.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Recipient Address</label>
            <Input
              type="text"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              placeholder="0x..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="min-h-[100px]"
            />
          </div>
          <Button onClick={handleSend} className="w-full">
            Send Message
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Messages = () => {
  const { walletAddress } = useParams();
  const [activeTab, setActiveTab] = useState("inbox");

  // Mock unread counts
  const unreadCounts = {
    inbox: 3,
    wall: 1,
    sent: 0,
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="relative">
          <Tabs defaultValue="inbox" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full">
              <TabsTrigger value="inbox" className="flex-1">
                Inbox
                <UnreadCounter count={unreadCounts.inbox} className="ml-2" />
              </TabsTrigger>
              <TabsTrigger value="wall" className="flex-1">
                Wall
                <UnreadCounter count={unreadCounts.wall} className="ml-2" />
              </TabsTrigger>
              <TabsTrigger value="sent" className="flex-1">
                Sent
                <UnreadCounter count={unreadCounts.sent} className="ml-2" />
              </TabsTrigger>
            </TabsList>

            <NewMessageSheet />

            <TabsContent value="inbox" className="mt-4">
              <MessageList messages={mockMessages[0].messages} hasMore={true} onLoadMore={() => {}} />
            </TabsContent>

            <TabsContent value="wall" className="mt-4 space-y-6">
              {mockMessages.map((group) => (
                <div key={group.walletAddress} className="space-y-2">
                  <div className="flex items-center gap-2 px-4">
                    <div className="w-6 h-6 bg-gray-200 rounded-full" />
                    <WalletAddressGroup address={group.walletAddress} />
                  </div>
                  <MessageList messages={group.messages} hasMore={false} />
                </div>
              ))}
            </TabsContent>

            <TabsContent value="sent" className="mt-4">
              <MessageList messages={[]} hasMore={false} onLoadMore={() => {}} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

interface WalletAddressGroupProps {
  address: string;
}

const WalletAddressGroup = ({ address }: WalletAddressGroupProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-900">{address}</span>
    </div>
  );
};

export default Messages;
