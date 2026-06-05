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
    <form onSubmit={handleSubmit} aria-label="Send a message">
      <div className="max-w-[640px] mx-auto flex gap-3">
        <input
          className="flex-1 rounded px-4 py-3 text-sm outline-none bg-white"
          type="text"
          aria-label="Message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message..."
        />
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition-colors"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};
