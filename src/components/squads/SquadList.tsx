
import { useState } from "react";
import { ChevronDown, Users, Link as LinkIcon } from "lucide-react";
import type { Squad } from "@/types/squad";
import SquadMessages from "./SquadMessages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SquadListProps {
  squads: Squad[];
}

interface SquadItemProps {
  squad: Squad;
}

const SquadItem = ({ squad }: SquadItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [newMemberAddress, setNewMemberAddress] = useState("");

  const handleAddMember = () => {
    if (!newMemberAddress) return;
    // Here you would typically handle the invitation process
    setNewMemberAddress("");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div 
        className="p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setShowDetails(!showDetails)}
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
              showDetails ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {showDetails && (
        <div className="border-t p-4 space-y-4">
          {squad.description && (
            <div>
              <h4 className="text-sm font-medium mb-1">Description</h4>
              <p className="text-sm text-gray-600">{squad.description}</p>
            </div>
          )}

          <div>
            <h4 className="text-sm font-medium mb-2">Members</h4>
            <div className="space-y-2">
              {squad.members.map((member) => (
                <div key={member.walletAddress} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                  <div>
                    <span className="text-sm font-medium">{member.walletAddress}</span>
                    <span className="text-xs text-gray-500 ml-2">{member.role}</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    Joined {new Date(member.joinedAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {squad.pendingInvites && squad.pendingInvites.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Pending Invites</h4>
              <div className="space-y-2">
                {squad.pendingInvites.map((invite) => (
                  <div key={invite.walletAddress} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                    <span className="text-sm">{invite.walletAddress}</span>
                    <span className="text-xs text-gray-500">
                      Invited {new Date(invite.invitedAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-sm font-medium mb-2">Invite New Member</h4>
            <div className="flex gap-2">
              <Input
                value={newMemberAddress}
                onChange={(e) => setNewMemberAddress(e.target.value)}
                placeholder="Enter wallet address..."
              />
              <Button onClick={handleAddMember}>
                <Users className="w-4 h-4 mr-2" />
                Invite
              </Button>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Hide Messages" : "Show Messages"}
          </Button>
        </div>
      )}

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
