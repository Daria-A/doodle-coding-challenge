# Chat App — Frontend Challenge

A real-time chat interface built with Next.js,
TypeScript, and Tailwind CSS as part of a frontend
coding challenge.

## Tech Stack

- **Next.js 16** — React framework with App Router
- **TypeScript** — type safety across components and
  API layer
- **Tailwind CSS v4** — utility-first styling

## Getting Started

Install dependencies:

```bash
npm install

Create a .env.local file in the root:

NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_API_TOKEN=your-token-here

Run the development server:

npm run dev

Open http://localhost:3001 in your browser.

▎ The backend API must be running separately on port
▎ 3000.

Project Structure

src/
├── app/
│   ├── components/
│   │   ├── ChatContainer.tsx   # Main layout, state,  data fetching
│   │   ├── MessageList.tsx     # Renders list of messages
│   │   ├── MessageItem.tsx     # Individual message bubble
│   │   └── MessageInput.tsx    # Input field and send button
│   ├── types/
│   │   └── index.ts            # Shared TypeScript interfaces
│   └── page.tsx
└── services/
    └── api.ts                  # API calls to backend


Features

- Fetch and display chat messages on load
- Send new messages
- Accessible markup — semantic HTML, aria labels, keyboard navigation
- Responsive layout for mobile and desktop
```
