
export interface Message {
  id: string;
  content: string;
  senderAddress: string;
  chainSymbol: string;
  timestamp: Date;
  privacyType: "public" | "squad" | "secret";
  read: boolean;
  chainColor: string;
}
