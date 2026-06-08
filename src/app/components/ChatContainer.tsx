'use client';

import { useState, useEffect } from 'react';
import { Message } from '../types';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { getMessages, getNewMessages, postMessages } from '../../services/api';

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const poll = async (lastTimestamp?: string) => {
      const newMessages = lastTimestamp ? await getNewMessages(lastTimestamp) : await getMessages();
      setMessages((prev) => [...prev, ...newMessages]);
      const latestTimestamp = newMessages.at(-1)?.createdAt ?? lastTimestamp;
      timeout = setTimeout(() => poll(latestTimestamp), 3000);
    };

    poll();

    return () => clearTimeout(timeout);
  }, []);

  const handleSend = async (text: string) => {
    const newMsg = await postMessages({ message: text, author: 'user' });

    setMessages((prev) => [...prev, newMsg]);
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <main className="flex-1 px-6">
        <MessageList messages={messages} />
      </main>
      <footer className="w-full bg-blue-400 p-2">
        <MessageInput onSend={handleSend} />
      </footer>
    </div>
  );
};
