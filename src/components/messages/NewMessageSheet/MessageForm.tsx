
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface MessageFormProps {
  recipientAddress: string;
  message: string;
  onRecipientChange: (address: string) => void;
  onMessageChange: (message: string) => void;
  onSend: () => void;
}

const MessageForm = ({
  recipientAddress,
  message,
  onRecipientChange,
  onMessageChange,
  onSend,
}: MessageFormProps) => {
  return (
    <>
      <div className="space-y-2">
        <label className="text-sm font-medium">Recipient Address</label>
        <Input
          type="text"
          value={recipientAddress}
          onChange={(e) => onRecipientChange(e.target.value)}
          placeholder="0x..."
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Message</label>
        <Textarea
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          placeholder="Type your message..."
          className="min-h-[100px]"
        />
      </div>
      <Button onClick={onSend} className="w-full">
        Send Message
      </Button>
    </>
  );
};

export default MessageForm;
