
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import SquadList from "@/components/squads/SquadList";
import CreateSquadSheet from "@/components/squads/CreateSquadSheet";
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

const Squads = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [squads, setSquads] = useState<Squad[]>(mockSquads);

  const handleCreateSquad = (newSquad: Squad) => {
    setSquads([...squads, newSquad]);
  };

  return (
    <Layout>
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Squads</h1>
          <CreateSquadSheet onSquadCreate={handleCreateSquad} />
        </div>
        <SquadList squads={squads} />
      </div>
    </Layout>
  );
};

export default Squads;
