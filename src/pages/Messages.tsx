
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import UnreadCounter from "@/components/messages/UnreadCounter";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import NewMessageSheet from "@/components/messages/NewMessageSheet";
import TabContent from "@/components/messages/TabSection/TabContent";

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

            {["inbox", "wall", "sent"].map((tab) => (
              <TabsContent key={tab} value={tab}>
                <TabContent
                  type={tab as "inbox" | "wall" | "sent"}
                  messages={mockMessages}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
