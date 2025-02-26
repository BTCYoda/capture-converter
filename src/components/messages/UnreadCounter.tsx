
import { cn } from "@/lib/utils";

interface UnreadCounterProps {
  count: number;
  className?: string;
}

const UnreadCounter = ({ count, className }: UnreadCounterProps) => {
  if (count === 0) return null;

  return (
    <div
      className={cn(
        "min-w-[1.25rem] h-5 px-1 rounded-full bg-amber-500 text-white text-xs font-medium flex items-center justify-center",
        className
      )}
    >
      {count}
    </div>
  );
};

export default UnreadCounter;
