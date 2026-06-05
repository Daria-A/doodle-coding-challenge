import { Message } from '../types';
import { MessageItem } from './MessageItem';

export const MessageList = ({ messages }: { messages: Message[] }) => {
  return (
    <div>
      {messages.map((msg) => (
        <MessageItem key={msg._id} message={msg.message}></MessageItem>
      ))}
    </div>
  );
};
