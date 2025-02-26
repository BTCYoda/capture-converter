
import { useEffect, useRef, useState } from "react";
import MessageCard from "./MessageCard";

interface Message {
  id: string;
  content: string;
  senderAddress: string;
  chainSymbol: string;
  timestamp: Date;
  privacyType: "public" | "squad" | "secret";
  read: boolean;
  chainColor: string;
}

interface MessageListProps {
  messages: Message[];
  onLoadMore?: () => void;
  hasMore?: boolean;
}

const MessageList = ({ messages, onLoadMore, hasMore = false }: MessageListProps) => {
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver>();
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && onLoadMore) {
          setLoading(true);
          onLoadMore();
          setLoading(false);
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, hasMore, onLoadMore]);

  return (
    <div className="space-y-1">
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
      {hasMore && <div ref={loadMoreRef} className="h-8" />}
    </div>
  );
};

export default MessageList;
