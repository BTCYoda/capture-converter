
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import MessageList from "@/components/messages/MessageList";
import UnreadCounter from "@/components/messages/UnreadCounter";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Mock data - replace with real data source
const mockMessages = [
  {
    id: "1",
    content: "GM! Looking forward to our collaboration 🚀",
    senderAddress: "0x1234567890abcdef1234567890abcdef12345678",
    chainSymbol: "OP",
    timestamp: new Date(),
    privacyType: "public" as const,
    read: false,
    chainColor: "#ff0420",
  },
  {
    id: "2",
    content: "Secret message for the squad 😈",
    senderAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    chainSymbol: "TON",
    timestamp: new Date(Date.now() - 3600000),
    privacyType: "squad" as const,
    read: true,
    chainColor: "#0098EA",
  },
];

const Messages = () => {
  const { walletAddress } = useParams();
  const [activeTab, setActiveTab] = useState("inbox");

  // Mock unread counts - replace with real data
  const unreadCounts = {
    inbox: 3,
    wall: 1,
    sent: 0,
  };

  const filterMessages = (tab: string) => {
    // In a real implementation, this would filter based on the tab and wallet address
    return mockMessages;
  };

  return (
    <Layout>
      <div className="space-y-6">
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

          <TabsContent value="inbox" className="mt-4">
            <MessageList messages={filterMessages("inbox")} hasMore={true} onLoadMore={() => {}} />
          </TabsContent>

          <TabsContent value="wall" className="mt-4">
            <MessageList messages={filterMessages("wall")} hasMore={true} onLoadMore={() => {}} />
          </TabsContent>

          <TabsContent value="sent" className="mt-4">
            <MessageList messages={filterMessages("sent")} hasMore={true} onLoadMore={() => {}} />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Messages;
