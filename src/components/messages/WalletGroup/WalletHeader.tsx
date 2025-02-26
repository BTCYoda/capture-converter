
interface WalletHeaderProps {
  address: string;
}

const WalletHeader = ({ address }: WalletHeaderProps) => {
  return (
    <div className="flex items-center gap-2 px-4">
      <div className="w-6 h-6 bg-gray-200 rounded-full" />
      <span className="text-sm font-medium text-gray-900">{address}</span>
    </div>
  );
};

export default WalletHeader;
