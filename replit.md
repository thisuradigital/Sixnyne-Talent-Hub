# Hiring Portal

A comprehensive hiring and training portal built with React, TypeScript, and Vite.

## Overview

This is a hiring portal application that provides:
- Job listings and application workflows
- MasterClass training programs for Client Service, Design, and Creative roles
- Skill testing assessments
- User profiles and progress tracking
- Leaderboard functionality

## Project Architecture

### Frontend Stack
- **React 18** with TypeScript
- **Vite** for development and bundling
- **React Router v6** for routing
- **TanStack Query** for data fetching
- **Tailwind CSS** for styling
- **Radix UI** + **shadcn/ui** for components
- **Lucide React** for icons

### Directory Structure
```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   └── ...          # App-specific components
├── data/            # Constants and static data
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries
├── pages/           # Page components
├── types/           # TypeScript type definitions
└── utils/           # Helper functions
```

### Key Routes
- `/` - Homepage
- `/jobs` - Job listings
- `/jobs/:jobId` - Job details
- `/jobs/:jobId/apply` - Job application form
- `/company` - Company information
- `/masterclass` - MasterClass hub
- `/masterclass/dashboard` - User dashboard
- `/masterclass/module/:moduleId` - Module reader
- `/masterclass/quiz/:moduleId` - Quiz runner
- `/skill-testing` - Skill testing dashboard

## Development

### Running the Application
The application runs on port 5000 using Vite dev server:
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

## Recent Changes
- **December 12, 2025**: Migrated from Lovable to Replit environment
  - Updated Vite config to use port 5000 and allow all hosts
  - Removed lovable-tagger plugin dependency from vite config
