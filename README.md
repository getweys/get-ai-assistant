# GET AI Assistant Dashboard

A modern, well-structured GET AI Assistant dashboard built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modular Architecture**: Clean separation of concerns with reusable components
- **Type Safety**: Comprehensive TypeScript interfaces and types
- **Real-time Chat**: Simulated AI chat with streaming responses
- **Dashboard Analytics**: AI insights, usage metrics, and connected systems
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Error Handling**: Proper error boundaries and loading states
- **SEO Optimized**: Comprehensive metadata and Open Graph tags

## 📁 Project Structure

```
├── app/
│   ├── error.tsx              # Error boundary component
│   ├── global-error.tsx       # Global error boundary
│   ├── layout.tsx             # Root layout with metadata
│   ├── loading.tsx            # Loading component
│   └── page.tsx               # "" dashboard page
├── components/
│   ├── chat/
│   │   ├── capability-card.tsx    # AI capability display cards
│   │   ├── chat-area.tsx          # "" chat container
│   │   ├── chat-input.tsx         # Message input component
│   │   ├── message-bubble.tsx     # Individual message component
│   │   └── welcome-message.tsx    # Initial welcome message
│   ├── header/
│   │   └── header.tsx            # Top navigation header
│   ├── sidebar/
│   │   ├── ai-insights.tsx       # AI insights cards
│   │   ├── connected-systems.tsx # System status indicators
│   │   ├── sidebar.tsx           # "" sidebar container
│   │   ├── smart-prompts.tsx     # Suggested prompts
│   │   └── usage-metrics.tsx     # Usage statistics
│   └── ui/                       # Shadcn UI components
├── hooks/
│   └── use-chat.ts               # Chat functionality hook
├── lib/
│   ├── mock-data.ts              # Sample data for dashboard
│   └── utils.ts                  # Utility functions
├── types/
│   ├── chat.ts                   # Chat-related types
│   ├── dashboard.ts              # Dashboard data types
│   └── index.ts                  # Type exports
└── public/                       # Static assets
```

## 🛠️ Key Improvements Made

### 1. **Component Architecture**

- Extracted monolithic component into focused, reusable components
- Clear separation between UI components and business logic
- Consistent prop interfaces and component composition

### 2. **Type Safety**

- Comprehensive TypeScript interfaces for all data structures
- Proper typing for component props and state
- Centralized type definitions with clear exports

### 3. **Custom Hooks**

- `useChat` hook encapsulates all chat functionality
- Clean separation of state management from UI components
- Reusable logic that can be easily tested and modified

### 4. **Error Handling**

- Error boundaries for graceful error handling
- Loading states with branded UI
- Development-friendly error details

### 5. **SEO & Metadata**

- Comprehensive metadata configuration
- Open Graph and Twitter Card support
- Proper semantic HTML structure

## 🎨 Design System

The dashboard uses a consistent design system with:

- **Color Palette**: Blue primary (#3b82f6), green success (#16a34a), gray neutral (#374151)
- **Typography**: Geist Sans and Geist Mono fonts
- **Spacing**: Consistent Tailwind spacing scale
- **Components**: Shadcn UI components with custom styling

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Development Guidelines

- Use functional components with TypeScript
- Follow the RORO (Receive an Object, Return an Object) pattern
- Prefer named exports for components
- Use descriptive variable names with auxiliary verbs
- Implement proper error handling with early returns
- Use Tailwind CSS for styling with mobile-first approach

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📦 Dependencies

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
