
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import MessageList from "@/components/messages/MessageList";

const mockMessages = [
  {
    id: "1",
    content: "Thank you for all the copy trades hahahahah",
    senderAddress: "0xf6",
    chainSymbol: "OP",
    timestamp: new Date("2025-02-24T20:14:00Z"),
    privacyType: "public" as const,
    read: true,
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
  {
    id: "5",
    content: "you one real mfer",
    senderAddress: "0x9i",
    chainSymbol: "Θ",
    timestamp: new Date("2025-02-08T19:08:00Z"),
    privacyType: "public" as const,
    read: true,
    chainColor: "#0052FF",
  },
];

const SearchModuleThree = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4">
          <div className="relative mb-6">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8E9196] h-5 w-5" />
            <Input
              type="text"
              placeholder="0x67j6D4Kogj7Vu9Dsn7Y39f"
              className="pl-12 pr-4 py-6 w-full rounded-full border-none bg-white shadow-md hover:shadow-lg transition-shadow duration-200 focus:ring-2 focus:ring-[#9b87f5] focus:ring-opacity-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs defaultValue="send" className="w-full">
            <TabsList className="w-full grid grid-cols-2 gap-4 bg-transparent mb-6">
              <TabsTrigger
                value="send"
                className="text-base font-medium py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] data-[state=active]:shadow-none data-[state=active]:bg-transparent"
              >
                Send a Message
              </TabsTrigger>
              <TabsTrigger
                value="wall"
                className="text-base font-medium py-3 text-[#8E9196] data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] data-[state=active]:shadow-none data-[state=active]:bg-transparent"
              >
                Message Wall
              </TabsTrigger>
            </TabsList>

            <TabsContent value="send" className="mt-0">
              <div className="space-y-6">
                <h2 className="text-xl font-medium text-[#1A1F2C] px-2">Shout</h2>
                <div className="space-y-2">
                  <TokenItem symbol="OP" name="Optimism" amount="0.25" color="#FF0420" />
                  <TokenItem symbol="TON" name="TON" amount="3.50" color="#9b87f5" />
                  <TokenItem symbol="BASE" name="BASE" amount="50" color="#0052FF" />
                </div>

                <h2 className="text-xl font-medium text-[#1A1F2C] px-2 pt-4">Whisper</h2>
                <div className="space-y-2">
                  <TokenItem symbol="TON" name="TON" amount="20" color="#9b87f5" />
                  <TokenItem symbol="ETH" name="ETH" amount="50" color="#2D2D2D" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="wall" className="mt-0">
              <div className="space-y-2">
                <MessageList 
                  messages={mockMessages} 
                  hasMore={false}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

interface TokenItemProps {
  symbol: string;
  name: string;
  amount: string;
  color: string;
  textColor?: string;
}

const TokenItem = ({ symbol, name, amount, color, textColor = "white" }: TokenItemProps) => (
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center gap-3">
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium"
        style={{ backgroundColor: color, color: textColor }}
      >
        {symbol}
      </div>
      <div>
        <h3 className="font-medium text-[#1A1F2C]">{name}</h3>
        <p className="text-[#8E9196]">${amount}</p>
      </div>
    </div>
    <div className="w-2 h-2 rounded-full bg-[#9b87f5]" />
  </div>
);

export default SearchModuleThree;
