
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";

const SearchModuleTwo = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="relative mb-6">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8E9196] h-5 w-5" />
          <Input
            type="text"
            placeholder="0x67j6D4Kogj7Vu9Dsn7Y39f"
            className="pl-12 pr-4 py-4 w-full rounded-full border-none bg-white shadow-md hover:shadow-lg transition-shadow duration-200 focus:ring-2 focus:ring-[#9b87f5] focus:ring-opacity-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="send" className="mb-6">
          <TabsList className="w-full grid grid-cols-2 gap-4 bg-transparent border-b border-[#F1F0FB]">
            <TabsTrigger 
              value="send"
              className="text-base font-medium px-4 py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] data-[state=active]:shadow-none data-[state=active]:bg-transparent transition-all duration-200"
            >
              Send a Message
            </TabsTrigger>
            <TabsTrigger 
              value="wall"
              className="text-base font-medium px-4 py-3 text-[#8E9196] data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] data-[state=active]:shadow-none data-[state=active]:bg-transparent transition-all duration-200"
            >
              Message Wall
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-4">
          <p className="text-[#1A1F2C] mb-4">
            This wallet hasn't been connected to Hermes. Here's how you can fix that:
          </p>
          <ol className="space-y-2">
            <li className="text-[#8E9196]">1. blahababala</li>
            <li>
              <a href="#" className="text-[#9b87f5] hover:underline">
                2. thisisalinkforsomesolution
              </a>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default SearchModuleTwo;
