
export interface Squad {
  id: string;
  name: string;
  description?: string;
  color: string;
  privacy: "public" | "private";
  memberLimit?: number;
  createdAt: Date;
  memberCount: number;
}

export interface SquadMessage {
  id: string;
  content: string;
  senderAddress: string;
  timestamp: Date;
  squadId: string;
}
