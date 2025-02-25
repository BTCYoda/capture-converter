
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

const tokens = [
  { symbol: "OP", name: "Optimism", price: "$0.25", type: "shout", icon: "OP" },
  { symbol: "TON", name: "TON", price: "$3.50", type: "shout", icon: "TON" },
  { symbol: "BASE", name: "BASE", price: "$50", type: "shout", icon: "BASE" },
  { symbol: "TON", name: "TON", price: "$20", type: "whisper", icon: "TON" },
  { symbol: "ETH", name: "ETH", price: "$50", type: "whisper", icon: "ETH" },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white p-6 max-w-lg mx-auto">
      {/* Search Bar */}
      <div className="relative mb-8">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="0x67j6D4Kogj7Vu9Dsn7Y39f"
          className="pl-10 pr-4 py-3 w-full rounded-full border border-gray-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Message Options */}
      <div className="mb-8">
        <div className="flex gap-4 text-lg font-medium text-gray-600 border-b border-gray-100 pb-4">
          <button className="text-black">Send a Message</button>
          <span>|</span>
          <button>Message Wall</button>
        </div>
      </div>

      {/* Token Lists */}
      <div className="space-y-6">
        {/* Shout Section */}
        <div>
          <h2 className="text-lg font-medium mb-4">Shout</h2>
          <div className="space-y-3">
            {tokens
              .filter((token) => token.type === "shout")
              .map((token, index) => (
                <div
                  key={`${token.symbol}-${index}`}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
                        token.symbol === "OP"
                          ? "bg-red-500"
                          : token.symbol === "TON"
                          ? "bg-blue-500"
                          : "bg-blue-700"
                      }`}
                    >
                      {token.icon}
                    </div>
                    <div>
                      <div className="font-medium">{token.name}</div>
                      <div className="text-gray-500">{token.price}</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              ))}
          </div>
        </div>

        {/* Whisper Section */}
        <div>
          <h2 className="text-lg font-medium mb-4">Whisper</h2>
          <div className="space-y-3">
            {tokens
              .filter((token) => token.type === "whisper")
              .map((token, index) => (
                <div
                  key={`${token.symbol}-${index}`}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
                        token.symbol === "ETH" ? "bg-gray-700" : "bg-blue-500"
                      }`}
                    >
                      {token.icon}
                    </div>
                    <div>
                      <div className="font-medium">{token.name}</div>
                      <div className="text-gray-500">{token.price}</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
