
export interface Squad {
  id: string;
  name: string;
  description?: string;
  color: string;
  createdAt: Date;
  memberCount: number;
  members: SquadMember[];
  pendingInvites: PendingInvite[];
  externalLinks?: SquadLink[];
}

export interface SquadMember {
  walletAddress: string;
  joinedAt: Date;
  role: 'admin' | 'member';
  lastActive?: Date;
}

export interface PendingInvite {
  walletAddress: string;
  invitedAt: Date;
  expiresAt: Date;
}

export interface SquadLink {
  title: string;
  url: string;
}

export interface SquadMessage {
  id: string;
  content: string;
  senderAddress: string;
  timestamp: Date;
  squadId: string;
}
