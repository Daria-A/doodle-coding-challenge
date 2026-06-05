import { Message } from '../types';
import { MessageItem } from './MessageItem';

export const MessageList = ({ messages }: { messages: Message[] }) => {
  return (
    <ul className="max-w-[640px] mx-auto">
      {messages.map((msg) => (
        <MessageItem key={msg._id} {...msg}></MessageItem>
      ))}
    </ul>
  );
};
