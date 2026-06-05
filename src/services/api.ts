import { CreateMessageRequest, Message } from '../app/types';

export async function getMessages(): Promise<Message[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/messages`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to load messages');
  }

  return res.json();
}

export async function postMessages(message: CreateMessageRequest): Promise<Message> {
  const res = await fetch(`${process.env.NEXT_PUBLICAPI_URL}/v1/messages`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(message),
  });

  if (!res.ok) {
    throw new Error('Failed to post message');
  }

  return res.json();
}
