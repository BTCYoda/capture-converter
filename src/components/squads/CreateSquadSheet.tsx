
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Squad, SquadMember } from "@/types/squad";

const SQUAD_COLORS = [
  "#9b87f5",
  "#7E69AB",
  "#6E59A5",
  "#D6BCFA",
  "#805AD5",
  "#6B46C1",
];

interface CreateSquadSheetProps {
  onSquadCreate: (squad: Squad) => void;
}

const CreateSquadSheet = ({ onSquadCreate }: CreateSquadSheetProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState(SQUAD_COLORS[0]);
  const [newMemberAddress, setNewMemberAddress] = useState("");
  const [invitedMembers, setInvitedMembers] = useState<string[]>([]);

  const handleAddMember = () => {
    if (!newMemberAddress || invitedMembers.includes(newMemberAddress)) return;
    setInvitedMembers([...invitedMembers, newMemberAddress]);
    setNewMemberAddress("");
  };

  const handleRemoveMember = (address: string) => {
    setInvitedMembers(invitedMembers.filter(member => member !== address));
  };

  const handleCreate = () => {
    if (!name.trim()) return;

    const newSquad: Squad = {
      id: Date.now().toString(),
      name: name.trim(),
      description: description.trim(),
      color: selectedColor,
      createdAt: new Date(),
      memberCount: 1 + invitedMembers.length,
      members: [
        {
          walletAddress: "0xYou...", // Creator's address
          joinedAt: new Date(),
          role: "admin"
        }
      ],
      pendingInvites: invitedMembers.map(address => ({
        walletAddress: address,
        invitedAt: new Date(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days expiry
      }))
    };

    onSquadCreate(newSquad);
    setName("");
    setDescription("");
    setSelectedColor(SQUAD_COLORS[0]);
    setInvitedMembers([]);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Squad
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create New Squad</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 py-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Squad Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter squad name..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your squad..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Squad Color</label>
            <div className="flex gap-2">
              {SQUAD_COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-lg ${
                    selectedColor === color ? "ring-2 ring-primary ring-offset-2" : ""
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Invite Members</label>
            <div className="flex gap-2">
              <Input
                value={newMemberAddress}
                onChange={(e) => setNewMemberAddress(e.target.value)}
                placeholder="Enter wallet address..."
                onKeyPress={(e) => e.key === "Enter" && handleAddMember()}
              />
              <Button onClick={handleAddMember}>Add</Button>
            </div>
            {invitedMembers.length > 0 && (
              <div className="mt-2 space-y-2">
                {invitedMembers.map((address) => (
                  <div key={address} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                    <span className="text-sm truncate">{address}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveMember(address)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Button onClick={handleCreate} className="w-full">
            Create Squad
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CreateSquadSheet;
