import { CreateMessageRequest, Message } from '../app/types';

const accessToken = 'super-secret-doodle-token';
const API_URL = 'http://localhost:3000/api';

export async function getMessages(): Promise<Message[]> {
  const res = await fetch(`${API_URL}/v1/messages`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to load messages');
  }

  return res.json();
}

export async function postMessages(message: CreateMessageRequest): Promise<Message> {
  const res = await fetch(`${API_URL}/v1/messages`, {
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(message),
  });

  if (!res.ok) {
    throw new Error('Failed to post message');
  }

  return res.json();
}
