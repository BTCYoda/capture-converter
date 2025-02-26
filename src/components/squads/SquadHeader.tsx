
import { Button } from "@/components/ui/button";
import CreateSquadSheet from "./CreateSquadSheet";
import type { Squad } from "@/types/squad";

interface SquadHeaderProps {
  onSquadCreate: (squad: Squad) => void;
}

const SquadHeader = ({ onSquadCreate }: SquadHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Squads</h1>
      <CreateSquadSheet onSquadCreate={onSquadCreate} />
    </div>
  );
};

export default SquadHeader;
