
import { useState } from "react";
import SquadHeader from "./SquadHeader";
import SquadList from "./SquadList";
import type { Squad } from "@/types/squad";

// Mock data
const mockSquads: Squad[] = [
  {
    id: "1",
    name: "Alpha Traders 🔥",
    description: "Elite trading group",
    color: "#9b87f5",
    privacy: "private",
    createdAt: new Date("2024-02-24T15:10:00Z"),
    memberCount: 42
  },
  {
    id: "2",
    name: "Degen Squad 🎲",
    description: "High risk, high reward",
    color: "#7E69AB",
    privacy: "public",
    createdAt: new Date("2024-02-23T12:00:00Z"),
    memberCount: 156
  }
];

const SquadContainer = () => {
  const [squads, setSquads] = useState<Squad[]>(mockSquads);

  const handleCreateSquad = (newSquad: Squad) => {
    setSquads([...squads, newSquad]);
  };

  return (
    <div className="space-y-6 p-4">
      <SquadHeader onSquadCreate={handleCreateSquad} />
      <SquadList squads={squads} />
    </div>
  );
};

export default SquadContainer;
