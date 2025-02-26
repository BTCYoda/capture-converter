
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface WalletAddressProps {
  address: string;
  className?: string;
}

const WalletAddress = ({ address, className }: WalletAddressProps) => {
  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(address);
    toast.success("Address copied to clipboard");
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Link
        to={`/messages/${address}`}
        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        {truncateAddress(address)}
      </Link>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6"
        onClick={copyToClipboard}
      >
        <Copy className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default WalletAddress;
