import { Message } from '../types';

export const MessageItem = (message: Message) => {
  const isUser = message.author === 'user';
  const time = new Date(message.createdAt).toLocaleTimeString([], {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <li className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`
        max-w-[75%] rounded-lg p-4 text-sm shadow-sm
        ${isUser ? 'bg-yellow-100 text-gray-900' : 'bg-white text-gray-900 border border-gray-100'}
      `}
      >
        {!isUser && (
          <span
            className="block text-xs text-gray-400 mb-1"
            aria-label={`Message from ${message.author}`}
          >
            {message.author}
          </span>
        )}
        <p className="font-medium">{message.message}</p>
        <div className={`flex mt-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
          <time className="text-xs text-gray-400" dateTime={message.createdAt}>
            {time}
          </time>
        </div>
      </div>
    </li>
  );
};
