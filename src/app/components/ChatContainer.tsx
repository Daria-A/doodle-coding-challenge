'use client';

import { useState, useEffect } from 'react';
import { Message } from '../types';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { getMessages, postMessages } from '../../services/api';

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    getMessages().then((msgs) => {
      setMessages(msgs);
    });
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
