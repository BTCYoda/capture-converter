
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Squad } from "@/types/squad";
import SquadMessages from "./SquadMessages";

interface SquadListProps {
  squads: Squad[];
}

interface SquadItemProps {
  squad: Squad;
}

const SquadItem = ({ squad }: SquadItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div 
        className="p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: squad.color }}
            >
              {squad.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-medium">{squad.name}</h3>
              <p className="text-sm text-gray-500">{squad.memberCount} members</p>
            </div>
          </div>
          <ChevronDown 
            className={`w-5 h-5 text-gray-500 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isExpanded && (
        <div className="border-t">
          <SquadMessages squadId={squad.id} />
        </div>
      )}
    </div>
  );
};

const SquadList = ({ squads }: SquadListProps) => {
  return (
    <div className="space-y-4">
      {squads.map((squad) => (
        <SquadItem key={squad.id} squad={squad} />
      ))}
    </div>
  );
};

export default SquadList;
