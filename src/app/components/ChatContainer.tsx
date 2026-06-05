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
    <div>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};
