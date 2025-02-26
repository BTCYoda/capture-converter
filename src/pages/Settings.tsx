
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Channel {
  symbol: string;
  name: string;
  price: string;
  color: string;
  privacyType: 'public' | 'squad' | 'secret';
  isExpanded?: boolean;
}

const PrivacyDot = ({ type }: { type: Channel['privacyType'] }) => {
  const colors = {
    public: 'bg-green-500',
    squad: 'bg-blue-500',
    secret: 'bg-black'
  };

  return <div className={`w-2 h-2 rounded-full ${colors[type]}`} />;
};

const ChannelItem = ({ 
  channel, 
  onToggleExpand, 
  onRemove 
}: { 
  channel: Channel;
  onToggleExpand: () => void;
  onRemove: () => void;
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium"
            style={{ backgroundColor: channel.color }}
          >
            <span className="text-white">{channel.symbol}</span>
          </div>
          <div>
            <h3 className="font-medium text-[#1A1F2C]">{channel.name}</h3>
            <p className="text-[#8E9196]">${channel.price}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <PrivacyDot type={channel.privacyType} />
          <button 
            onClick={onToggleExpand}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${channel.isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      
      {channel.isExpanded && (
        <div className="pb-4 flex justify-end">
          <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
            <Button 
              variant="destructive" 
              size="sm"
              onClick={() => setShowDeleteConfirm(true)}
              className="gap-2"
            >
              <X className="w-4 h-4" />
              Remove
            </Button>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete the {channel.name} channel. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onRemove}>Delete Channel</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  );
};

const SetupChannelSheet = ({ onCreateChannel }: { onCreateChannel: (channel: Channel) => void }) => {
  const [selectedPrivacy, setSelectedPrivacy] = useState<Channel['privacyType']>('public');
  const [price, setPrice] = useState('');
  const [chain, setChain] = useState('ETH');

  const handleCreate = () => {
    const newChannel: Channel = {
      symbol: chain,
      name: `${chain} Channel`,
      price: price || '0.00',
      color: '#6366f1',
      privacyType: selectedPrivacy,
    };
    onCreateChannel(newChannel);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full gap-2">
          <Plus className="w-4 h-4" />
          Set-Up A Channel
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Set Up New Channel</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 py-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Chain</label>
            <select
              value={chain}
              onChange={(e) => setChain(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="ETH">Ethereum</option>
              <option value="OP">Optimism</option>
              <option value="TON">TON</option>
              <option value="BASE">Base</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Privacy Level</label>
            <div className="flex gap-4">
              {[
                { type: 'public', label: 'Public' },
                { type: 'squad', label: 'Squad' },
                { type: 'secret', label: 'Secret' }
              ].map((privacy) => (
                <button
                  key={privacy.type}
                  onClick={() => setSelectedPrivacy(privacy.type as Channel['privacyType'])}
                  className={`flex items-center gap-2 p-2 rounded-md border ${
                    selectedPrivacy === privacy.type ? 'border-primary' : 'border-gray-200'
                  }`}
                >
                  <PrivacyDot type={privacy.type as Channel['privacyType']} />
                  <span>{privacy.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <Button onClick={handleCreate} className="w-full">
            Create Channel
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Settings = () => {
  const [channels, setChannels] = useState<Channel[]>([
    {
      symbol: 'OP',
      name: 'Optimism Channel',
      price: '0.50',
      color: '#ff0420',
      privacyType: 'public',
      isExpanded: false
    },
    {
      symbol: 'TON',
      name: 'TON Channel',
      price: '1.00',
      color: '#0098EA',
      privacyType: 'squad',
      isExpanded: false
    },
    {
      symbol: 'BASE',
      name: 'Base Channel',
      price: '0.75',
      color: '#0052FF',
      privacyType: 'secret',
      isExpanded: false
    }
  ]);

  const toggleExpand = (index: number) => {
    setChannels(channels.map((channel, i) => 
      i === index ? { ...channel, isExpanded: !channel.isExpanded } : channel
    ));
  };

  const removeChannel = (index: number) => {
    setChannels(channels.filter((_, i) => i !== index));
  };

  const addChannel = (newChannel: Channel) => {
    setChannels([...channels, newChannel]);
  };

  return (
    <Layout>
      <div className="space-y-6 p-4">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Channel Management</h2>
            <div className="divide-y divide-gray-100">
              {channels.map((channel, index) => (
                <ChannelItem
                  key={index}
                  channel={channel}
                  onToggleExpand={() => toggleExpand(index)}
                  onRemove={() => removeChannel(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <SetupChannelSheet onCreateChannel={addChannel} />
      </div>
    </Layout>
  );
};

export default Settings;
