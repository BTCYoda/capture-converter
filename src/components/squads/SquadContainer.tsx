
import { useState } from "react";
import SquadHeader from "./SquadHeader";
import SquadList from "./SquadList";
import type { Squad } from "@/types/squad";

// Mock data
const mockSquads: Squad[] = [
  {
    id: "1",
    name: "Alpha Traders 🔥",
    description: "Elite trading group focused on DeFi opportunities and market analysis",
    color: "#9b87f5",
    createdAt: new Date("2024-02-24T15:10:00Z"),
    memberCount: 3,
    members: [
      {
        walletAddress: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        joinedAt: new Date("2024-02-24T15:10:00Z"),
        role: "admin"
      },
      {
        walletAddress: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
        joinedAt: new Date("2024-02-24T15:15:00Z"),
        role: "member"
      }
    ],
    pendingInvites: [
      {
        walletAddress: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
        invitedAt: new Date("2024-02-24T16:00:00Z"),
        expiresAt: new Date("2024-03-02T16:00:00Z")
      }
    ]
  },
  {
    id: "2",
    name: "Degen Squad 🎲",
    description: "High risk, high reward. We explore the newest projects and opportunities",
    color: "#7E69AB",
    createdAt: new Date("2024-02-23T12:00:00Z"),
    memberCount: 2,
    members: [
      {
        walletAddress: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
        joinedAt: new Date("2024-02-23T12:00:00Z"),
        role: "admin"
      }
    ],
    pendingInvites: [
      {
        walletAddress: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
        invitedAt: new Date("2024-02-23T14:00:00Z"),
        expiresAt: new Date("2024-03-01T14:00:00Z")
      }
    ]
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
