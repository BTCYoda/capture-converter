
import { useState } from "react";

interface ChainSelectorProps {
  selectedChain: string;
  onChainChange: (chain: string) => void;
}

const ChainSelector = ({ selectedChain, onChainChange }: ChainSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Chain</label>
      <select
        value={selectedChain}
        onChange={(e) => onChainChange(e.target.value)}
        className="w-full p-2 border rounded-md"
      >
        <option value="OP">Optimism</option>
        <option value="V">Base</option>
        <option value="TON">TON</option>
      </select>
    </div>
  );
};

export default ChainSelector;
