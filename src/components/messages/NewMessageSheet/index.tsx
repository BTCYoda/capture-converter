
import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ChainSelector from "./ChainSelector";
import PrivacySelector from "./PrivacySelector";
import MessageForm from "./MessageForm";

const NewMessageSheet = () => {
  const [selectedChain, setSelectedChain] = useState("OP");
  const [privacyType, setPrivacyType] = useState<"public" | "squad" | "secret">("public");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Sending message:", { selectedChain, privacyType, recipientAddress, message });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="absolute right-4 top-4">
          <Mail className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Message</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 py-6">
          <ChainSelector selectedChain={selectedChain} onChainChange={setSelectedChain} />
          <PrivacySelector privacyType={privacyType} onPrivacyChange={setPrivacyType} />
          <MessageForm
            recipientAddress={recipientAddress}
            message={message}
            onRecipientChange={setRecipientAddress}
            onMessageChange={setMessage}
            onSend={handleSend}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NewMessageSheet;
