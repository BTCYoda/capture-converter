
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

const SearchModuleOne = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="relative mb-8">
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8E9196] h-5 w-5" />
        <Input
          type="text"
          placeholder="Search"
          className="pl-12 pr-4 py-4 w-full rounded-full border-none bg-white shadow-md hover:shadow-lg transition-shadow duration-200 focus:ring-2 focus:ring-[#9b87f5] focus:ring-opacity-50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm text-[#8E9196]">Use Case 18:</h3>
        <h1 className="text-2xl font-semibold text-[#1A1F2C]">
          Forging an Onchain Alliance
        </h1>
        <p className="text-[#8E9196]">(Hermes message prior to searching)</p>
      </div>
    </div>
  );
};

export default SearchModuleOne;
