import { useState } from 'react';

export const MessageInput = ({ onSend }: { onSend: (message: string) => void }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};
